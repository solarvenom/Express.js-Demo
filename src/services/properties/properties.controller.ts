import { Router, Request, Response } from 'express';
import { PropertiesService } from '../'

const propertiesController: Router = Router();

/**
 * @swagger
 * /properties:
 *   get:
 *     tags:
 *       - PROPERTIES
 *     summary: Get a list of all properties.
 *     description: Get a list of all properties.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
propertiesController.get('/', async (req: Request, res: Response) => {
   try {
      const properties = await PropertiesService.getAllProperties()
      res.send(properties);
    } catch (error) {
      res.send(error)
    }
});

propertiesController.post('/', async (req: Request, res: Response) => {
    res.send('Create a new property');
});

export default propertiesController;

