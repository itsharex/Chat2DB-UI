import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    content: css`
      overflow: hidden;
      padding: 4px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      z-index: 1000;
    `,
    menuItem: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #000;
      border-radius: 4px;
      line-height: 28px;
      padding: 0 8px 0 4px;
      cursor: pointer;
      &[data-highlighted] {
        background-color: rgba(0, 0, 0, 0.05);
        outline: none;
      }
    `,
  };
});
