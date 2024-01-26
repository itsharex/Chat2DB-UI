import {
  IconButtonGroup,
  Playgournd,
  useControls,
  useCreateStore,
} from '@chat2db/ui';
import { Copy, RotateCw, Trash } from 'lucide-react';
import React from 'react';
import { IconButtonGroupItem, IconButtonGroupProps } from '..';
const items: IconButtonGroupItem[] = [
  {
    icon: Copy,
    key: 'copy',
    label: 'Copy',
  },
  {
    icon: RotateCw,
    key: 'regenerate',
    label: 'Regenerate',
  },
  {
    icon: Trash,
    key: 'delete',
    label: 'Delete',
  },
];

export default () => {
  const store = useCreateStore();
  const control: IconButtonGroupProps | any = useControls(
    {
      direction: {
        value: 'row',
        options: ['row', 'column'],
      },
    },
    { store },
  );
  return (
    <Playgournd levaStore={store}>
      <IconButtonGroup
        {...control}
        items={items}
        onItemClick={(item) => {
          console.log('click IconButtonGroup', item);
        }}
      />
    </Playgournd>
  );
};
