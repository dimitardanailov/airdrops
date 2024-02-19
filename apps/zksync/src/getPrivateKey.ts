import wallets from './db/wallets'
import {randomItem} from './array/randomElement'

export function getPrivateKey(): string {
  const item = randomItem(wallets)

  return item.privateKey
}
