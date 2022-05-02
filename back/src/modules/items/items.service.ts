import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './schemas/item.schema';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async getAllItems(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }
}
