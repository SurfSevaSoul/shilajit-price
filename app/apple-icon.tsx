import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0d1f14",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        {/* Mountain icon */}
        <svg
          width="64"
          height="44"
          viewBox="0 0 64 44"
          style={{ marginBottom: 10 }}
        >
          {/* Back mountain */}
          <polygon points="42,44 64,8 64,44" fill="#1a3a22" />
          {/* Main mountain */}
          <polygon points="0,44 32,4 64,44" fill="#22c55e" opacity="0.25" />
          <polygon points="0,44 32,4 64,44" fill="none" stroke="#4ade80" strokeWidth="2" />
          {/* Snow cap */}
          <polygon points="32,4 24,20 40,20" fill="#4ade80" opacity="0.9" />
        </svg>
        <span
          style={{
            color: "#4ade80",
            fontSize: 44,
            fontWeight: 900,
            fontFamily: "sans-serif",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          SP
        </span>
        <span
          style={{
            color: "#5d8c6e",
            fontSize: 18,
            fontFamily: "sans-serif",
            letterSpacing: "3px",
            marginTop: 4,
          }}
        >
          .COM
        </span>
      </div>
    ),
    { ...size }
  );
}
