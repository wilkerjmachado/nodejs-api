import { HttpError } from ".";

export class InvalidIdError extends HttpError {
  constructor(id: string) {
    super(404, `ID:'${id}' is invalid`);
  }
}