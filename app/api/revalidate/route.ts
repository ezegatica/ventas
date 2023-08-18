import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export async function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');
  const secret = request.nextUrl.searchParams.get('secret');

  if (!secret) {
    console.warn("Intento fallido de revalidacion (No secret)")
    return NextResponse.json({ message: 'No se ingresó un secret token' }, { status: 401 })
  }

  const secretDB = await get('secret');

  if (secret !== secretDB) {
        console.warn("Intento fallido de revalidacion (Secret incorrecto)")
    return NextResponse.json({ message: 'El secret token ingresado no es válido' }, { status: 401 })
  }

  if (path) {
    revalidatePath(`/p/${path}`);
    console.info(`Path '${path}' revalidado`)
  }

  revalidatePath('/');
  console.info(`Path ROOT revalidado`)

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
