/**
 * Source / Tutorial:
 * https://github.com/typeorm/typescript-example/blob/master/src/index.ts
 */

import 'reflect-metadata'
import {DataSource} from 'typeorm'
import entities, {Wallet} from './entities'

const DB_LOCATION = process.env.DB_LOCATION
const dbPath = `${DB_LOCATION}/airdrops.sqlite3`
console.log('dbPath', dbPath)

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: dbPath,
  entities,
  logging: true,
  synchronize: false,
})

export const WalletRepository = AppDataSource.getRepository(Wallet)

export {entities}
