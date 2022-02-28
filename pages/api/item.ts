// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createItem } from "../../lib/redis";

type ResponseData = {
  id: string;
};
interface BodyData extends NextApiRequest {
    body: {
        'imagen': string;
        'nombre': string;
        'descripcion': string;
        'precio': number;
    };
  }
export default async function handler(
  req: BodyData,
  res: NextApiResponse<ResponseData>
) {
  try {
    const id = await createItem(req.body);  
    res.status(200).json({ id });
  } catch (error: any) {    
    res.status(400).json(error.message);
  }
}
