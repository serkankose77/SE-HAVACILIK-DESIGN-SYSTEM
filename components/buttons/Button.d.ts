import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary action control for SE Havacılık surfaces. Orange `primary`
 * for the main CTA, `secondary` (ink) for dark-on-light pairing,
 * `outline`/`ghost` for lower emphasis. Use `onDark` on inverted sections.
 *
 * @startingPoint section="Buttons" subtitle="Brand action buttons — 4 variants, 3 sizes" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Icon node rendered before the label (pass an SVG). */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to container width. @default false */
  block?: boolean;
  /** Tune outline/ghost for dark backgrounds. @default false */
  onDark?: boolean;
  /** Render as another element (e.g. "a"). @default "button" */
  as?: 'button' | 'a';
}

export declare function Button(props: ButtonProps): React.JSX.Element;
