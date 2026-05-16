import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

export const getUser = async (req: Request, res: Response) => {
    // Add "as string" to explicitly cast the type
    const userId = req.params.id as string; 
    
    console.log(`[User Controller] ⚙️ Processing request for user ${userId}`);
    
    try {
        const user = await UserService.getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};