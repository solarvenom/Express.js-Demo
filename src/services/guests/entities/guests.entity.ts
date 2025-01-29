import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm"

@Entity()
export class Guests {
    @PrimaryGeneratedColumn()
    id!: number

    @Generated("uuid")
    uuid!: UUID

    @Column()
    name!: string

    @Column()
    phone!: string
}