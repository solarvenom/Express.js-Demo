import { IsNull } from "typeorm"
import dataSource from "../../dataSource"
import { PropertyEntity } from "../"
import { PropertyInterface } from "./interfaces/property.interface";

const getAllProperties = async () => {
    return dataSource.getRepository(PropertyEntity).find({ 
        where: {
            deleted_at: IsNull()
        } 
    })
}

const createProperty = async(newProperty: PropertyInterface) => {
    const createdProperty = dataSource.getRepository(PropertyEntity).create(newProperty)
    return dataSource.getRepository(PropertyEntity).save(createdProperty)
}


const getPropertyByName = async (name: string) => {
    return dataSource.getRepository(PropertyEntity).find({
        where: {
            name: name
        }
    })
}


export {
    getAllProperties,
    createProperty,
    getPropertyByName
}