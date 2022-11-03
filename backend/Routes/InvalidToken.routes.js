import express from 'express'
import { InvalidTokenAPI } from '../Controllers/InvalidToken.controler.js';

const invalidtokenrouter = express.Router();

invalidtokenrouter.post('/add', InvalidTokenAPI().add);

invalidtokenrouter.get('/get', InvalidTokenAPI().get);

export default invalidtokenrouter;