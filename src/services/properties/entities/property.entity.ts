import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from "typeorm"
import { ReservationEntity } from "../../"

@Entity("properties")
export class PropertyEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    @Generated("uuid")
    uuid!: UUID

    @Column()
    name!: string

    @Column({nullable: true})
    deleted_at!: Date
    
    @OneToMany(() => ReservationEntity, (reservation) => reservation.property, { onDelete: 'CASCADE'})
    reservations!: ReservationEntity[]
}