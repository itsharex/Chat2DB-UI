import { DivProps } from '@/types';
import { calcSize } from '@/utils/calcSize';
import { LucideIcon, LucideProps } from 'lucide-react';
import React from 'react';

export type IconSizeType = 'large' | 'normal' | 'small';

export type LucideIconProps = Pick<
  LucideProps,
  'fill' | 'fillRule' | 'fillOpacity' | 'color' | 'focusable'
>;

export interface IconProps extends LucideIconProps, DivProps {
  icon: LucideIcon;
  size?: IconSizeType;
}

const Icon: React.FC<IconProps> = ({ icon, size, color, className }) => {
  const LucideIcon = icon;
  const { iconSize, strokeWidth } = calcSize(size);
  return (
    <LucideIcon
      className={className}
      color={color}
      size={iconSize}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;
