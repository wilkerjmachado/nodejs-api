import { AbstractMongoRepository } from "../base";
import { TagModel, Tag } from ".";

export class TagMongoRepository extends AbstractMongoRepository<Tag> {

    constructor() {
        super(TagModel);
    }

}