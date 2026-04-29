import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import debug from 'debug';

// Initialize the files namespace
const fileLog = debug('app:files');

export const uploadFile = (req: Request, res: Response): void => {
  // Multer attaches the file object to req.file
  if (!req.file) {
    //log failure
    fileLog('Upload failed: No file provided.');
    res.status(400).json({ message: 'No valid file uploaded.' });
    return;
  }


  res.status(200).json({
    message: 'File uploaded successfully',
    fileDetails: {
      originalName: req.file.originalname,
      savedName: req.file.filename,
      size: `${(req.file.size / 1024).toFixed(2)} KB`,
      mimetype: req.file.mimetype,
      uploadedBy: req.user // We get this from our verifyToken middleware!
    }
  });
};

// --- 2. NEW View/Download Logic ---
export const getFile = (req: Request, res: Response): void => {
  const filenameParam = req.params.filename;

  // 1. Type Guard: Satisfy TypeScript by ensuring it is strictly a single string
  if (!filenameParam || typeof filenameParam !== 'string') {
    res.status(400).json({ message: 'Invalid filename parameter.' });
    return;
  }

  // 2. Security Guard: Prevent Directory Traversal attacks
  // path.basename() strips out any folder slashes (like ../../) leaving only the true filename
  const safeFilename = path.basename(filenameParam);
  
  // Log the request
  fileLog(`🔍 File requested: ${safeFilename}`);

  // Safely construct the absolute path
  const filePath = path.join(process.cwd(), 'uploads', safeFilename);

  // Security & Stability Check: Ensure the file actually exists
  if (!fs.existsSync(filePath)) {
    res.status(404).json({ message: 'File not found.' });
    return;
  }

  // Stream the file back to the client
  res.sendFile(filePath);
};

//Because multer handles the actual saving of the file in the middleware, 
//by the time the request reaches this controller, the file is already safely on your hard drive.