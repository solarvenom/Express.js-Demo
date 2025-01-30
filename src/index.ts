import 'reflect-metadata'
import express, { Application } from 'express'
import bookingDataSource from './dataSource'
import { guestsController, propertiesController, reservationsController, coreController } from './services'

const app: Application = express()
const port: number = Number(process.env.APP_PORT) || 3000

app.use("/guests", guestsController)
app.use("/properties", propertiesController)
app.use("/reservations", reservationsController)
app.use("/", coreController)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

bookingDataSource.initialize()