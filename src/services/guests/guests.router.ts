import { Router, Request, Response } from 'express';

const guestsRouter: Router = Router();

guestsRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all guests');
});

guestsRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new guest');
});

export default guestsRouter;

