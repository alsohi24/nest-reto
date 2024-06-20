import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../entities/user.entity';
import * as moment from 'moment-timezone';

@Schema()
export class Task extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: true })
  status?: boolean;

  @Prop({ required: true, default: false })
  check: boolean;

  @Prop({ default: () => moment().tz('America/Lima').toDate() })
  startDate: Date;

  @Prop({ default: '' })
  endDate: string;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  user: User | Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
