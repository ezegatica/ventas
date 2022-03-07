// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { searchItem } from "../../lib/database";
import { ItemDocument as Item } from "../../lib/models/Item";

type Data = {
  items: Item[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query: any = req.query.query;
  const items = await searchItem(query);
  res.status(200).json({ items });
}
