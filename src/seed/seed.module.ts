import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Data, DataSchema } from '../documents/schemas/document.schema.ts';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]),
  ],
  providers: [SeedService],
  controllers: [SeedController],
})
export class SeedModule {}
