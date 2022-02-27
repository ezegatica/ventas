// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string | string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { id } = req.query
  res.status(200).json({ id })
}
