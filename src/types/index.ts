import { HTMLAttributes } from 'react';

export type DivProps = HTMLAttributes<HTMLDivElement>;

export type SvgProps = HTMLAttributes<SVGSVGElement> & {
  height?: number;
};
