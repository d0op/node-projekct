import express from 'express';
import enviroment from './config/enviroment';
import { Server } from './config/server';

//variables
const PORT: number = parseInt(enviroment.port as string, 10) || 8080;
const app = express();
const server = new Server(app).start(PORT);
