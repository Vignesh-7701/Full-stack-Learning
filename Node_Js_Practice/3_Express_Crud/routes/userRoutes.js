const express = require('express');
const router = express.Router();

const {getUsers , createUser , updateUser , deleteUser} = require('../controllers/userController');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of all users
 *     description: Fetches all user records from the database.
 *     responses:
 *      200:
 *        description: A JSON array of users
 */
router.get('/' , getUsers);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post('/', createUser);

/**
 * @swagger
 * /{id}:
 * put:
 * summary: Update an existing user
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: The user ID
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * name:
 * type: string
 * example: Jane Doe
 * email:
 * type: string
 * example: jane@example.com
 * responses:
 * 200:
 * description: User updated successfully
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /{id}:
 * delete:
 * summary: Delete a user by ID
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * description: The user ID
 * responses:
 * 200:
 * description: User deleted successfully
 */
router.delete('/:id', deleteUser);

module.exports = router;