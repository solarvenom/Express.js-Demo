import { Router, Request, Response } from 'express';

const reservationsRouter: Router = Router();

reservationsRouter.get('/', (req: Request, res: Response) => {
  res.send('Get all reservations');
});

reservationsRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new reservations');
});

reservationsRouter.get('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationsRouter.put('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationsRouter.delete('/:propertyUUID', (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

export default reservationsRouter;

