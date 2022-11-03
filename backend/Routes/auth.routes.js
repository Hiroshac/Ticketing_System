import express from 'express';
import { authAPI } from '../Controllers/auth.controller.js';

const router = express.Router();

//registation
router.post('/register', authAPI().add);
//login
router.post('/login', authAPI().log);

export default router
