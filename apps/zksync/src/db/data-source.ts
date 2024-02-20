/**
 * Source / Tutorial:
 * https://github.com/typeorm/typescript-example/blob/master/src/index.ts
 */

import path from 'path'
import 'reflect-metadata'
import {DataSource} from 'typeorm'
import entities, {Wallet} from './entities'

const dbPath = path.resolve(__dirname, './airdrops.sqlite3')
console.log('dbPath', dbPath)

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: dbPath,
  entities,
  logging: true,
  synchronize: true,
})

export const WalletRepository = AppDataSource.getRepository(Wallet)

export {entities}
