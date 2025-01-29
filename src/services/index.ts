import guestsRouter from "./guests/guests.router";
import propertiesRouter from "./properties/properties.router";
import reservationsRouter from "./reservations/reservations.router";

import { Guests } from "./guests/entities/guests.entity";
import { Properties } from "./properties/entities/properties.entity";
import { Reservations } from "./reservations/entities/reservations.entity";

// Routers
export { guestsRouter, propertiesRouter, reservationsRouter };

// Entities
export { Guests, Properties, Reservations };
