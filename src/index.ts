import 'reflect-metadata'
import express, { Application } from 'express'
import bookingDataSource from './dataSource'
import swaggerjsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { guestsController, propertiesController, reservationsController, coreController } from './services'

const app: Application = express()
const port: number = Number(process.env.APP_PORT) || 3000

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Booking API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${process.env.APP_PORT || 3000}`
            }
        ],
    },
    apis: ['./src/services/**/*.controller.ts']
}
const swaggerDocs = swaggerjsdoc(swaggerOptions)

app.use(express.json())
app.use("/guests", guestsController)
app.use("/properties", propertiesController)
app.use("/reservations", reservationsController)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/seed", coreController)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

bookingDataSource.initialize()