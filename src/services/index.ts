import guestsRouter from "./guests/guests.router";
import propertiesRouter from "./properties/properties.router";
import reservationsRouter from "./reservations/reservations.router";

// import { GuestEntity } from "./guests/entities/guest.entity";
import { GuestEntity } from "./guests/entities/guest.entity";
// import { PropertyEntity } from "./properties/entities/property.entity";
import { PropertyEntity } from "./properties/entities/property.entity";
// import { ReservationEntity } from "./reservations/entities/reservation.entity";
import { ReservationEntity } from "./reservations/entities/reservation.entity";

// Routers
export { guestsRouter, propertiesRouter, reservationsRouter };

// Entities
export { GuestEntity, PropertyEntity, ReservationEntity };
