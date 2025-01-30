import { Router, Request, Response } from 'express';

const reservationsController: Router = Router();

reservationsController.get('/', (req: Request, res: Response) => {
  res.send('Get all reservations');
});

reservationsController.post('/', (req: Request, res: Response) => {
    res.send('Create a new reservations');
});

reservationsController.get('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationsController.put('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationsController.delete('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

export default reservationsController;

