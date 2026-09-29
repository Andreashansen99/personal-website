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
          gap: 16,
          padding: 96,
          background: "#f5f6f8",
          color: "#14213d",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Andreas Hansen
        </div>
        <div style={{ fontSize: 34, fontWeight: 500, color: "#2545d1" }}>
          IT &amp; Business Student
        </div>
      </div>
    ),
    { ...size },
  );
}
