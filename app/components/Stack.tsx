"use client";
import { useState } from "react";
import { stack } from "../data";

export default function Stack() {
  const [on, setOn] = useState<Set<string>>(new Set());
  const toggle = (s: string) =>
    setOn((prev) => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {Object.entries(stack).map(([group, tools]) => (
        <div key={group} className="rounded-2xl border border-line bg-panel p-5">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{group}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((s) => {
              const active = on.has(s);
              return (
                <li key={s}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggle(s)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_18px_rgba(255,122,26,0.35)] ${
                      active ? "border-accent bg-accent text-black hover:text-black" : "border-line bg-black text-white"
                    }`}
                  >
                    {s}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
