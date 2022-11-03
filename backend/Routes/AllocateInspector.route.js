import express from 'express'
import { AllocateAPI } from '../Controllers/AllocateInspector.controler.js';

const inspectorroute = express.Router();

inspectorroute.post('/add', AllocateAPI().add);

inspectorroute.get('/get', AllocateAPI().get);

export default inspectorroute;