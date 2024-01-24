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
  outputPath: 'docs-dist',
  themeConfig: themeConfig,
});
