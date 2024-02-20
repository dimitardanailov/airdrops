import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  address: string
}
