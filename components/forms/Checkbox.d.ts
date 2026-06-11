import * as React from 'react';

/** Checkbox with brand-orange checked fill and inline label. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Inline label text to the right of the box. */
  label?: React.ReactNode;
}

export declare function Checkbox(props: CheckboxProps): React.JSX.Element;
