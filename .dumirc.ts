import { defineConfig } from 'dumi';
import { IThemeConfig } from 'dumi/dist/client/theme-api/types';

const themeConfig: IThemeConfig = {
  title: 'Chat2DB UI',
  name: 'UI',

  prefersColor: {
    default: 'light',
    switch: false,
  },
  socialLinks: {
    github: 'https://github.com/chat2db/chat2db-ui',
  },
};

export default defineConfig({
  title: 'Chat2DB UI',
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  themeConfig: themeConfig,
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.tsx',
  },
});
