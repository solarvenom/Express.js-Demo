import { GuestsRepository, GuestInterface } from "../"

const repository = GuestsRepository

const getAllGuests = async () => {
    return repository.getAllGuests()
}

const createGuest = async (newGuest: GuestInterface) => {
    if(!newGuest.name || newGuest.name == "") throw new Error("Guest name missing")
    if(!newGuest.phone || newGuest.phone == "") throw new Error("Guest phone missing")
    
    return repository.createGuest(newGuest);
}

export {
    getAllGuests,
    createGuest
}