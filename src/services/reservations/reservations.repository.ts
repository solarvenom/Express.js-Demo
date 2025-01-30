import { IsNull, LessThan, MoreThan, Between } from "typeorm"
import { UUID } from "crypto";
import dataSource from "../../dataSource"
import { ReservationEntity, ReservationInterface, SaveReservationDto } from ".."

const getAllReservations = async () => {
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

const getReservationsByGuestUuid = async (guestUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).find({
        where: {
            guest: {
                uuid: guestUuid
            },
            deleted_at: IsNull()
        }
    })
}

const countReservationsByGuestUuid = async (guestUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).count({
        where: {
            guest: {
                uuid: guestUuid
            },
            deleted_at: IsNull()
        }
    })
}

const getReservationsInTimeframeByPropertyUuid = async (propertyUuid: UUID, starDate: Date, endDate: Date) => {
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

const getReservationByUuid = async (reservationUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).find({
        where: {
            uuid: reservationUuid
        }
    })
}

const softDeleteReservationByUuid = async (reservationUuid: UUID) => {
    return dataSource.getRepository(ReservationEntity).delete({
        uuid: reservationUuid
    })
}


const create = async(reservation: SaveReservationDto) => {
    const createdReservation = dataSource.getRepository(ReservationEntity).create(reservation)
    return dataSource.getRepository(ReservationEntity).save(createdReservation)
}

export {
    getAllReservations,
    getReservationsByGuestUuid,
    getReservationsInTimeframeByPropertyUuid,
    getReservationByUuid,
    softDeleteReservationByUuid,
    countReservationsByGuestUuid,
    create
}