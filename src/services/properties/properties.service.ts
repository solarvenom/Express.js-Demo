import { UUID } from "crypto"
import { PropertiesRepository, ReservationsRepository, PropertyInterface } from "../"

const propertyRepository = PropertiesRepository
const reservationRepository = ReservationsRepository

const getAllProperties = async () => {
    return propertyRepository.getAllProperties()
}

const getPropertyReservationsByUuid = async (propertyUuid: UUID) => {
    return propertyRepository.getReservationsByPropertyUuid(propertyUuid)
}

const createProperty = async (newProperty: PropertyInterface) => {
    if(!newProperty.name || newProperty.name == "") throw new Error("Property name missing")

    const propertyWithNameExists = await propertyRepository.getPropertyByName(newProperty.name)
    if(propertyWithNameExists[0]) throw new Error("Property with specified name already exists")

    return propertyRepository.createProperty(newProperty);
}

export {
    getAllProperties,
    getPropertyReservationsByUuid,
    createProperty
}