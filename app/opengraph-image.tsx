import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: 96,
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Andreas Hansen</div>
        <div style={{ fontSize: 36, color: "#a1a1aa" }}>
          BI &amp; Data Analyst
        </div>
      </div>
    ),
    { ...size },
  );
}
