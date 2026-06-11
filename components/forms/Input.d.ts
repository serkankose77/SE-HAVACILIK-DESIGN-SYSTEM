import * as React from 'react';

/**
 * Single-line text field with brand focus ring, label, hint and error.
 * Used throughout the contact / quote-request forms.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text shown below when there is no error. */
  hint?: string;
  /** Error message — switches the field to its invalid style. */
  error?: string;
  /** Show the required asterisk. @default false */
  required?: boolean;
  /** Style for dark/inverted backgrounds. @default false */
  onDark?: boolean;
}

export declare function Input(props: InputProps): React.JSX.Element;
