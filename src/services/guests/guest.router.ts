import { Router, Request, Response } from 'express';

const guestRouter: Router = Router();

guestRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all guests');
});

guestRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new guest');
});

export default guestRouter;

