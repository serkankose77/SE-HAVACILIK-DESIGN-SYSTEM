import * as React from 'react';

export type BadgeTone =
  | 'brand' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'solid' | 'outline';

/** Small mono-uppercase status/category pill (e.g. AS9100, 5-Axis, Pass). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "brand" */
  tone?: BadgeTone;
  /** Prefix with a status dot. @default false */
  dot?: boolean;
  /** Optional leading icon (SVG). */
  icon?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): React.JSX.Element;
