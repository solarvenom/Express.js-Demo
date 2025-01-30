import { ReservationsRepository, ReservationInterface, CreateReservationDto } from ".."

const repository = ReservationsRepository

const getAllReservations = async () => {
    return repository.getAllReservations()
}

// const createReservation = async (newReservation: CreateReservationDto) => {
//     if(!newReservation.guestUuid || newReservation.guestUuid.length == 0) throw new Error("Guest uuid missing")
//     if(!newReservation.propertyUuid || newReservation.propertyUuid.length == 0) throw new Error("Property uuid missing")

//     const activeBookingsByGuest = await repository.countReservationsByGuestUuid(newReservation.guestUuid)
//     if(activeBookingsByGuest == 5) throw new Error("Guest has 5 active bookings")

//     // const propertyWithNameExists = await repository.getPropertyByName(newProperty.name)
//     // if(propertyWithNameExists[0]) throw new Error("Property with specified name already exists")

//     // return repository.createProperty(newProperty);
// }

export {
    getAllReservations,
    // createProperty
}