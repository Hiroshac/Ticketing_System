import express from 'express'
import { createRoute, getRoutes } from '../Controllers/Route.controler.js';

const rootrouter = express.Router();

rootrouter.post('/add', createRoute);

rootrouter.get('/get', getRoutes);

export default rootrouter;