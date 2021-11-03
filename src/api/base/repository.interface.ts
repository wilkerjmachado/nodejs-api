export interface Repository {
    getAll(): Promise<any>
    getById(id: any): Promise<any>
    update(id: any, dto: any) : Promise<any>
    create(dto: any) : Promise<any>
    delete(id: any) : Promise<any>
}