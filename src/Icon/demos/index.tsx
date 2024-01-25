import {
  Icon,
  IconProps,
  Playgournd,
  useControls,
  useCreateStore,
} from '@chat2db/ui';
import * as LucideIcon from 'lucide-react';
import React from 'react';

export default () => {
  const store = useCreateStore();
  const control: IconProps | any = useControls(
    {
      icon: {
        options: LucideIcon,
        value: LucideIcon.AArrowDown,
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
      <Icon {...control} />
    </Playgournd>
  );
};
