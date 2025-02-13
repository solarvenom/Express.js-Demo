import { IsNull } from "typeorm"
import dataSource from "../../dataSource"
import { PropertyEntity } from "../"
import { PropertyInterface } from "./interfaces/property.interface";
import { UUID } from "crypto";

const getAll = async () => {
    return dataSource.getRepository(PropertyEntity).find({ 
        where: {
            deleted_at: IsNull()
        },
        select: {
            uuid: true,
            name: true
        }
    })
}

const create = async(newProperty: PropertyInterface) => {
    const createdProperty = dataSource.getRepository(PropertyEntity).create(newProperty)
    return dataSource.getRepository(PropertyEntity).save(createdProperty)
}

const getByName = async (name: string) => {
    return dataSource.getRepository(PropertyEntity).find({
        where: {
            name: name
        },
        select: {
            uuid: true,
            name: true
        }
    })
}

const getReservationsByPropertyUuid = async (propertyUuid: UUID) => {
    return dataSource.getRepository(PropertyEntity).find({
        where: {
            uuid: propertyUuid,
            deleted_at: IsNull(),
        },
        select: {
            uuid: true,
            name: true,
            reservations: {
                uuid: true,
                startDate: true,
                endDate: true,
                guest: {
                    uuid: true,
                    name: true
                }
            }
        },
        relations: ['reservations', 'reservations.guest']
    })
}

const getByUuid = async (uuid: UUID) => {
    return dataSource.getRepository(PropertyEntity).find({
        where: {
            uuid: uuid
        }
    })
}


export {
    getAll,
    create,
    getByName,
    getReservationsByPropertyUuid,
    getByUuid
}