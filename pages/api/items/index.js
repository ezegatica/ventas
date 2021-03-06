import dbConnect from '../../../lib/dbConnect';
import Item from '../../../models/Item';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const {query} = req.query;
        let items;
        if (query) {
          items = await Item.find({
            nombre: {
              $regex: query,
              $options: 'i'
            }
          });
        } else {
          items = await Item.find({});
        }
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
