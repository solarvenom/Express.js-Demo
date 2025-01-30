import { Router, Request, Response } from 'express';
import { GuestsService } from '../'

const guestsController: Router = Router();
const guestsService: GuestsService = new GuestsService();

guestsController.get('/', async (req: Request, res: Response) => {
  try {
    const guests = guestsService.getAllGuests()
    res.send(guests);
  } catch (error) {
    res.send(error)
  }
});

guestsController.post('/', async (req: Request, res: Response) => {
  try {
    const createdGuest = await guestsService.createGuest(req.body)
    res.send(createdGuest);
  } catch (error) {
    res.send(error)
  }
});

export default guestsController;

