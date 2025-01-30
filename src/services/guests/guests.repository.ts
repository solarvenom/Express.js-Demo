import { IsNull } from "typeorm"
import dataSource from "../../dataSource"
import { GuestEntity } from "../"
import { GuestInterface } from "./interfaces/guest.interface";

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

export {
    getAllGuests,
    createGuest,
    getGuestByName
}