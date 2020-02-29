import helmet from 'helmet';
import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import { itemsRouter } from '../app/features/items/items.controller';
import { errorHandler } from '../middleware/error.middleware';
import { notFoundHandler } from '../middleware/notFound.middleware';

export class Server {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
        this.setupEnv(this.app);
    }

    private setupEnv(app: Express): void {
        this.setupAutz(app);
        this.setupRoutes(app);
        this.setupErrorHandlers(app);
    }

    private setupAutz(app: Express): void {
        //middleware applied to inv controllers
        this.app.use(helmet());
        this.app.use(cors());
    }

    private setupRoutes(app: Express): void {
        app.use(express.json());
        app.use('/Items', itemsRouter);
    }

    private setupErrorHandlers(app: Express): void {
        app.use(errorHandler);
        app.use(notFoundHandler);
    }

    public start(port: number): any {
        return this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }
}
