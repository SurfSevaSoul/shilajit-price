import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ShilajitPrice.com — Compare Shilajit Prices, Purity & Lab Data";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0d1f14",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background radial glow — left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 600,
            height: 630,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.12) 0%, transparent 60%)",
          }}
        />
        {/* Background radial glow — right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 600,
            height: 630,
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(16,185,129,0.08) 0%, transparent 55%)",
          }}
        />

        {/* Mountain silhouette backdrop */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            opacity: 0.07,
          }}
        >
          <svg width="900" height="300" viewBox="0 0 900 300">
            <polygon points="0,300 200,60 400,300" fill="#4ade80" />
            <polygon points="200,300 450,20 700,300" fill="#4ade80" />
            <polygon points="500,300 750,80 900,300" fill="#4ade80" />
          </svg>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            padding: "0 80px",
            width: "100%",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.3)",
              borderRadius: 100,
              padding: "8px 20px",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            <span
              style={{
                color: "#4ade80",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Updated April 2026
            </span>
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 0,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                color: "#e8f4ec",
                fontSize: 96,
                fontWeight: 900,
                letterSpacing: "-4px",
                lineHeight: 1,
              }}
            >
              ShilajitPrice
            </span>
            <span
              style={{
                color: "#4ade80",
                fontSize: 96,
                fontWeight: 900,
                letterSpacing: "-4px",
                lineHeight: 1,
              }}
            >
              .com
            </span>
          </div>

          {/* Subheadline */}
          <p
            style={{
              color: "#9ec9ad",
              fontSize: 32,
              fontWeight: 500,
              textAlign: "center",
              margin: "0 0 48px 0",
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Compare Shilajit Prices, Purity &amp; Lab Data
          </p>

          {/* Divider */}
          <div
            style={{
              width: 600,
              height: 1,
              background: "rgba(42,69,53,0.8)",
              marginBottom: 40,
            }}
          />

          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
            }}
          >
            {[
              { value: "74", label: "Products" },
              { value: "46", label: "Brands" },
              { value: "25+", label: "Data Points" },
              { value: "Free", label: "Always" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0 40px",
                  }}
                >
                  <span
                    style={{
                      color: "#4ade80",
                      fontSize: 36,
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      color: "#5d8c6e",
                      fontSize: 16,
                      marginTop: 4,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
                {i < 3 && (
                  <div
                    style={{
                      width: 1,
                      height: 40,
                      background: "rgba(42,69,53,0.8)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent 0%, #22c55e 30%, #10b981 70%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
