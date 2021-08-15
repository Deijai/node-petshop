import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.render('pages/home');
}

export const searchAction = (req: Request, res: Response) => {
    
}