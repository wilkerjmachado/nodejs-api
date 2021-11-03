import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Tag } from ".";

export class TagDTO implements Tag {

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    public name: string;
}
