// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Item, getAllItems } from "../../lib/redis";

type Data = {
  items: Item[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const items = await getAllItems();
  res.status(200).json({ items });
}
