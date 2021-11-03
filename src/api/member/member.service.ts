import { HttpError, NotFoundError } from "../../errors";
import { AbstractService } from "../base";
import { FunctionService } from "../function";
import { Tag, TagService } from "../tag";
import { MemberMongoRepository, TypeMember, Member, MemberDTO } from ".";

interface Options {
    tagService: TagService,
    functionService: FunctionService,
    memberRepository: MemberMongoRepository,
}

export class MemberService extends AbstractService<Member> {


    constructor(private options: Options) {
        super(options.memberRepository, MemberDTO, "Member");
    }

    protected getPopulate(): string {
        return "tags function"
    }

    public async getByFunction(functionId: any) {
        const list = await this.options.memberRepository.getByFunction(functionId);
        return list;
    }

    public async getByTag(tagId: any) {
        const list = await this.options.memberRepository.getByTag(tagId);
        return list;
    }

    public async addTag(id: any, tag: Tag) {
        tag = await this.options.tagService.getById(tag._id);
        const item = await this.options.memberRepository.addTag(id, tag);
        if (item) {
            return item;
        } else {
            throw new NotFoundError(id, this.nameService);
        }
    }

    public async removeTag(id: any, idTag: any) {
        const success = await this.options.memberRepository.removeTag(id, idTag);
        if (!success) {
            throw new NotFoundError(id, this.nameService);
        }
    }

    protected async validateCreate(dto: MemberDTO) {
        await super.validateCreate(dto)
        await this.validadeMember(dto)
    }

    protected async validateUpdate(id: any, dto: any) {
        await super.validateUpdate(id, dto)
        await this.validadeMember(dto)
    }

    private async validadeMember(dto: MemberDTO) {
        if (dto.type == TypeMember.CONTRACTOR) {
            await this.validateMemberTypeContractor(dto)
        } else if (dto.type == TypeMember.EMPLOYEE) {
            await this.validateMemberTypeEmployee(dto)
        }
        this.validadeTags(dto)
    }

    private async validateMemberTypeContractor(dto: MemberDTO) {
        if (dto.durationContract == null || dto.durationContract < 1) {
            throw new HttpError(400, "For contracting members it is mandatory to inform a valid contract duration..")
        }
    }

    private async validateMemberTypeEmployee(dto: MemberDTO) {
        if (dto.function == null || dto.function._id == null) {
            throw new HttpError(400, "For employee members it is mandatory to inform a valid function.")
        }

        const func = await this.options.functionService.getById(dto.function._id)

        if (!func) {
            throw new HttpError(400, `Function: [${dto.function._id}] not exists.`)
        }
    }

    private async validadeTags(dto: MemberDTO) {
        if (dto.tags && dto.tags.length) {
            for (let i = 0; i <= dto.tags.length; i++) {
                let tag = dto.tags[i]
                if (tag._id) {
                    await this.options.tagService.getById(tag._id)
                }
            }
        }
    }
}