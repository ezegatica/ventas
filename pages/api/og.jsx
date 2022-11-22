import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') ?? "Producto!";
  const image = searchParams.get('image') ?? "https://cataas.com/cat/cute";

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={image}
          style={{
            borderRadius: 128,
          }}
        />
        <p>{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}