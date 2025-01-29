import express, { Application } from 'express';
import { guestRouter, propertyRouter, reservationRouter } from './services'

const app: Application = express();
const port: number = Number(process.env.APP_PORT) || 3000;

app.use('/guests', guestRouter);
app.use('/properties', propertyRouter);
app.use('/reservations', reservationRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});