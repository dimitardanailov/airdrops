import {Wallet} from 'zksync-ethers'
import {randomItem} from './array/randomElement'

export async function randomAmount(wallet: Wallet) {
  const min = BigInt(2)
  const max = BigInt(8)
  const percent = BigInt(10)

  const balance = await wallet.getBalance()
  const minumBalance: bigint = (balance * min) / percent
  const maximumBalance: bigint = (balance * max) / percent

  const step = BigInt(10000000000)
  let random = minumBalance
  const items = [minumBalance]
  while (random < maximumBalance) {
    random = random + step
    items.push(random)
  }

  const item = randomItem(items)

  return item
}
