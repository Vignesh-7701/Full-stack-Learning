import { Router } from 'express';
import { uploadFile , getFile } from '../controllers/fileController';
import { verifyToken } from '../middlewares/authMiddleware';
import { upload } from '../middlewares/uploadMiddleware';

const router = Router();

router.post('/upload', verifyToken, upload.single('document'), uploadFile);

// GET: View or download a specific file by its name
router.get('/:filename', verifyToken, getFile);

export default router;