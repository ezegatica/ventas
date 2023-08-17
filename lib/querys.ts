import 'server-only';
import { Item } from '@prisma/client';
import { cache } from 'react';
import prisma from './prisma';

export const revalidate = 60 * 60 * 6; // Cada 6 horas

export const getItems = cache(async (query?: string): Promise<Item[] | []> => {
  const items = await prisma.item.findMany({
    where: {
      OR: [
        {
          nombre: {
            contains: query,
            mode: 'insensitive'
          }
        },
        {
          descripcion: {
            contains: query,
            mode: 'insensitive'
          }
        }
      ]
    },
    orderBy: [
      {
        vendido: 'asc'
      },
      {
        id: 'desc'
      }
    ]
  });
  return items;
});

export const getItemBySlug = cache(async (slug: string): Promise<Item | null> => {
  const item = await prisma.item.findUnique({
    where: {
      slug
    }
  });
  return item;
});
