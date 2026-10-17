/* ลายเส้นคลื่นแบบใน pitch deck — วาดด้วยโค้ด จึงคมชัดทุกจอและไฟล์เล็ก */

const W = 1440;
const H = 360;

function buildPaths(count: number, variant: "soft" | "peak") {
  const paths: string[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    let d = "";
    for (let x = 0; x <= W; x += 20) {
      const u = x / W;
      const y =
        variant === "soft"
          ? H * 0.5 +
            70 * Math.sin(u * Math.PI * 2.2 + t * 1.8) * (0.55 + 0.45 * t) +
            45 * Math.sin(u * Math.PI * 0.9 - t * 2.4)
          : H * 0.55 +
            85 * Math.sin(u * Math.PI * 3 + t * 1.2) * (0.4 + 0.6 * (1 - t)) +
            35 * Math.cos(u * Math.PI * 1.3 + t * 3);
      d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`;
    }
    paths.push(d);
  }
  return paths;
}

export default function Waves({
  id,
  className = "",
  variant = "soft",
  count = 34,
  tone = "brand",
}: {
  id: string;
  className?: string;
  variant?: "soft" | "peak";
  count?: number;
  tone?: "brand" | "light";
}) {
  const paths = buildPaths(count, variant);
  const stops =
    tone === "brand"
      ? ["#5b2bc8", "#9a55e6", "#c23fb4"]
      : ["#ffffff", "#e6d8ff", "#f7c84f"];
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset="0.55" stopColor={stops[1]} />
          <stop offset="1" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${id})`} strokeWidth="0.8" vectorEffect="non-scaling-stroke">
        {paths.map((d, i) => (
          <path key={i} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  );
}
