import { DataSource, DataSourceOptions } from "typeorm"
import { GuestEntity, PropertyEntity, ReservationEntity } from "./services"

const bookingDataSource: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_CONTAINER_NAME || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "booking_admin",
    password: process.env.DB_PASSWORD || "test",
    database: process.env.DB_NAME || "booking_db",
    entities: [GuestEntity, PropertyEntity, ReservationEntity],
    logging: true,
    synchronize: true
}

export default new DataSource({ ...bookingDataSource })