import { Repository, IsNull } from "typeorm"
import dataSource from "../../dataSource"
import { GuestEntity } from "../"
import { GuestInterface } from "./interfaces/guest.interface";

export class GuestsRepository {
    repository: Repository<GuestEntity>;

    constructor(){
        this.repository = dataSource.getRepository(GuestEntity);
    }

    getAllGuests = async () => {
        return this.repository.find({ 
            where: {
                deleted_at: IsNull()
            } 
        })
    }

    createGuest = async(newGuest: GuestInterface) => {
        const createdGuest = this.repository.create(newGuest)
        return this.repository.save(createdGuest)
    }
}