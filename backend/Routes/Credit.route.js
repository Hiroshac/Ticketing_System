import express from 'express'
import { creditAPI } from '../Controllers/Credit.controler.js';

const creditroute = express.Router();

creditroute.post('/add', creditAPI().add);

creditroute.get('/get', creditAPI().get);

export default creditroute;