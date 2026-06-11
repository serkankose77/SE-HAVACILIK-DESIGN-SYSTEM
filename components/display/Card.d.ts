import * as React from 'react';

export type CardVariant = 'default' | 'framed' | 'inverse';

/**
 * Content card — white, 12px radius, md shadow. `framed` adds the 2px
 * orange machine-card frame; `inverse` is the dark steel variant.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gradient icon tile rendered at the top (pass an SVG). */
  icon?: React.ReactNode;
  /** Card heading. */
  title?: string;
  /** String children render as muted body text; nodes render as-is. */
  children?: React.ReactNode;
  /** @default "default" */
  variant?: CardVariant;
  /** Lift 6px + deepen shadow on hover. @default false */
  hover?: boolean;
}

export declare function Card(props: CardProps): React.JSX.Element;
