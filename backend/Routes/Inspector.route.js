import express from 'express'
import { InspectorAPI } from '../Controllers/Inspector.controller.js';

const inspectroute = express.Router();

inspectroute.post('/add', InspectorAPI().add);

inspectroute.get('/get', InspectorAPI().get);

export default inspectroute;