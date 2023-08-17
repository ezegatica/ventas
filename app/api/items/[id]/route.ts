import { NextResponse } from 'next/server';
import { getItemBySlug } from '../../../../lib/querys';


export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const item = await getItemBySlug(params.id);
  return NextResponse.json(item);
}