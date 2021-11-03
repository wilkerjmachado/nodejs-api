import { HttpError } from ".";

export class NotFoundError extends HttpError {
  constructor(id: string, type: string) {
    super(404, `${type} Record with id ${id} not found`);
  }
}