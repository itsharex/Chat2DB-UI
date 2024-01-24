import { Playgournd, useControls, useCreateStore } from '@chat2db/ui';
import React from 'react';

export default () => {
  const store = useCreateStore();
  const { text, color, fontSize, fontWeight, upperCase } = useControls(
    {
      text: 'Playground',
      color: '#FF0033',
      fontSize: {
        max: 100,
        min: 4,
        step: 2,
        value: 16,
      },
      fontWeight: {
        options: ['normal', 'bold', 'bolder', 'lighter'],
        value: 'normal',
      },
      upperCase: false,
    },
    { store },
  );

  return (
    <Playgournd levaStore={store}>
      <div style={{ color, fontSize, fontWeight }}>
        {upperCase ? text.toUpperCase() : text}
      </div>
    </Playgournd>
  );
};
