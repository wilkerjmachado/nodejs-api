import express from 'express';
import cors from 'cors';
import { errorHandler, errorHandler404 } from './error.handler';
import mongoose from 'mongoose';
import morgan from 'morgan';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Controller } from '../api/base';
import swaggerUi from "swagger-ui-express";

export class App {

    public app: express.Application;

    constructor(private controllers: Controller[]) {

        this.app = express();

        dotenv.config({ path: path.join(process.cwd(), (process.env.NODE_ENV === "test" ? '.env.test' : '.env')) });

        this.connectToTheDatabase();
        this.initialize();
        this.initializeControllers(this.controllers);
        this.initializeSwagger();
        this.initializeHandle();
    }

    private connectToTheDatabase() {
        const databaseUrl = `${process.env.MONGO_URL}`
        mongoose.connect(databaseUrl);
        mongoose.connection.on('connected', function () {
            console.log('mongoose connected to : ', databaseUrl);
        });
        mongoose.connection.on('error', function (err) {
            console.log('mongoose connection error to : ', err);
        });
    }

    private initialize() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private initializeHandle() {
        this.app.use(errorHandler);
        this.app.use(errorHandler404);
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.getRouter());
        });
    }

    private initializeSwagger() {
        const docs = require('../../docs');
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(docs));
    }

    public listen(port: number) {
        return this.app.listen(port);
    }

}

export default App;