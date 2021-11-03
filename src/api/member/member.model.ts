import * as mongoose from 'mongoose';
import { Member } from '.';

export const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  durationContract: Number,
  function: {
    ref: 'Function',
    type: mongoose.Schema.Types.ObjectId,
  },
  tags: [{
    ref: 'Tag',
    type: mongoose.Schema.Types.ObjectId,
  }]
});

export const MemberModel = mongoose.model<Member & mongoose.Document>('Member', MemberSchema);
