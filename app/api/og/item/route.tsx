import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import formatPrice from "../../../../lib/format-price";

export const runtime = "edge";
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title");
  const image = searchParams.get("image");
  const price = searchParams.get("price");
  if (!title || !image || !price) {
    return new ImageResponse(
      <>Missing parameters! Add ?title, ?image and ?price</>,
      {
        width: 1200,
        height: 630,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
        <img width="348" height="348" src={image} />
        <h1 style={{ fontSize: 60, color: "black", marginBottom: 15 }}>
          {title}
        </h1>
        <h2
          style={{
            fontSize: 36,
            color: "black",
            fontWeight: "bold",
            marginTop: 0,
            borderRadius: 20,
            padding: 10,
            boxShadow: "1px 0px 19px -1px rgba(0,0,0,0.55)",
          }}
        >
          {formatPrice(parseInt(price))}
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
