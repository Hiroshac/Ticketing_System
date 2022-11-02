import express from 'express'
import { createManager, getAllManagers } from '../Controllers/PublicManager.contoler.js';

const publicmanagerroute = express.Router();

publicmanagerroute.post('/add', createManager);

publicmanagerroute.get('/get', getAllManagers);

export default publicmanagerroute;