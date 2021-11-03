import { Model } from "mongoose";
import { InvalidIdError, GenericDatabaseError } from "../../errors";
import { Repository, Entity } from ".";

export abstract class AbstractMongoRepository<E extends Entity> implements Repository {

    constructor(protected model: Model<E>) {
    }

    protected validateId(id: any) {
        const ObjectId = require('mongoose').Types.ObjectId;
        if (!ObjectId.isValid(id)) {
            throw new InvalidIdError(id);
        }
    }

    getAll(): Promise<any> {
        return this.model.find().catch(error => { throw new GenericDatabaseError(error) });
    }

    getById(id: any): Promise<any> {
        this.validateId(id)
        return this.model.findById(id).catch(error => { throw new GenericDatabaseError(error) });
    }

    update(id: any, dto: any): Promise<any> {
        this.validateId(id)
        return this.model.findByIdAndUpdate(id, dto, { new: true }).catch(error => { throw new GenericDatabaseError(error) });
    }

    create(dto: any): Promise<any> {
        const createdPost = new this.model({
            ...dto
        });
        return createdPost.save().catch(error => { throw new GenericDatabaseError(error) });
    }

    delete(id: any): Promise<any> {
        this.validateId(id)
        return this.model.findByIdAndDelete(id).catch(error => { throw new GenericDatabaseError(error) });
    }

}