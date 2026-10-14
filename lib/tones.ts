// Colour cycle for stacked cards (Approach principles, Process phases), so a
// run of cards reads as distinct moments instead of one long column of text.
// Every fg/sub/accent pair is >= 4.5:1 on its background.
export type Tone = {
  bg: string;
  fg: string;
  sub: string;
  accent: string;
  border: string;
  chipBorder: string;
};

export const TONES: Tone[] = [
  {
    bg: "var(--card)",
    fg: "var(--ink)",
    sub: "var(--ink-2)",
    accent: "var(--c1)",
    border: "var(--line)",
    chipBorder: "var(--line)",
  },
  {
    bg: "var(--purple-soft)",
    fg: "var(--ink)",
    sub: "var(--ink-2)",
    accent: "var(--c4)",
    border: "transparent",
    chipBorder: "rgba(91, 33, 182, 0.18)",
  },
  {
    bg: "var(--ink)",
    fg: "#FFFFFF",
    sub: "rgba(255, 255, 255, 0.82)",
    accent: "#E9D5FF",
    border: "transparent",
    chipBorder: "rgba(255, 255, 255, 0.2)",
  },
];

export const tone = (i: number) => TONES[i % TONES.length];
