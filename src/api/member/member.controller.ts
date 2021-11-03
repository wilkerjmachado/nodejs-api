import { Request, Response, NextFunction, Router } from "express";
import { AbstractController } from "../base";
import { Member, MemberService } from ".";

interface Options {
    memberService: MemberService
}

export class MemberController extends AbstractController<Member> {

    constructor(private options: Options) {
        super('/member', options.memberService)
        this.init();
    }

    private init() {
        this.getRouter().get(`${this.getPath()}/function/:id_function`, this.getByFunction);
        this.getRouter().get(`${this.getPath()}/tag/:id_tag`, this.getByTag);
        this.getRouter().post(`${this.getPath()}/:id/tag`, this.addTag);
        this.getRouter().delete(`${this.getPath()}/:id/tag/:id_tag`, this.removeTag);
    }

    private getByFunction = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const funcId = request.params.id_function;
            const list = await this.options.memberService.getByFunction(funcId);
            response.send(list);
        } catch (error) {
            next(error);
        }
    }

    private getByTag = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const tagId = request.params.id_tag;
            const list = await this.options.memberService.getByTag(tagId);
            response.send(list);
        } catch (error) {
            next(error);
        }
    }

    private addTag = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const id = request.params.id;
            const tagDto: any = request.body;
            const item = await this.options.memberService.addTag(id, tagDto);
            response.send(item);
        } catch (error) {
            next(error);
        }
    }

    private removeTag = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const id = request.params.id;
            const tagId = request.params.id_tag;
            await this.options.memberService.removeTag(id, tagId);
            response.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

}