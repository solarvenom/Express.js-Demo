import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated, ManyToOne } from "typeorm"
import { GuestEntity, PropertyEntity } from "../.."

@Entity('reservations')
export class ReservationEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    @Generated("uuid")
    uuid!: UUID

    @Column()
    startDate!: Date

    @Column()
    endDate!: Date

    @Column({nullable: true})
    deleted_at!: Date

    @ManyToOne(() => GuestEntity, (guest) => guest.reservations, { onDelete: 'CASCADE'})
    guest!: GuestEntity

    @ManyToOne(() => PropertyEntity, (property) => property.reservations, { onDelete: 'CASCADE'})
    property!: PropertyEntity
}