// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ItemDocument as Item } from "../../../lib/models/Item";
import { searchItemByID } from "../../../lib/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item>
) {
  const query:any = req.query;
  const item = await searchItemByID(query.id);
  res.status(200).json(item)
}
