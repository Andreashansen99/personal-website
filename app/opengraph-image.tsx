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
          background: "#f4f4f5",
          color: "#18181b",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 88,
            width: 88,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            background: "#4f46e5",
            color: "#ffffff",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          AH
        </div>
        <div style={{ fontSize: 72, fontWeight: 700 }}>Andreas Hansen</div>
        <div style={{ fontSize: 36, color: "#52525b" }}>
          IT &amp; Business Student
        </div>
      </div>
    ),
    { ...size },
  );
}
