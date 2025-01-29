import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from "typeorm"
import { ReservationEntity } from "../../"

@Entity('guests')
export class GuestEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Generated("uuid")
    uuid!: UUID

    @Column()
    name!: string

    @Column()
    phone!: string

    @OneToMany(() => ReservationEntity, (reservation) => reservation.guest)
    reservations!: ReservationEntity[]
}