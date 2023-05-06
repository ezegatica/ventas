import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export async function GET(_request: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff4f4)",
          fontSize: 84,
          letterSpacing: -1,
          textAlign: "center",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: "black",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            ventas.ezegatica.com
          </span>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            // "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          Venta
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            // "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          De
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            // "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          Garage
        </div>
        <div
          style={{
            right: 42,
            bottom: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              marginRight: 8,
              fontSize: 20,
            }}
          >
            By Eze Gatica
          </span>
          <span
            style={{
              width: 24,
              height: 24,
              background: "lime",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
