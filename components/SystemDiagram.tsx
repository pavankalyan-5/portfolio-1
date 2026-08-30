"use client";

import { useEffect, useRef, useState } from "react";

import {
  systemDefaultReadout,
  systemEdges,
  systemNodes,
  systemTiers,
  systemViewBox,
} from "@/lib/content";

/**
 * The hero diagram. Doubles as navigation — activating a node scrolls to the
 * section it documents, which is what lets the top bar stay short.
 */
export default function SystemDiagram() {
  const [focused, setFocused] = useState<string | null>(null);
  const [motion, setMotion] = useState(false);
  const packetsRef = useRef<SVGGElement>(null);

  // Packets are SMIL, which CSS cannot pause — so only mount them when the
  // viewer has not asked for reduced motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const node = focused ? systemNodes.find((n) => n.id === focused) : null;
  const readout = node
    ? { id: node.label, meta: node.meta, body: node.detail, badge: node.metric ?? node.flag }
    : { ...systemDefaultReadout, badge: undefined as string | undefined };

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-9 sm:mt-14">
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
        <span className="tag">Fig. 01 — the system, as I work on it</span>
        <span className="tag hidden sm:inline">hover a node</span>
      </div>

      <svg
        viewBox={`0 0 ${systemViewBox.width} ${systemViewBox.height}`}
        role="img"
        aria-label="Architecture diagram: client and API gateway feeding the Vivo product, template conversion engine, production reliability, algorithm service and demo UI, which sit on a datastore and platform layer."
        className="hidden w-full border border-t-0 border-line bg-gradient-to-b from-panel to-panel/40 md:block"
      >
        {systemTiers.map((tier) => (
          <text
            key={tier.label}
            x={tier.x}
            y={26}
            textAnchor="middle"
            className="fill-faint font-mono text-[10px] uppercase tracking-[0.24em]"
          >
            {tier.label}
          </text>
        ))}

        <g>
          {systemEdges.map((edge) => {
            const on = focused === edge.from || focused === edge.to;
            const off = focused !== null && !on;
            return (
              <path
                key={edge.id}
                id={edge.id}
                d={edge.d}
                className={`edge ${on ? "edge-on" : ""} ${off ? "edge-off" : ""}`}
              />
            );
          })}
        </g>

        <g ref={packetsRef}>
          {motion &&
            systemEdges.map((edge, i) => (
              <circle key={edge.id} r={2.6} className="fill-signal opacity-70">
                <animateMotion
                  dur={`${2.6 + (i % 3) * 0.7}s`}
                  begin={`${i * 0.34}s`}
                  repeatCount="indefinite"
                >
                  <mpath href={`#${edge.id}`} />
                </animateMotion>
              </circle>
            ))}
        </g>

        <g>
          {systemNodes.map((n) => {
            const on = focused === n.id;
            const off = focused !== null && !on;
            const badge = n.metric ?? n.flag;
            return (
              <g
                key={n.id}
                role="button"
                tabIndex={0}
                aria-label={`${n.label}. ${n.detail}`}
                className={`cursor-pointer outline-none ${off ? "opacity-[0.34]" : ""}`}
                onMouseEnter={() => setFocused(n.id)}
                onMouseLeave={() => setFocused(null)}
                onFocus={() => setFocused(n.id)}
                onBlur={() => setFocused(null)}
                onClick={() => go(n.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    go(n.href);
                  }
                }}
              >
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={n.h}
                  className={`transition-colors ${
                    on ? "fill-[#0f1c1d] stroke-signal" : "fill-panel-2 stroke-line-hi"
                  }`}
                  strokeWidth={1}
                />
                {/* Badge sits on its own row — label plus badge on one line
                    overflows the box for the longer service names. Nodes
                    without a badge centre their two lines instead. */}
                <text
                  x={n.x + 16}
                  y={n.y + (badge ? 28 : 34)}
                  className={`font-mono text-sm font-medium tracking-[-0.01em] ${
                    on ? "fill-signal" : "fill-text"
                  }`}
                >
                  {n.label}
                </text>
                <text
                  x={n.x + 16}
                  y={n.y + (badge ? 47 : 53)}
                  className="fill-faint font-mono text-[10.5px] tracking-[0.06em]"
                >
                  {n.meta}
                </text>
                {badge && (
                  <text
                    x={n.x + 16}
                    y={n.y + 69}
                    className={
                      n.metric
                        ? "fill-meter font-mono text-[11px] font-semibold tracking-[0.04em]"
                        : "fill-signal font-mono text-[10px] font-medium tracking-[0.1em]"
                    }
                  >
                    {badge}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      <div
        aria-live="polite"
        className="grid min-h-[118px] items-start gap-2 border border-t-0 border-line bg-panel px-5 py-5 sm:px-8 md:grid-cols-[200px_1fr] md:gap-x-8 lg:px-14"
      >
        <div>
          <div className="font-mono text-[13px] text-signal">{readout.id}</div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.06em] text-faint">
            {readout.meta}
          </div>
        </div>
        <div>
          <p className="max-w-[74ch] text-dim">{readout.body}</p>
          {readout.badge && (
            <span
              className={`mt-2.5 inline-block border px-2.5 py-[3px] font-mono text-[11px] font-semibold tracking-[0.1em] ${
                node?.metric
                  ? "border-meter/30 text-meter"
                  : "border-signal/30 text-signal"
              }`}
            >
              {readout.badge}
            </span>
          )}
        </div>
      </div>

      {/* Below md the diagram is unusable, so the same content becomes a list. */}
      <ul className="border border-t-0 border-line md:hidden">
        {systemNodes.map((n) => (
          <li key={n.id} className="border-b border-line px-5 py-4 last:border-b-0 sm:px-8">
            <div className="nodeid">{n.label}</div>
            <div className="tag mt-1">{n.meta}</div>
            <p className="mt-2.5 text-sm text-dim">{n.detail}</p>
            {(n.metric ?? n.flag) && (
              <span
                className={`mt-2.5 inline-block border px-2.5 py-[3px] font-mono text-[11px] font-semibold tracking-[0.1em] ${
                  n.metric ? "border-meter/30 text-meter" : "border-signal/30 text-signal"
                }`}
              >
                {n.metric ?? n.flag}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
