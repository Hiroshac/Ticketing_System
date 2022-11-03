import express from 'express'
import { routeAPI } from '../Controllers/Route.controler.js';

const rootrouter = express.Router();

rootrouter.post('/add', routeAPI().add);

rootrouter.get('/get', routeAPI().get);

export default rootrouter;