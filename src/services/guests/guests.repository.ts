import { IsNull } from "typeorm"
import dataSource from "../../dataSource"
import { GuestEntity } from "../"
import { GuestInterface } from "./interfaces/guest.interface";
import { UUID } from "crypto";

const getAllGuests = async () => {
    return dataSource.getRepository(GuestEntity).find({ 
        where: {
            deleted_at: IsNull()
        },
        select: {
            uuid: true,
            name: true,
            phone: true
        }
    })
}

const createGuest = async(newGuest: GuestInterface) => {
    const createdGuest = dataSource.getRepository(GuestEntity).create(newGuest)
    return dataSource.getRepository(GuestEntity).save(createdGuest)
}

const getGuestByName = async (name: string) => {
    return dataSource.getRepository(GuestEntity).find({
        where: {
            name: name
        },
        select: {
            uuid: true,
            name: true,
            phone: true
        }
    })
}

const getReservationsByGuestUuid = async (guestUuid: UUID) => {
    return dataSource.getRepository(GuestEntity).find({
        where: {
            uuid: guestUuid
        },
        select: {
            uuid: true,
            name: true,
            phone: true,
            reservations: {
                uuid: true,
                startDate: true,
                endDate: true,
                property: {
                    uuid: true,
                    name: true
                }
            }
        },
        relations: ['reservations', 'reservations.property']
    })
}

export {
    getAllGuests,
    createGuest,
    getGuestByName,
    getReservationsByGuestUuid
}