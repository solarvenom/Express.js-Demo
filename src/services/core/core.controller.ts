import { Router, Request, Response } from 'express';
import { seedDatabase } from './core.service';

const coreController: Router = Router();

coreController.get('/seed', async (req: Request, res: Response) => {
    try {
        await seedDatabase()
        res.send('Seed DB with mock data');
    } catch (error) {
        res.send(error)
    }
});

export default coreController;

