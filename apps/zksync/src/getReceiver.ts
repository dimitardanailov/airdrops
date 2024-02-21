import {Wallet} from 'zksync-ethers'
import {Wallet as DBWallet} from './db/entities'
import {randomItem} from './array/randomElement'

export async function getReceiver(
  wallets: DBWallet[],
  zksyncWallet: Wallet,
): Promise<string> {
  const address = await zksyncWallet.getAddress()

  const validWallets = wallets.filter(wallet => {
    return wallet.address !== address
  })

  if (validWallets.length === 0) {
    throw 'validWallets is empty array! Please review settings'
  }

  const item: Wallet = randomItem(validWallets)

  return item.address
}
