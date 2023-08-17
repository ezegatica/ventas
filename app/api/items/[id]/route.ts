import { NextResponse } from 'next/server';


export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const slug = params.id // 'a', 'b', or 'c'
  return NextResponse.json({slug});
}