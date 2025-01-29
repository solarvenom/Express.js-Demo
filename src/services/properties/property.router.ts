import { Router, Request, Response } from 'express';

const propertyRouter: Router = Router();

propertyRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all properties');
});

propertyRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new property');
});

export default propertyRouter;

