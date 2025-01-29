import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm"

@Entity()
export class Reservations {
    @PrimaryGeneratedColumn()
    id!: number

    @Generated("uuid")
    uuid!: UUID

    @Column()
    name!: string
}