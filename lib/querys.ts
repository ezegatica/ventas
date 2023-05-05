import { Item } from "@prisma/client";

import prisma from "./prisma";

export const getItems = async (query?: string): Promise<Item[] | []> => {
  const items = await prisma.item.findMany({
    where: {
      OR: [
        {
          nombre: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          descripcion: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
    orderBy: [
      {
        vendido: "asc",
      },
      {
        id: "desc",
      },
    ],
  });
  return items;
};

export const getItemBySlug = async (slug: string): Promise<Item | null> => {
  const item = await prisma.item.findUnique({
    where: {
      slug,
    },
  });
  return item;
};
