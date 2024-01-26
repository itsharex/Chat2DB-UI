import IconButton from '@/IconButton';
import { DivProps } from '@/types';
import { Flex } from 'antd';
import { LucideIcon } from 'lucide-react';
import React, { memo } from 'react';
import { useStyles } from './style';

export interface IconButtonGroupItem {
  icon: LucideIcon;
  key: string;
  label?: string;
}

export interface IconButtonGroupProps extends DivProps {
  /**
   * @description 按钮组的方向
   * @default row
   */
  direction?: 'row' | 'column';
  /**
   * @description 按钮组的数据
   * @default []
   */
  items: IconButtonGroupItem[];

  /**
   * @description 按钮组的点击事件
   */
  onItemClick: (item: IconButtonGroupItem) => void;
}

const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  direction = 'row',
  items = [],
  onItemClick,
  ...rest
}) => {
  const { styles } = useStyles();
  const isVertical = direction === 'column';
  return (
    <Flex className={styles.container} vertical={isVertical} {...rest}>
      {items.map((item) => {
        return (
          <IconButton
            icon={item.icon}
            key={item.key}
            size={'small'}
            onClick={() => {
              if (onItemClick) {
                onItemClick(item);
              }
            }}
          />
        );
      })}
    </Flex>
  );
};

export default memo(IconButtonGroup);
