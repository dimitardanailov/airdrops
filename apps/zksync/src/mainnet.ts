import './preloader'

import {createWallet} from './etherWallet'
import {Wallet} from 'zksync-ethers'
import {getMainnetProviders} from './providers'
import {transaction} from './transaction'
import {randomAmount} from './randomAmount'
import {getPrivateKey} from './getPrivateKey'
import {getReceiver} from './getReceiver'
import {AppDataSource} from './db/data-source'
import {insertHDNodeWallets} from './db/helpers/insertWallets'
import {insertDDanailovWallets} from './db/helpers/ddanailovWallets'
import {Strategy} from './entities'

import {ddanailovStrategy} from './ddanailovStrategy'

/*
createWalletConfig()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  }) */

/*
async function dbLoaderDemo() {
  const db = dbLoader()
  closeConnection(db)
}*/

AppDataSource.initialize()
  .then(async () => {
    // await insertDDanailovWallets()
    /*
    const zksyncWallet = await createWallet()
    await insertHDNodeWallets(zksyncWallet, {
      strategy: Strategy.ddanailov,
    }) */

    await ddanailovStrategy()
  })
  .catch(error => console.log('Error: ', error))
