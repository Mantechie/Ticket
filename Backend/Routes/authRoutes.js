import express from 'express';
import { signup, signin, signout } from '../controllers/authController.js';

const router = express.Router();

// Routes
router.post('/signup', signup); // Register
router.post('/signin', signin); // Login
router.post('/signout', signout); // Logout

export default router;
