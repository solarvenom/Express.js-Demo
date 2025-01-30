import { Router, Request, Response } from 'express';
import { seedDatabase } from './core.service';

const coreController: Router = Router();

/**
 * @swagger
 * /seed:
 *   get:
 *     summary: Seed the database with mock data.
 *     description: Seed the database with mock data.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
coreController.get('/', async (req: Request, res: Response) => {
    try {
        await seedDatabase()
        res.send('Seeding complete!');
    } catch (error) {
        res.send(error)
    }
});

export default coreController;

