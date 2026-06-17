import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "kohút & partners — advokátska kancelária Zvolen";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const sk = locale !== "en";
  const tagline = sk ? "Advokátska kancelária · Zvolen" : "Law firm · Zvolen";
  const headline = sk
    ? "Právne istoty pre podnikanie aj život."
    : "Legal certainty for business and life.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #1F2A51, #141A35)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: 46, height: 46, borderRadius: 12, background: "#FE0202", display: "flex" }} />
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", display: "flex" }}>
            kohút &amp; partners
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 72, height: 6, background: "#FE0202", borderRadius: 999, marginBottom: 28, display: "flex" }} />
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 940,
              display: "flex",
            }}
          >
            {headline}
          </div>
          <div style={{ fontSize: 28, color: "#BFC6DD", marginTop: 26, display: "flex" }}>
            {tagline}
          </div>
        </div>
      </div>
    ),
    size
  );
}
