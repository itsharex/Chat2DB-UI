import { DivProps } from '@/types';
import { Flex } from 'antd';
// import { createStyles } from 'antd-style';
import { LevaPanel } from 'leva';
import React from 'react';

// const useStyles = createStyles(() => {
//   return {};
// });

export interface PlaygourndProps extends DivProps {
  /**
   * @description The leva store
   */
  levaStore: any;
}

const Playgournd = React.memo<PlaygourndProps>(({ levaStore, children }) => {
  return (
    <Flex justify="stretch" align="stretch">
      <Flex justify="center" align="center" style={{ flex: 1 }}>
        {children}
      </Flex>
      <div>
        <LevaPanel fill flat store={levaStore} titleBar={false} />
      </div>
    </Flex>
  );
});

export default Playgournd;
export { useControls, useCreateStore } from 'leva';
