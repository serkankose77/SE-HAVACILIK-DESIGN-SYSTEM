import * as React from 'react';

export type IconButtonVariant = 'solid' | 'soft' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/**
 * Compact icon-only button — back-to-top, social links, toolbar actions.
 * Always pass `label` for accessibility.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (SVG). */
  children: React.ReactNode;
  /** @default "ghost" */
  variant?: IconButtonVariant;
  /** @default "md" */
  size?: IconButtonSize;
  /** Accessible label (sets aria-label). */
  label: string;
}

export declare function IconButton(props: IconButtonProps): React.JSX.Element;
