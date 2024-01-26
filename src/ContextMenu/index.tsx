import { DivProps } from '@/types';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { ReactNode, memo, useEffect, useState } from 'react';
import { useStyles } from './style';

export interface ContextMenuProps extends DivProps {
  trigger?: ReactNode;
  /**
   * open的值为undefined时为非受控, boolean为受控
   */
  open?: boolean;
  menuList: IContextMenuMenuItem[];
  onCloseContextMenu: () => void;
}

export interface IContextMenuMenuItem {
  icon?: string;
  label: string;
  value: string;
  shortcut?: {
    label: string;
    value: string;
  };
  onClick?: (menuItem: IContextMenuMenuItem) => void;
}

const ContextMenu = memo<ContextMenuProps>(
  ({ trigger, open: openFromProps, menuList = [], onCloseContextMenu }) => {
    const { styles } = useStyles();

    const [open, setOpen] = useState<boolean | undefined>(false);

    useEffect(() => {
      setOpen(!!openFromProps);
    }, [openFromProps]);

    const handleCloseContextMenu = () => {
      setOpen(false);
      if (typeof onCloseContextMenu === 'function') {
        onCloseContextMenu();
      }
    };

    const handleClickMenu = (menuItem: IContextMenuMenuItem) => {
      if (typeof menuItem.onClick === 'function') {
        menuItem.onClick(menuItem);
      }
      handleCloseContextMenu();
    };

    const handleKeyDown = (event: any) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        const curKey = event.key.toLowerCase();
        const findMenu = menuList.find((i) => i.shortcut?.value === curKey);
        if (findMenu) {
          handleClickMenu(findMenu);
        }
      }
    };

    return (
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={styles.content}
            align="start"
            onPointerDownOutside={() => {
              handleCloseContextMenu();
            }}
            onEscapeKeyDown={() => {
              handleCloseContextMenu();
            }}
            onKeyDown={handleKeyDown}
          >
            {menuList.map((menuItem) => (
              <DropdownMenu.Item
                key={menuItem.value}
                className={styles.menuItem}
                onSelect={() => {
                  handleClickMenu(menuItem);
                }}
              >
                <span>{menuItem.label}</span>
                {menuItem?.shortcut && <span>{menuItem?.shortcut?.label}</span>}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
);

export default ContextMenu;
