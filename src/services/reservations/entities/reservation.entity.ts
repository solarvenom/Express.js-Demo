import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated, ManyToOne } from "typeorm"
import { GuestEntity, PropertyEntity } from "../.."

@Entity('reservations')
export class ReservationEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Generated("uuid")
    uuid!: UUID

    @Column()
    name!: string

    @ManyToOne(() => GuestEntity, (guest) => guest.reservations)
    guest!: GuestEntity

    @ManyToOne(() => PropertyEntity, (property) => property.reservations)
    property!: PropertyEntity
}