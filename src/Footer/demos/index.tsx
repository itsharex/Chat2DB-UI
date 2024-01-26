import { Footer, FooterProps } from '@lobehub/ui';
import React from 'react';

const columns: FooterProps['columns'] = [
  {
    items: [
      {
        description: 'React Components',
        openExternal: true,
        title: 'Chat2DB UI',
        url: 'https://github.com/Chat2DB/chat2db-ui',
      },
      {
        description: 'Chat2DB Client',
        openExternal: true,
        title: 'Chat2DB',
        url: 'https://github.com/chat2db/chat2db',
      },
      {
        description: 'Chat2DB WebSite',
        openExternal: true,
        title: 'Chat2DB WebSite',
        url: 'https://sqlgpt.cn',
      },
    ],
    title: 'Resources',
  },
  {
    items: [
      {
        description: 'Antd',
        openExternal: true,
        title: '🐜 Antd',
        url: 'https://ant.design/index-cn',
      },
      {
        description: 'Umi',
        openExternal: true,
        title: '🧐  Umi',
        url: 'https://umijs.org/',
      },
    ],
    title: 'More Products',
  },
];

export default () => {
  return <Footer bottom="Copyright © 2024" columns={columns} />;
};
