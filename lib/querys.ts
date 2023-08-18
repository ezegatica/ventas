import 'server-only';
import { Item } from '@prisma/client';
import prisma from './prisma';

export const getItems = async (): Promise<Item[] | []> => {
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
  return items;
};

export const getItemBySlug = async (slug: string): Promise<Item | null> => {
  const item = await prisma.item.findUnique({
    where: {
      slug
    }
  });
  return item;
};
