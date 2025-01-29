import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from "typeorm"
import { ReservationEntity } from "../../"

@Entity("properties")
export class PropertyEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Generated("uuid")
    uuid!: UUID

    @Column()
    startDate!: Date

    @Column()
    endDate!: Date

    @OneToMany(() => ReservationEntity, (reservation) => reservation.property)
    reservations!: ReservationEntity[]
}