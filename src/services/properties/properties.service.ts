import { UUID } from "crypto"
import { PropertiesRepository, PropertyInterface } from "../"

const propertyRepository = PropertiesRepository

const getAllProperties = async () => {
    return propertyRepository.getAll()
}

const getPropertyReservationsByUuid = async (propertyUuid: UUID) => {
    return propertyRepository.getReservationsByPropertyUuid(propertyUuid)
}

const createProperty = async (newProperty: PropertyInterface) => {
    if(!newProperty.name || newProperty.name == "") throw new Error("Property name missing")

    const propertyWithNameExists = await propertyRepository.getByName(newProperty.name)
    if(propertyWithNameExists[0]) throw new Error("Property with specified name already exists")

    return propertyRepository.create(newProperty);
}

export {
    getAllProperties,
    getPropertyReservationsByUuid,
    createProperty
}