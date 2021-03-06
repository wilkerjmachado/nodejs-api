import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors';

function errorHandler(error: HttpError, request: Request, response: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response.status(status).send({ status, message })
}

function errorHandler404(request: Request, response: Response, next: NextFunction) {
    const status = 404;
    const message = 'Not found';
    response.status(status).send({ status, message })
}

export { errorHandler, errorHandler404 };