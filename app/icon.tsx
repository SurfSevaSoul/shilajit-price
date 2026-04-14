import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0d1f14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            color: "#4ade80",
            fontSize: 13,
            fontWeight: 900,
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          SP
        </span>
      </div>
    ),
    { ...size }
  );
}
