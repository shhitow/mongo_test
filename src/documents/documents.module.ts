import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Data, DataSchema } from './schemas/document.schema.ts';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Data.name, schema: DataSchema }]),
  ],
  providers: [DocumentsService],
  controllers: [DocumentsController],
})
export class DocumentsModule {}
