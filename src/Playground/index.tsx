import { DivProps } from '@/types';
import { Flex } from 'antd';
import { LevaPanel } from 'leva';
import React from 'react';
import { useStyles } from './style';

export interface PlaygourndProps extends DivProps {
  /**
   * @description The leva store
   */
  levaStore: any;
}

const Playgournd = React.memo<PlaygourndProps>(({ levaStore, children }) => {
  const { styles } = useStyles();
  return (
    <Flex justify="stretch" align="stretch">
      <Flex justify="center" align="center" style={{ flex: 1 }}>
        {children}
      </Flex>
      <div className={styles.leva}>
        <LevaPanel fill flat store={levaStore} titleBar={false} />
      </div>
    </Flex>
  );
});

export default Playgournd;
export { useControls, useCreateStore } from 'leva';
