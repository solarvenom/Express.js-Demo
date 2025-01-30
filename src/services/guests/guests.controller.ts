import { Router, Request, Response } from 'express';
import { GuestsService } from '../'

const guestsController: Router = Router();

/**
 * @swagger
 * /guests:
 *   get:
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

guestsController.post('/', async (req: Request, res: Response) => {
  try {
    const createdGuest = await GuestsService.createGuest(req.body)
    res.send(createdGuest);
  } catch (error) {
    res.send(error)
  }
});

export default guestsController;

