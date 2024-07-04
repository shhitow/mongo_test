import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { Data } from '../documents/schemas/document.schema.ts';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Data.name) private readonly dataModel: Model<Data>,
  ) {}

  async seedDatabase() {
    const batchSize = 10000;
    const parallelBatches = 10;
    const totalDocuments = 10000000;
    const totalBatches = Math.ceil(totalDocuments / batchSize);

    const batchPromises = [];

    for (let i = 0; i < totalBatches; i++) {
      const bulkOps = [];

      for (let j = 0; j < batchSize; j++) {
        bulkOps.push({
          insertOne: {
            document: {
              name: faker.word.sample(),
            },
          },
        });
      }

      const batchPromise = this.dataModel.bulkWrite(bulkOps);

      batchPromises.push(batchPromise);

      if (batchPromises.length === parallelBatches) {
        await Promise.all(batchPromises);
        batchPromises.length = 0;
      }
    }

    if (batchPromises.length > 0) {
      await Promise.all(batchPromises);
    }
  }
}
