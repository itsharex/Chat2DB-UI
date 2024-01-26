import { LucideIconProps, type IconSizeType } from '@/Icon';
import { DivProps } from '@/types';
import { calcSize } from '@/utils/calcSize';
import { Icon } from '@chat2db/ui';
import { Flex, Tooltip } from 'antd';
import { LucideIcon } from 'lucide-react';
import React, { ReactNode, memo, useMemo } from 'react';
import { useStyles } from './style';

export type IconSize =
  | IconSizeType
  | {
      boxSize: number;
      borderRadius: number;
      iconSize: number;
      strokeWidth: number;
    };

export interface IconButtonProps extends LucideIconProps, DivProps {
  /**
   * @description 气泡展示
   */
  title?: string;
  tooltipDelay?: number;
  icon: LucideIcon;
  size: IconSizeType;
  disable?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  title,
  tooltipDelay = 0.8,
  icon,
  size,
  disable,
  style,
  onClick,
}) => {
  const { styles, cx } = useStyles();
  const { borderRadius, boxSize } = useMemo(() => calcSize(size), [size]);

  const IconContent = <Icon className={styles.icon} size={size} icon={icon} />;
  const iconButtonBlock: ReactNode = (
    <Flex
      justify="center"
      align="center"
      className={cx(disable ? styles.disabled : styles.normal)}
      onClick={disable ? undefined : onClick}
      style={{
        height: boxSize,
        width: boxSize,
        borderRadius,
        ...style,
      }}
    >
      {IconContent}
    </Flex>
  );
  if (!title) {
    return iconButtonBlock;
  }
  return (
    <Tooltip title={title} mouseEnterDelay={tooltipDelay}>
      {iconButtonBlock}
    </Tooltip>
  );
};

export default memo(IconButton);
