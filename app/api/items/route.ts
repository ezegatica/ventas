import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const items = await prisma.item.findMany({
    orderBy: [
      {
        vendido: 'asc'
      },
      {
        id: 'desc'
      }
    ]
  });
  return NextResponse.json(items);
}
