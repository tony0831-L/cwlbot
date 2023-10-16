import { Schema, model } from 'mongoose';
import { User, key } from '../interfaces/user';

const keySchema = new Schema<key>({
    openAiKey: {type:String,required:true},
    ttsKey: {type:String,required:true},
});

const userSchema = new Schema<User>({
    _id :{type:String,required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    key:keySchema
});


export const userEntity = model<User>('User', userSchema);