import { Router, Request, Response } from 'express';

const propertyRouter: Router = Router();

propertyRouter.get('/properties', (req: Request, res: Response) => {
  res.send('Get all properties');
});

propertyRouter.post('/properties', (req: Request, res: Response) => {
    res.send('Create a new property');
});

export default propertyRouter;

