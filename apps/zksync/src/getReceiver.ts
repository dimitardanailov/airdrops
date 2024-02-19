import {Wallet} from 'zksync-ethers'
import wallets, {Wallet as WalletType} from './db/wallets'
import {randomItem} from './array/randomElement'

export async function getReceiver(zksyncWallet: Wallet): Promise<string> {
  const address = await zksyncWallet.getAddress()

  const validWallets = wallets.filter(wallet => {
    return wallet.address !== address
  })

  if (validWallets.length === 0) {
    throw 'validWallets is empty array! Please review settings'
  }

  const item: WalletType = randomItem(validWallets)

  return item.address
}
