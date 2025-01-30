import { GuestsRepository, GuestInterface } from "../"

export class GuestsService {
    repository: GuestsRepository

    constructor(){
        this.repository = new GuestsRepository()
    }

    getAllGuests = async () => {
        return this.repository.getAllGuests()
    }

    createGuest = async (newGuest: GuestInterface) => {
        if(!newGuest.name || newGuest.name == "") throw new Error("Guest name missing")
        if(!newGuest.phone || newGuest.phone == "") throw new Error("Guest phone missing")
        
        return this.repository.createGuest(newGuest);
    }
}