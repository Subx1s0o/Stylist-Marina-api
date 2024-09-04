import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ServicesDocument extends Document {
  @Prop({ type: String, required: true })
  href: string;

  @Prop({
    type: Map,
    of: String,
    required: true,
  })
  title: Map<string, string>;

  @Prop({
    type: Map,
    of: String,
    required: true,
  })
  duration_consultation: Map<string, string>;

  @Prop({
    type: Map,
    of: String,
    required: true,
  })
  duration_work: Map<string, string>;

  @Prop({
    type: Map,
    of: String,
    required: true,
  })
  result: Map<string, string>;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, enum: ['online', 'offline'], required: true })
  format: 'online' | 'offline';

  @Prop({ type: String, enum: ['style', 'makeup'], required: true })
  category: 'style' | 'makeup';

  @Prop({
    type: Map,
    of: String,
    required: false,
  })
  attention: Map<string, string>;
}

export const ServicesSchema = SchemaFactory.createForClass(ServicesDocument);
