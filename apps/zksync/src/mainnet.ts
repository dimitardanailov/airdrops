import {createWallet} from './etherWallet'
import {Wallet} from 'zksync-ethers'
import {getMainnetProviders} from './providers'
import {transaction} from './transaction'
import {randomAmount} from './randomAmount'
import {getPrivateKey} from './getPrivateKey'
import {getReceiver} from './getReceiver'

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

async function createWalletConfig() {
  await createWallet()
}

main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })

/*
createWalletConfig()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  }) */
