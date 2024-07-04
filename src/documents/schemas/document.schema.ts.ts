import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Data extends Document {
  @Prop({ required: true })
  name: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);

// Indexes
//DataSchema.index({ name: 1 });
