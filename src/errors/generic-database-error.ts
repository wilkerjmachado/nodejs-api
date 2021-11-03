import { HttpError } from ".";

export class GenericDatabaseError extends HttpError {
  constructor(error: Error) {
    super(500, error.message);
  }
}