import { Router } from 'express';
import { getUser } from '../controllers/user.controller';

const router = Router();

// Note: The Gateway already strips away "/api/users", 
// so this route is technically just "/:id" from the Gateway's perspective!
router.get('/:id', getUser);

export default router;