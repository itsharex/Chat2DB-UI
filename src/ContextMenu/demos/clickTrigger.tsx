import { ContextMenu, IContextMenuMenuItem, IconButton } from '@chat2db/ui';
import { MoreHorizontal } from 'lucide-react';
import React from 'react';

const menuList: IContextMenuMenuItem[] = [
  {
    icon: 'xx',
    label: '自然语言转SQL',
    value: 'sql_generate',
    shortcut: {
      label: '⌘+1',
      value: '1',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
  {
    icon: 'xx',
    label: '解释SQL',
    value: 'sql_explain',
    shortcut: {
      label: '⌘+2',
      value: '2',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
  {
    icon: 'xx',
    label: '转化SQL',
    value: 'sql_convert',
    shortcut: {
      label: '⌘+3',
      value: '3',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
  {
    icon: 'xx',
    label: '优化SQL',
    value: 'sql_optimise',
    shortcut: {
      label: '⌘+4',
      value: '4',
    },
    onClick: (menuItem) => {
      console.log('onClick', menuItem.label);
    },
  },
];

export default () => {
  return (
    <ContextMenu
      menuList={menuList}
      onCloseContextMenu={() => {
        console.log('onCloseContextMenu');
      }}
      trigger={
        <IconButton
          icon={MoreHorizontal}
          onClick={() => {
            console.log('onClick');
          }}
        />
      }
    />
  );
};
