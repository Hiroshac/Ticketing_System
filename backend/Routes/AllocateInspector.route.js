import express from 'express'
import { AllocateInspector, getAllocatedInspectors } from '../Controllers/AllocateInspector.controler.js';

const inspectorroute = express.Router();

inspectorroute.post('/add', AllocateInspector);

inspectorroute.get('/get', getAllocatedInspectors);

export default inspectorroute;