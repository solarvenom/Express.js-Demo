import { Router, Request, Response } from 'express';

const propertiesController: Router = Router();

propertiesController.get('/', (req: Request, res: Response) => {
  res.send('Get all properties');
});

propertiesController.post('/', (req: Request, res: Response) => {
    res.send('Create a new property');
});

export default propertiesController;

