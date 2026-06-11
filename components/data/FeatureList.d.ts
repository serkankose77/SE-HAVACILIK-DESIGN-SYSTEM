import * as React from 'react';

/** Checklist with orange check icons — service features, benefit bullets. */
export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Bullet strings (or nodes). */
  items: React.ReactNode[];
  /** Grid columns. @default 1 */
  columns?: 1 | 2 | 3;
  /** Dark-section styling. @default false */
  onDark?: boolean;
}

export declare function FeatureList(props: FeatureListProps): React.JSX.Element;
