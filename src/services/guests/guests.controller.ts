import { Router, Request, Response } from 'express';
import { GuestsService } from '../'

const guestsController: Router = Router();

/**
 * @swagger
 * /guests:
 *   get:
 *     tags:
 *       - GUESTS
 *     summary: Get a list of all guests.
 *     description: Get a list of all guests.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
guestsController.get('/', async (req: Request, res: Response) => {
  try {
    const guests = await GuestsService.getAllGuests()
    res.send(guests);
  } catch (error) {
    res.send(error)
  }
});

/**
 * @swagger
 * /guests:
 *   post:
 *     tags:
 *       - GUESTS
 *     summary: Create a new guest.
 *     description: Create a new guest.
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - phone
 *            properties:
 *              name:
 *                type: string
 *              phone:
 *                type: string
 *     parameters:
 *       - in: body
 *         name: guest
 *         description: The guest to create
 *         schema:
 *          type: object
 *          required:
 *            - name
 *            - phone
 *          properties:
 *            name:
 *              type: string
 *            phone:
 *              type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
guestsController.post('/', async (req: Request, res: Response) => {
  console.log("<<<<<<< POST>???????????")
  try {
    console.log(JSON.stringify(req.body))
    const createdGuest = await GuestsService.createGuest(req.body)
    res.send(createdGuest);
  } catch (error) {
    res.send(error)
  }
});

export default guestsController;

