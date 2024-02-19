// import {createWallet} from './etherWallet'
import {Wallet} from 'zksync-ethers'
import providers from './providers'
import {transaction} from './transaction'

async function main() {
  const privateKey =
    '0x2f93826e2ecd68ade5a6ea3bdc93fc16308927149480cc82424b30a78ee91893'

  const wallet = new Wallet(
    privateKey,
    providers.provider,
    providers.ethProvider,
  )

  await transaction(wallet, '0xa591d6d5B852d81e2Ee803e7E93bE2A373179EBc')
}

main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })
