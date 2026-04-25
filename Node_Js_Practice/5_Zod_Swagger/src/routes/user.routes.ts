import { Router } from 'express';
import { registerUser, createUserSchema } from '../controllers/user.controller';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *             properties:
 *               email:
 *                 type: string
 *                 example: dev@example.com
 *               username:
 *                 type: string
 *                 example: fullstack_dev
 *               age:
 *                 type: number
 *                 example: 25
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.post('/register', validateRequest(createUserSchema), registerUser);

export default router;