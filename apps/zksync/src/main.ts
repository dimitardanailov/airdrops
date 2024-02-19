import {Wallet} from 'zksync-ethers'
import providers from './providers'
import {bridgeTransaction} from './bridgeTransaction'

async function main() {
  const privateKey =
    '0xf65b1aa3fdf6c275e568a772bde2df5ef3a3af772c3f526a941329866f0ef8ce'

  const wallet = new Wallet(
    privateKey,
    providers.provider,
    providers.ethProvider,
  )

  await bridgeTransaction(wallet)
}

main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })
