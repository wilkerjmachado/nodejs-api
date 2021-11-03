import * as mongoose from 'mongoose';
import { Function } from '.';

const FunctionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

export const FunctionModel = mongoose.model<Function & mongoose.Document>('Function', FunctionSchema);