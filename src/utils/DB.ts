import { Schema, model, connect } from 'mongoose';
import { userEntity } from '../Model/user';
import { User } from '../interfaces/user';

export class DataBase {
    DB!: typeof import("mongoose");

    constructor(url: string) {
        this.init(url).then(() => {
            console.log(`suscess: connet to ${url} `);
        }).catch(() => {
            console.log(`error: cannt connet to ${url} `);
        })
    }

    async init(url: string): Promise<void> {
        this.DB = await connect(url)
    }

    static async test(): Promise<User[]>{
        return userEntity.find()
    }
}