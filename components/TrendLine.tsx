export default function TrendLine() {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 1000 600"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    >
      <path
        className="trend-line"
        d="M -20 520 L 140 460 L 260 500 L 400 360 L 540 400 L 680 220 L 820 260 L 1020 60"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.16}
        pathLength={1}
      />
      {[
        [140, 460],
        [400, 360],
        [680, 220],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r={5} fill="var(--accent)" opacity={0.28} />
      ))}
    </svg>
  );
}
