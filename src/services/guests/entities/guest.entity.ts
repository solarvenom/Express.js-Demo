import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from "typeorm"
import { ReservationEntity } from "../../"

@Entity('guests')
export class GuestEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    @Generated("uuid")
    uuid!: UUID

    @Column()
    name!: string

    @Column()
    phone!: string

    @Column({nullable: true})
    deleted_at!: Date

    @OneToMany(() => ReservationEntity, (reservation) => reservation.guest, { onDelete: 'CASCADE'})
    reservations!: ReservationEntity[]
}