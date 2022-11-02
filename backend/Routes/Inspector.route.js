import express from 'express'
import { createInspector, getAllInspectors } from '../Controllers/Inspector.controller.js';

const inspectroute = express.Router();

inspectroute.post('/add', createInspector);

inspectroute.get('/get', getAllInspectors);

export default inspectroute;