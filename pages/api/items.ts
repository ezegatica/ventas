// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ItemDocument as Item } from "../../lib/models/Item";
import { getAllItems } from "../../lib/database";

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
