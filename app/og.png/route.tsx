import { ImageResponse } from "next/og";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#000000", color: "#fff" }}>
        <div style={{ fontSize: 28, color: "#ff7a1a", letterSpacing: 4 }}>CIPHEZ</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>Nwadiaro Miracle Chukwuma</div>
        <div style={{ fontSize: 40, color: "#a3a3a3", marginTop: 12 }}>AI/ML Engineer</div>
        <div style={{ fontSize: 30, color: "#ffa060", marginTop: 48 }}>Agents, RAG, voice and computer vision</div>
      </div>
    ),
    size,
  );
}
