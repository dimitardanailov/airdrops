import {Wallet} from 'zksync-ethers'

export async function randomAmount(wallet: Wallet) {
  const min = BigInt(2)
  const max = BigInt(8)
  const percent = BigInt(10)

  const balance = await wallet.getBalance()
  const minumBalance: bigint = (balance * min) / percent
  const maximumBalance: bigint = (balance * max) / percent

  const step = BigInt(10000000000)
  let random = minumBalance
  const elements = [minumBalance]
  while (random < maximumBalance) {
    random = random + step
    elements.push(random)
  }

  const item = elements[Math.floor(Math.random() * elements.length)]

  return item
}
