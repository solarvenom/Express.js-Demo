import { ReservationsRepository, ReservationInterface, CreateReservationDto, GuestsRepository, PropertiesRepository } from ".."

const reservationRepository = ReservationsRepository
const guestRepository = GuestsRepository
const propertyRepository = PropertiesRepository

const getAllReservations = async () => {
    return reservationRepository.getAll()
}

const createReservation = async (newReservation: CreateReservationDto) => {
    if(!newReservation.guestUuid || newReservation.guestUuid.length == 0) throw new Error("Guest uuid missing")
    if(!newReservation.propertyUuid || newReservation.propertyUuid.length == 0) throw new Error("Property uuid missing")
    const now = new Date().getTime()

    const startDate = new Date(newReservation.startDate)
    if(!newReservation.startDate || startDate.getTime() < now) throw new Error("Start date either missing or in the past")
    
    const endDate = new Date(newReservation.endDate)
    if(!newReservation.endDate || endDate.getTime() < now) throw new Error("End date either missing or in the past")

    const activeBookingsByGuest = await reservationRepository.countByGuestUuid(newReservation.guestUuid)
    if(activeBookingsByGuest >= 5) throw new Error("Guest already has 5 active bookings")

    const timeframePropertyBookings = await reservationRepository.getInTimeframeByPropertyUuid(
        newReservation.propertyUuid, 
        startDate,
        endDate
    )

    if(timeframePropertyBookings.length) throw new Error("Property booked in this time frame")
    
    const [
        guest,
        property
    ] = await Promise.all([
        guestRepository.getByUuid(newReservation.guestUuid),
        propertyRepository.getByUuid(newReservation.propertyUuid)
    ])

    return reservationRepository.create({
        guest: guest[0],
        property: property[0],
        startDate: startDate,
        endDate: endDate
    })
}

export {
    getAllReservations,
    createReservation
}