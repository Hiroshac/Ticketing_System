import express from 'express'
import { createTimetable, getTables } from '../Controllers/TimeTable.controler.js';

const timetablerouter = express.Router();

timetablerouter.post('/add', createTimetable);

timetablerouter.get('/get', getTables);

export default timetablerouter;