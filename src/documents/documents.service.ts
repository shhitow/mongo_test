import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data } from './schemas/document.schema.ts';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(Data.name) private readonly dataModel: Model<Data>,
  ) {}

  async findByName(name: string): Promise<Data[]> {
    const documents = await this.dataModel.find({ name }).exec();
    if (!documents.length) {
      throw new NotFoundException(`Document with name "${name}" not found`);
    }
    return documents;
  }
}
