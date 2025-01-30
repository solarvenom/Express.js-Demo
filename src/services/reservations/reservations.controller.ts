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

/**
 * @swagger
 * /reservations:
 *   post:
 *     tags:
 *       - RESERVATIONS
 *     summary: Create a new reservation.
 *     description: Create a new reservation.
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - propertyUuid
 *              - guestUuid
 *              - startDate
 *              - endDate
 *            properties:
 *              propertyUuid:
 *                type: string
 *              guestUuid:
 *                type: string
 *              startDate:
 *                type: string
 *              endDate:
 *                type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
reservationsController.post('/', async (req: Request, res: Response) => {
    try{
        const createdReservation = await ReservationsService.createReservation(req.body)
        res.send(createdReservation);
    } catch(error){
        res.send(`${error}`)
    }
});

reservationsController.get('/:propertyUUID', async (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

reservationsController.delete('/:propertyUUID', async (req: Request, res: Response) => {
    res.send('Get all reservations with a specified property');
});

export default reservationsController;

