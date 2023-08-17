import { NextResponse } from 'next/server';
import { getItems } from '../../../lib/querys';

export async function GET() {
  const items = await getItems();
  return NextResponse.json(items);
}
