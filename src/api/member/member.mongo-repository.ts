import { GenericDatabaseError } from "../../errors";
import { AbstractMongoRepository } from "../base";
import { Tag } from "../tag";
import { MemberModel, Member } from ".";

export class MemberMongoRepository extends AbstractMongoRepository<Member> {

    constructor() {
        super(MemberModel);
    }

    protected getPopulate(): string {
        return "tags function"
    }

    public getByFunction(functionId: any): Promise<any> {
        this.validateId(functionId);
        return this.model.find({ "function": functionId }).populate(this.getPopulate()).catch(error => { throw new GenericDatabaseError(error) });
    }

    public getByTag(tagId: any): Promise<any> {
        this.validateId(tagId);
        return this.model.find({ "tags": tagId }).populate(this.getPopulate()).catch(error => { throw new GenericDatabaseError(error) });;
    }

    public addTag(id: any, tag: Tag): Promise<any> {
        return this.model.findOneAndUpdate({ _id: id }, { $addToSet: { tags: tag } }).populate(this.getPopulate()).catch(error => { throw new GenericDatabaseError(error) });
    }

    public async removeTag(id: any, idTag: any): Promise<any> {
        this.validateId(id);
        this.validateId(idTag);
        return this.model.findOneAndUpdate({ _id: id }, { $pull: { tags: idTag } }).catch(error => { throw new GenericDatabaseError(error) });
    }

}