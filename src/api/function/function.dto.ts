import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Function } from ".";

export class FunctionDTO implements Function {

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    public name: string;
}