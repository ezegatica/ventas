import { NextResponse } from 'next/server';
import { getItemBySlug } from '../../../../lib/querys';


export async function GET(_request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const item = await getItemBySlug(params.id);
  return NextResponse.json(item);
}