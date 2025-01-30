import { UUID } from "crypto"
import { PropertiesRepository, PropertyInterface } from "../"

const repository = PropertiesRepository

const getAllProperties = async () => {
    return repository.getAllProperties()
}

const getPropertyReservationsByUuid = async (propertyUuid: UUID) => {
    return repository.getReservationsByPropertyUuid(propertyUuid)
}

const createProperty = async (newProperty: PropertyInterface) => {
    if(!newProperty.name || newProperty.name == "") throw new Error("Property name missing")

    const propertyWithNameExists = await repository.getPropertyByName(newProperty.name)
    if(propertyWithNameExists[0]) throw new Error("Property with specified name already exists")

    return repository.createProperty(newProperty);
}

export {
    getAllProperties,
    getPropertyReservationsByUuid,
    createProperty
}