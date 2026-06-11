import * as React from 'react';

/** Large metric + mono uppercase caption (e.g. "15+ / Yıllık Deneyim"). */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric itself — keep it short ("15+", "±2.5 μm", "24/7"). */
  value: React.ReactNode;
  /** Mono uppercase caption beneath the value. */
  label: string;
  /** Center-align (default left). @default false */
  center?: boolean;
  /** Dark-section styling. @default false */
  onDark?: boolean;
  /** Render the value in brand orange. @default false */
  accent?: boolean;
}

export declare function Stat(props: StatProps): React.JSX.Element;
