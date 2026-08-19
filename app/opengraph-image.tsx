import { ImageResponse } from "next/og";

export const alt = "Jervis Labs — Blockchain, Web3 & AI Transformation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 82px",
      color: "#ffffff",
      background: "linear-gradient(120deg, #06121c 0%, #003a66 58%, #0064ab 100%)",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, fontWeight: 700 }}>
        <span style={{ width: 18, height: 18, background: "#22bec9", borderRadius: 4 }} />
        JERVIS LABS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 70, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-3px" }}>
          <span>Blockchain, Web3 & AI</span>
          <span>Transformation</span>
        </div>
        <div style={{ fontSize: 28, color: "#b9d8eb" }}>
          기술을 실제 비즈니스 솔루션으로.
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, color: "#7fdce3", fontSize: 20, letterSpacing: "2px" }}>
        BLOCKCHAIN · RWA/STO · AI CREATIVITY
      </div>
    </div>,
    size,
  );
}
