import { Tag, TagService } from ".";
import { AbstractController } from "../base/controller";

export interface Options {
    tagService: TagService
}

export class TagController extends AbstractController<Tag> {

    constructor(options: Options) {
        super('/tag', options.tagService);
    }

}