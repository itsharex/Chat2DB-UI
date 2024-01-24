import { DivProps } from '@/types';
import { Flex } from 'antd';
import React from 'react';
import LogoImage from './LogoImage';
import LogoText from './LogoText';

export interface LogoProps extends DivProps {
  type?: 'image' | 'text' | 'imageWithText';
  size?: number;
}

const Logo: React.FC<LogoProps> = ({
  type = 'image',
  size = 24,
  className,
  style,
}) => {
  switch (type) {
    case 'image':
      return <LogoImage className={className} height={size} style={style} />;
    case 'text':
      return <LogoText className={className} height={size / 2} style={style} />;
    case 'imageWithText':
      return (
        <Flex
          className={className}
          justify="flex-start"
          align="center"
          gap={size / 4}
        >
          <LogoImage height={size} style={style} />
          <LogoText height={size / 1.8} style={style} />
        </Flex>
      );
  }
};

export default React.memo(Logo);
