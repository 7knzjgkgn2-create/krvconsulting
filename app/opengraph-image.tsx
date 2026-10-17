import { ImageResponse } from "next/og";

export const alt = "Kaow Raek Ventures — Strategy & Finance Advisory for Thai SMEs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// รูปตัวอย่างตอนแชร์ลิงก์ใน LINE / Facebook
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1a0f2e 0%, #2a1748 60%, #4f2d84 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              border: "3px solid #c9a24d",
              color: "#d9b86a",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            KRV
          </div>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#e8d3a0" }}>
            STRATEGY · FINANCE · INVESTMENT
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            Kaow Raek Ventures
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: "rgba(255,255,255,0.8)" }}>
            Business Strategy &amp; Finance Advisory for Thai SMEs
          </div>
        </div>
        <div style={{ display: "flex", height: 6, width: 160, background: "#c9a24d" }} />
      </div>
    ),
    { ...size },
  );
}
