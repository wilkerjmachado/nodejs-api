import { Function, FunctionService } from ".";
import { AbstractController } from "../base";

export interface Options {
    functionService: FunctionService
}

export class FunctionController extends AbstractController<Function> {

    constructor(options: Options) {
        super('/function', options.functionService);
    }

}