import {
  Logo,
  LogoProps,
  Playgournd,
  useControls,
  useCreateStore,
} from '@chat2db/ui';
import { createStyles } from 'antd-style';
import React from 'react';

const useStyles = createStyles(({ isDarkMode }) => ({
  logo: {
    color: isDarkMode ? '#fff' : '#000',
  },
}));

export default () => {
  const { styles } = useStyles();
  const store = useCreateStore();
  const { type, size, color } = useControls(
    {
      type: {
        options: ['image', 'text', 'imageWithText'],
        value: 'image',
      },
      size: {
        max: 100,
        min: 12,
        step: 1,
        value: 64,
      },
      color: '#000',
    },
    { store },
  );
  const props: LogoProps = {
    size,
    type,
  };

  return (
    <Playgournd levaStore={store}>
      <Logo
        className={styles.logo}
        {...props}
        style={{
          color,
        }}
      />
    </Playgournd>
  );
};
