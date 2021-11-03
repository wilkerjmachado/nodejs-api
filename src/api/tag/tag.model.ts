import * as mongoose from 'mongoose';
import { Tag } from '.';

const TagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export const TagModel = mongoose.model<Tag & mongoose.Document>('Tag', TagSchema);
