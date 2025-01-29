import "reflect-metadata";
import express, { Application } from 'express';
import bookingDataSource from './dataSource'
import { guestsRouter, propertiesRouter, reservationsRouter } from './services'

const app: Application = express();
const port: number = Number(process.env.APP_PORT) || 3000;

app.use('/guests', guestsRouter);
app.use('/properties', propertiesRouter);
app.use('/reservations', reservationsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

bookingDataSource.initialize();