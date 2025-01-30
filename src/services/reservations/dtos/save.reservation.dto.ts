import { GuestEntity, PropertyEntity } from "../../"

export interface SaveReservationDto {
    guest: GuestEntity,
    property: PropertyEntity,
    startDate: Date,
    endDate: Date
}