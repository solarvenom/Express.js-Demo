import { Router, Request, Response } from 'express';

const reservationRouter: Router = Router();

reservationRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all reservations');
});

reservationRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new reservations');
});

reservationRouter.get('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationRouter.put('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationRouter.delete('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

export default reservationRouter;

