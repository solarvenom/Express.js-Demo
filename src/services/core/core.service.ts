import dataSource from "../../dataSource"
import { GuestEntity, PropertyEntity, ReservationEntity } from "../"
import { guestsSeeds, propertiesSeeds } from "./data"

const seedDatabase = async ():Promise<void> => {
    const tablesPopulated = await areTablesPopulated()
    if(tablesPopulated) await clearDb()
    
    const queryRunner = dataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
        const [createdGuests, createdProperties] = await Promise.all([
            dataSource.getRepository(GuestEntity).create(guestsSeeds),
            dataSource.getRepository(PropertyEntity).create(propertiesSeeds)
        ])

        const [mockGuests, mockProperties] = await Promise.all([
            dataSource.getRepository(GuestEntity).save(createdGuests),
            dataSource.getRepository(PropertyEntity).save(createdProperties)
        ])

        const currentDate = new Date();
        const tomorrowsDate = new Date(new Date().setDate(currentDate.getDate() + 1))

        const reservations = mockProperties.map((property, index) => {
            return {
                startDate: currentDate,
                endDate: tomorrowsDate,
                guest: mockGuests[index],
                property: property
            }
        })
        const createdReservations = dataSource.getRepository(ReservationEntity).create(reservations)

        await dataSource.getRepository(ReservationEntity).save(createdReservations)
    } catch (error) {
        await queryRunner.rollbackTransaction()
        throw error
    } finally {
        await queryRunner.release()
    }
}

const areTablesPopulated = async(): Promise<boolean> => {
    const [
        guests,
        properties,
        reservations
    ] = await Promise.all([
        dataSource.getRepository(GuestEntity).count(),
        dataSource.getRepository(PropertyEntity).count(),
        dataSource.getRepository(ReservationEntity).count(),
    ])

    if (guests || properties || reservations) return true
    return false
}

const clearDb = async(): Promise<void> => {
    await Promise.all([
        dataSource.getRepository(GuestEntity).delete({}),
        dataSource.getRepository(PropertyEntity).delete({}),
        dataSource.getRepository(ReservationEntity).delete({})
    ])
}

export { seedDatabase }