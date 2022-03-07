// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { searchItem } from "../../lib/database";
import { ItemDocument as Item } from "../../lib/models/Item";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("disconnected");

  res.status(200).json({ message: "Pong!" });
}
