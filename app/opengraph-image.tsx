import { ImageResponse } from "next/og";

export const alt = "Kaoraek Ventures — Strategy, Financial & Growth for Thai SMEs";
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
          background: "linear-gradient(120deg, #2b126d 0%, #5b2bc8 55%, #9a55e6 100%)",
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
              border: "3px solid #f2b632",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            KRV
          </div>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#f7c84f" }}>
            STRATEGY · FINANCIAL · GROWTH
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
            Kaoraek Ventures
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: "rgba(255,255,255,0.8)" }}>
            Helping Thai businesses take the first step to systematic growth
          </div>
        </div>
        <div style={{ display: "flex", height: 6, width: 160, background: "#f2b632" }} />
      </div>
    ),
    { ...size },
  );
}
