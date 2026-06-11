import * as React from 'react';

export interface SpecRow { key: string; value: string; }

/**
 * Zebra-striped mono key/value table for machine specs & tolerances
 * (X-Y-Z travel, spindle speed, accuracy …).
 */
export interface SpecTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rows in display order. */
  specs: SpecRow[];
  /** Dark-section styling. @default false */
  inverse?: boolean;
}

export declare function SpecTable(props: SpecTableProps): React.JSX.Element;
