import {
  IconButton,
  IconButtonProps,
  Playgournd,
  useControls,
  useCreateStore,
} from '@chat2db/ui';
import * as LucideIcon from 'lucide-react';
import React from 'react';

export default () => {
  const store = useCreateStore();
  const control: IconButtonProps | any = useControls(
    {
      title: '',
      icon: {
        options: LucideIcon,
        value: LucideIcon.Copy,
      },
      size: {
        options: ['large', 'normal', 'small'],
        value: 'normal',
      },
    },
    {
      store,
    },
  );
  return (
    <Playgournd levaStore={store}>
      <IconButton
        {...control}
        onClick={() => {
          console.log('click IconButton');
        }}
      />
    </Playgournd>
  );
};
