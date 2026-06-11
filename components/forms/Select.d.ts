import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Native select styled with the brand chevron, label, hint and error. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'placeholder'> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  onDark?: boolean;
  /** Disabled first option shown until a choice is made. */
  placeholder?: string;
  /** Options as strings or {value,label} objects. */
  options?: Array<string | SelectOption>;
}

export declare function Select(props: SelectProps): React.JSX.Element;
