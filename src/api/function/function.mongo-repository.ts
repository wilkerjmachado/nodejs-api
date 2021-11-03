import { AbstractMongoRepository } from "../base/";
import { FunctionModel, Function } from ".";

export class FunctionMongoRepository extends AbstractMongoRepository<Function> {

    constructor() {
        super(FunctionModel);
    }

}