import { ImageResponse } from "next/og";
import { siteData } from "../data/site";

export const alt = `${siteData.name} personal website`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background:
            "radial-gradient(circle at 12% 12%, rgba(214, 139, 95, 0.35), transparent 26%), radial-gradient(circle at 86% 18%, rgba(78, 127, 120, 0.32), transparent 22%), linear-gradient(135deg, #171c22 0%, #14181d 55%, #0f1216 100%)",
          color: "#f2eadf",
          overflow: "hidden",
          padding: "64px",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "32px",
            borderRadius: "36px",
            border: "1px solid rgba(255, 238, 221, 0.12)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "72px",
            top: "72px",
            width: "260px",
            height: "260px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 238, 221, 0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "999px",
              border: "1px solid rgba(214, 139, 95, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "999px",
                background: "rgba(214, 139, 95, 0.86)",
                boxShadow: "0 0 0 22px rgba(214, 139, 95, 0.09)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: "#d68b5f",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "1px",
                background: "#d68b5f",
              }}
            />
            <div>Personal website</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "720px",
              gap: "20px",
            }}
          >
            <div
              style={{
                fontSize: 82,
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                fontWeight: 600,
                fontFamily: "Georgia, serif",
              }}
            >
              {siteData.name}
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.35,
                color: "#c0b4a7",
              }}
            >
              Writing, favorite quotes, and reflective notes on software, discipline, and a quieter kind of ambition.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "#c0b4a7",
              fontSize: 28,
            }}
          >
            <div>{siteData.location}</div>
            <div style={{ color: "rgba(255, 238, 221, 0.3)" }}>•</div>
            <div>{siteData.role}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
