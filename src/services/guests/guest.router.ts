import { Router, Request, Response } from 'express';

const guestRouter: Router = Router();

guestRouter.get('/guests', (req: Request, res: Response) => {
  res.send('Get all guests');
});

guestRouter.post('/guests', (req: Request, res: Response) => {
    res.send('Create a new guest');
});

export default guestRouter;

