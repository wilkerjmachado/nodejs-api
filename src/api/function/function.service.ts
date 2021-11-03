import { AbstractService } from "../base/";
import { FunctionDTO, Function, FunctionMongoRepository } from ".";

export class FunctionService extends AbstractService<Function> {

    constructor(private functionRepository: FunctionMongoRepository) {
        super(functionRepository, FunctionDTO, "Function");
    }

}