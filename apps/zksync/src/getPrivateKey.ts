import {Wallet} from './db/entities/Wallet'
import {randomItem} from './array/randomElement'

export function getPrivateKey(wallets: Wallet[]): string {
  const item: Wallet = randomItem(wallets)

  return item.privateKey
}
