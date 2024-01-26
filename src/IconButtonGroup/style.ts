import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      position: relative;
      display: inline-flex;
      padding: 2px;
      background-color: ${token.colorFillTertiary};
      border-radius: ${token.borderRadius}px;
    `,
  };
});
