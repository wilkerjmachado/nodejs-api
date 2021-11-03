import { AbstractService } from "../base";
import { TagMongoRepository, Tag, TagDTO } from ".";

export class TagService extends AbstractService<Tag> {

    constructor(private tagRepository: TagMongoRepository) {
        super(tagRepository, TagDTO, "Tag");
    }

}