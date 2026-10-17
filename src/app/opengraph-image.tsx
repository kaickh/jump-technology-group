import { ImageResponse } from "next/og";

export const alt = "Jump Technology Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          color: "#021639",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 3, color: "#0174AD" }}>
          JUMP TECHNOLOGY GROUP
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 160, height: 6, background: "#00DED8", marginBottom: 28 }} />
          <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 860 }}>
            Make your next move a better one.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
