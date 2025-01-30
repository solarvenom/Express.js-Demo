import { UUID } from "crypto"
import { GuestsRepository, GuestInterface } from "../"

const repository = GuestsRepository

const getAllGuests = async () => {
    return repository.getAllGuests()
}

const createGuest = async (newGuest: GuestInterface) => {
    if(!newGuest.name || newGuest.name == "") throw new Error("Guest name missing")
    if(!newGuest.phone || newGuest.phone == "") throw new Error("Guest phone missing")

    const guestWithNameExists = await repository.getGuestByName(newGuest.name)
    if(guestWithNameExists[0]) throw new Error("Guest with specified name already exists")

    return repository.createGuest(newGuest);
}

const getGuestReservationsByGuestUuid = async (guestUuid: UUID) => {
    const guestBookings = await repository.getReservationsByGuestUuid(guestUuid)

    const now = new Date().getTime()

    let status = 'Never Booked'
    if(guestBookings[0].reservations.length){
        if(guestBookings[0].reservations.some(
            (reservation) => reservation.startDate.getTime() < now && now < reservation.endDate.getTime())
        ){
            status = 'Checked In'
        } else {
            if(guestBookings[0].reservations.some(
                (reservation) => now < reservation.startDate.getTime())
            ){
                status = 'Booked'
            } else {
                status = 'Checked Out'
            }
        }
    }

    return { ...guestBookings[0], status: status }
}

export {
    getAllGuests,
    createGuest,
    getGuestReservationsByGuestUuid
}