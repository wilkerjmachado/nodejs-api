import { Request, Response, NextFunction, Router } from "express";
import { Controller, Entity, AbstractService } from ".";

export abstract class AbstractController<E extends Entity> implements Controller {

  private router: Router = Router();

  constructor(private path: string, private service: AbstractService<E>) {
    this.initialize();
  }

  private initialize() {
    this.router.get(this.path, this.getAll);
    this.router.get(`${this.path}/:id`, this.getById);
    this.router.delete(`${this.path}/:id`, this.delete);
    this.router.patch(`${this.path}/:id`, this.update);
    this.router.post(`${this.path}`, this.create);
  }

  private getAll = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const list = await this.service.getAll();
      response.send(list);
    } catch (error) {
      next(error);
    }
  }

  private getById = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = request.params.id;
      const item = await this.service.getById(id);
      response.send(item);
    } catch (error) {
      next(error);
    }
  }

  private update = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = request.params.id;
      const dto: any = request.body;
      const item = await this.service.update(id, dto);
      response.send(item);
    } catch (error) {
      next(error);
    }
  }

  private create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const dto: E = request.body;
      const item = await this.service.create(dto);
      response.status(201).send(item);
    } catch (error) {
      next(error);
    }
  }

  private delete = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = request.params.id;
      await this.service.delete(id);
      response.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }

  public getPath(): string {
    return this.path;
  }

  public getRouter(): Router {
    return this.router;
  }

  protected getService(): AbstractService<E> {
    return this.service;
  }

}