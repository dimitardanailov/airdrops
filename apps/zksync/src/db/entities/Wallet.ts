import {Column, Entity, Index, PrimaryColumn} from 'typeorm'
import {Strategy} from '../../entities'

@Entity()
export class Wallet {
  @PrimaryColumn({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  address: string

  @Index()
  @Column({
    type: 'varchar',
    nullable: false,
  })
  privateKey: string

  @Index()
  @Column({
    type: 'varchar',
    nullable: false,
    default: Strategy.ddanailov,
  })
  strategy: Strategy
}
