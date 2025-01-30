import { Router, Request, Response } from 'express';

const guestsController: Router = Router();

guestsController.get('/', (req: Request, res: Response) => {
  res.send('Get all guests');
});

guestsController.post('/', (req: Request, res: Response) => {
    res.send('Create a new guest');
});

export default guestsController;

