import { UUID } from "crypto"
import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm"

@Entity()
export class Properties {
    @PrimaryGeneratedColumn()
    id!: number

    @Generated("uuid")
    uuid!: UUID

    @Column()
    startDate!: Date

    @Column()
    endDate!: Date
}