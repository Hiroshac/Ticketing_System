import express from 'express'
import { createInvalids, getInvalids } from '../Controllers/InvalidToken.controler.js';

const invalidtokenrouter = express.Router();

invalidtokenrouter.post('/add', createInvalids);

invalidtokenrouter.get('/get', getInvalids);

export default invalidtokenrouter;