import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { HttpError, NotFoundError } from "../../errors";
import { Entity, Repository } from ".";

export abstract class AbstractService<E extends Entity> {

    constructor(private repository: Repository, private typeDto: any, protected nameService: string) {
    }

    public getAll = async () => {
        return await this.repository.getAll();
    }

    public getById = async (id: any) => {
        const item = await this.repository.getById(id);
        if (item) {
            return item;
        } else {
            throw new NotFoundError(id, this.nameService);
        }
    }

    public update = async (id: any, dto: any) => {
        await this.validateUpdate(id, dto);
        const item = await this.repository.update(id, dto);
        if (item) {
            return item;
        } else {
            throw new NotFoundError(id, this.nameService);
        }
    }

    public create = async (dto: any) => {
        await this.validateCreate(dto);
        console.log(dto)
        return await this.repository.create(dto);
    }

    public delete = async (id: any) => {
        this.validateDelete(id);
        const success = await this.repository.delete(id);
        if (!success) {
            throw new NotFoundError(id, this.nameService);
        }
    }

    protected async validateCreate(dto: any) {
        await this.validateItem(this.typeDto, dto)
    }

    protected async validateUpdate(id: any, dto: any) {
        await this.validateItem(this.typeDto, dto, true)
    }

    protected async validateDelete(id: any) { }

    private validateItem = async (type: any, item: any, skipMissingProperties = false) => {
        const errors: ValidationError[] = await validate(plainToClass(type, item), { skipMissingProperties })
        if (errors.length > 0) {
            const message: string = errors.map((error: any) => Object.values(error.constraints)).join(",")
            throw new HttpError(400, message);
        }
    }

}

export default AbstractService;