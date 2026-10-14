/**
 * Letters roll up and are replaced by a copy from below when the parent link
 * or button is hovered or keyboard-focused.
 *
 * Adapted from Skiper UI "Text Roll Nav Menu" (skiper58 / TextRoll) by
 * @gurvinder-singh02 — https://skiper-ui.com. Free version: attribution to
 * Skiper UI is required (credited in the site footer). Rebuilt in CSS (see
 * .text-roll in globals.css) so the nav doesn't ship an animation library on
 * every page; screen readers get the plain word, not single letters.
 */
export default function TextRoll({ children }: { children: string }) {
  return (
    <span className="text-roll">
      <span className="sr-only">{children}</span>
      <span className="text-roll-inner" aria-hidden>
        {children.split("").map((ch, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties}>
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
    </span>
  );
}
