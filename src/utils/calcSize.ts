import { IconSize } from '@/IconButton';

export const calcSize = (size?: IconSize) => {
  let boxSize: number;
  let borderRadius: number;
  let iconSize: number;
  let strokeWidth: number;
  switch (size) {
    case 'large':
      boxSize = 42;
      borderRadius = 8;
      iconSize = 28;
      strokeWidth = 2;
      break;
    case 'normal':
      boxSize = 36;
      borderRadius = 6;
      iconSize = 20;
      strokeWidth = 2;
      break;
    case 'small':
      boxSize = 32;
      borderRadius = 4;
      iconSize = 14;
      strokeWidth = 1.5;
      break;
    default:
      boxSize = size?.boxSize ?? 36;
      borderRadius = size?.borderRadius ?? 6;
      iconSize = size?.iconSize ?? 24;
      strokeWidth = size?.strokeWidth ?? 2;
      break;
  }

  return {
    boxSize,
    borderRadius,
    iconSize,
    strokeWidth,
  };
};
