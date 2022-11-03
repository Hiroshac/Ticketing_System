import express from 'express'
import { publicmanagerAPI } from '../Controllers/PublicManager.contoler.js';

const publicmanagerroute = express.Router();

publicmanagerroute.post('/add', publicmanagerAPI().add);

publicmanagerroute.get('/get', publicmanagerAPI().get);

export default publicmanagerroute;