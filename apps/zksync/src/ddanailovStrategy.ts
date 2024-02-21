import {transaction} from './transaction'
import {randomAmount} from './randomAmount'
import {getPrivateKey} from './getPrivateKey'
import {getReceiver} from './getReceiver'
import {fetchWalletsByStrategy} from './db/helpers/fetchWallets'
import {Strategy} from './entities'
import {mainWalletByPrivateKey} from './blockchainWallet'

export async function ddanailovStrategy() {
  const wallets = await fetchWalletsByStrategy(Strategy.ddanailov)
  const privateKey = getPrivateKey(wallets)

  const wallet = mainWalletByPrivateKey(privateKey)

  const receiver = await getReceiver(wallets, wallet)

  const address = await wallet.getAddress()
  console.log('Address:', address)
  console.log('Receiver:', receiver)

  const amount = await randomAmount(wallet)

  await transaction(wallet, receiver, amount)
}
