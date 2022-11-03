import express from 'express'
import { TimeTableAPI } from '../Controllers/TimeTable.controler.js';

const timetablerouter = express.Router();

timetablerouter.post('/add', TimeTableAPI().add);

timetablerouter.get('/get', TimeTableAPI().get);

export default timetablerouter;