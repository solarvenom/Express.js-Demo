import { Router, Request, Response } from 'express';

const propertiesRouter: Router = Router();

propertiesRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all properties');
});

propertiesRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new property');
});

export default propertiesRouter;

