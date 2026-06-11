import * as React from 'react';

/** Multi-line text area with the same label/hint/error contract as Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  onDark?: boolean;
  /** Visible rows. @default 5 */
  rows?: number;
}

export declare function Textarea(props: TextareaProps): React.JSX.Element;
