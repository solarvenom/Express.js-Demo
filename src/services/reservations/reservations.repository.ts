import { IsNull, Between } from "typeorm"
import { UUID } from "crypto";
import dataSource from "../../dataSource"
import { ReservationEntity, SaveReservationDto } from ".."

const getAll = async () => {
    return dataSource.getRepository(ReservationEntity).find({ 
        where: {
            deleted_at: IsNull()
        },
        select: {
            uuid: true,
            startDate: true,
            endDate: true,
            guest: {
                uuid: true,
                name: true,
                phone: true
            },
            property: {
                uuid: true,
                name: true
            }
        },
        relations: ['guest', 'property']
    })
}

const getByGuestUuid = async (guestUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).find({
        where: {
            guest: {
                uuid: guestUuid
            },
            deleted_at: IsNull()
        }
    })
}

const countByGuestUuid = async (guestUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).count({
        where: {
            guest: {
                uuid: guestUuid
            },
            deleted_at: IsNull()
        }
    })
}

const getInTimeframeByPropertyUuid = async (propertyUuid: UUID, starDate: Date, endDate: Date) => {
    return dataSource.getRepository(ReservationEntity).find({
        where: [
            {
                property: {
                    uuid: propertyUuid
                },
                deleted_at: IsNull(),
                startDate: Between(
                    starDate,
                    endDate
                )
            },
            {
                property: {
                    uuid: propertyUuid
                },
                deleted_at: IsNull(),
                endDate: Between(
                    starDate,
                    endDate
                )
            }
        ]
    })
}

const getByUuid = async (reservationUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).find({
        where: {
            uuid: reservationUuid
        }
    })
}

const softDeleteByUuid = async (reservationUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).delete({
        uuid: reservationUuid
    })
}


const create = async(reservation: SaveReservationDto) => {
    const createdReservation = dataSource.getRepository(ReservationEntity).create(reservation)
    return dataSource.getRepository(ReservationEntity).save(createdReservation)
}

export {
    getAll,
    getByGuestUuid,
    getInTimeframeByPropertyUuid,
    getByUuid,
    softDeleteByUuid,
    countByGuestUuid,
    create
}