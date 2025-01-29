import { Router, Request, Response } from 'express';

const reservationRouter: Router = Router();

reservationRouter.get('/reservations', (req: Request, res: Response) => {
  res.send('Get all reservations');
});

reservationRouter.post('/reservations', (req: Request, res: Response) => {
    res.send('Create a new reservations');
});

reservationRouter.get('/reservations/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationRouter.put('/reservations/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationRouter.delete('/reservations/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

export default reservationRouter;

