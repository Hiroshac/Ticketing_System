import express from 'express';
import { authAPI } from '../Controllers/auth.controller.js';

const router = express.Router();

//registation
router.post('/register', authAPI().add);
//login
router.post('/login', authAPI().log);
//filter
router.post('/user', authAPI().filter);

export default router
