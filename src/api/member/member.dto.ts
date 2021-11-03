import { ArrayUnique, IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Function } from "../function";
import { Tag } from "../tag";
import { Member } from ".";
import TypeMember from "./type.member.enum";

export class MemberDTO implements Member{

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    public name: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(TypeMember)
    public type: TypeMember;

    @IsNumber()
    @IsOptional()
    public durationContract: number;

    @IsOptional()
    public function: Function;

    @IsOptional()
    @IsArray()
    @ArrayUnique()
    public tags: Tag[];
}