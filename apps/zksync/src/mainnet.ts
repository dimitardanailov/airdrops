import {createWallet} from './etherWallet'
import {Wallet} from 'zksync-ethers'
import {getMainnetProviders} from './providers'
import {transaction} from './transaction'
import {randomAmount} from './randomAmount'
import {getPrivateKey} from './getPrivateKey'
import {getReceiver} from './getReceiver'
import {AppDataSource} from './db/data-source'
import createDBWallet from './db/helpers/createDBWallet'

async function main() {
  const privateKey = getPrivateKey()

  const providers = getMainnetProviders()

  const wallet = new Wallet(
    privateKey,
    providers.zkSyncProvider,
    providers.ethProvider,
  )

  const receiver = await getReceiver(wallet)

  const address = await wallet.getAddress()
  console.log('Address:', address)
  console.log('Receiver:', receiver)

  const amount = await randomAmount(wallet)

  await transaction(wallet, receiver, amount)
}

/*
main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })

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
    console.log('connected!!!')

    const zksyncWallet = await createWallet()
    await createDBWallet(zksyncWallet)

    console.log('zksyncWallet', zksyncWallet)

    // const wallets = await WalletRepository.find()

    // console.log('wallets', wallets)

    // await AppDataSource.manager.save(post)
    // console.log('Post has been saved: ', post)
  })
  .catch(error => console.log('Error: ', error))
