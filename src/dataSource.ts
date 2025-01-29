import { DataSource } from "typeorm"
import { Guests, Properties, Reservations } from "./services"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "booking_admin",
    password: process.env.DB_PASSWORD || "test",
    database: process.env.DB_NAME || "booking_db",
    entities: [Guests, Properties, Reservations],
    logging: true,
    synchronize: true,
})
