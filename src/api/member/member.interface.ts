import { Entity } from "../base";
import { Function } from "../function";
import { Tag } from "../tag";
import { TypeMember } from ".";

export interface Member extends Entity {
    name: string;
    type: TypeMember;
    durationContract: number;
    function: Function;
    tags: Tag[];
}