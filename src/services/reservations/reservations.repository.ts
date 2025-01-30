import { IsNull, LessThan, MoreThan } from "typeorm"
import { UUID } from "crypto";
import dataSource from "../../dataSource"
import { ReservationEntity, ReservationInterface } from ".."

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

// const createReservation = async(newReservation: CreateReservationDto) => {

//     const createdReservation = dataSource.getRepository(ReservationEntity).create(newReservation)
//     return dataSource.getRepository(ReservationEntity).save(createdReservation)
// }

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
        where: {
            property: {
                uuid: propertyUuid
            },
            deleted_at: IsNull(),
            startDate: MoreThan(starDate),
            endDate: LessThan(endDate)
        }
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


export {
    getAllReservations,
    // createReservation,
    getReservationsByGuestUuid,
    getReservationsInTimeframeByPropertyUuid,
    getReservationByUuid,
    softDeleteReservationByUuid,
    countReservationsByGuestUuid
}