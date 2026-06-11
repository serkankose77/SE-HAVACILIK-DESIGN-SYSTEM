import * as React from 'react';

/**
 * The brand's recurring section header — mono uppercase kicker, bold Saira
 * title, the 64×3 orange rule, and an optional lead paragraph.
 *
 * @startingPoint section="Sections" subtitle="Kicker + title + orange rule header" viewport="700x240"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Mono uppercase kicker above the title (e.g. "Kalite Politikamız"). */
  kicker?: string;
  /** Section title. */
  title: string;
  /** Lead paragraph under the rule. */
  sub?: string;
  /** Center-align (hero/section openers). @default false */
  center?: boolean;
  /** Dark-section styling. @default false */
  onDark?: boolean;
  /** Heading level 1–4. @default 2 */
  level?: 1 | 2 | 3 | 4;
}

export declare function SectionHeading(props: SectionHeadingProps): React.JSX.Element;
