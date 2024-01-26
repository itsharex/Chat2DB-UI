import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    normal: css`
      cursor: pointer;

      &:hover {
        color: ${token.colorText};
        background-color: ${token.colorFillSecondary};
      }
    `,
    disabled: css`
      cursor: not-allowed;
      opacity: 0.5;
    `,
    icon: css`
      transition: scale 400ms ${token.motionEaseOut};
      &:active {
        scale: 0.9;
      }
    `,
  };
});
