import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#000000", panel: "#0c0c0c", line: "#262626", mute: "#a3a3a3", accent: "#ff7a1a", mint: "#ffa060" }, fontFamily: { sans: ["ui-sans-serif","system-ui","Segoe UI","Roboto","Helvetica","Arial","sans-serif"], mono: ["ui-monospace","SFMono-Regular","Consolas","Menlo","monospace"] } } },
  plugins: [],
} satisfies Config;
