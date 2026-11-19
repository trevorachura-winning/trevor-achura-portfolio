import { ImageResponse } from "next/og";
import { portfolio } from "@/content/portfolio";

export const alt = portfolio.site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { profile } = portfolio;
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
          background: "linear-gradient(135deg, #071533 0%, #0c1d44 60%, #1451d2 140%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            TA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>{profile.name}</span>
            <span style={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }}>{profile.location}</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
          {profile.heroStatement}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#8fb3ff" }}>
          Enterprise AI & Automation Consultant · Full-Stack Engineer
        </div>
      </div>
    ),
    size,
  );
}
