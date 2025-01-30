import { UUID } from "crypto";

export interface CreateReservationDto {
    guestUuid: UUID,
    propertyUuid: UUID,
    startDate: Date,
    endDate: Date
}