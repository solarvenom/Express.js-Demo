import { Router, Request, Response } from 'express';
import { ReservationsService } from '../'

const reservationsController: Router = Router();

/**
 * @swagger
 * /reservations:
 *   get:
 *     tags:
 *       - RESERVATIONS
 *     summary: Get a list of all reservations.
 *     description: Get a list of all reservations.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
reservationsController.get('/', async (req: Request, res: Response) => {
    try {
        const guests = await ReservationsService.getAllReservations()
        res.send(guests);
    } catch (error) {
        res.send(error)
    }
});

// reservationsController.post('/', async (req: Request, res: Response) => {
//     res.send('Create a new reservations');
// });

reservationsController.get('/:propertyUUID', async (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationsController.delete('/:propertyUUID', async (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

export default reservationsController;

