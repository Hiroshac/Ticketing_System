import express from 'express';
import { authAPI } from '../Controllers/auth.controller.js';

const router = express.Router();

router.post('/register', authAPI().add);
router.post('/login', authAPI().log);


export default router
