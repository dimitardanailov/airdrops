import {Wallet} from 'zksync-ethers'
import providers from './providers'
import {transaction} from './transaction'

async function main() {
  const privateKey =
    '0xf65b1aa3fdf6c275e568a772bde2df5ef3a3af772c3f526a941329866f0ef8ce'

  const wallet = new Wallet(
    privateKey,
    providers.provider,
    providers.ethProvider,
  )

  await transaction(
    wallet,
    '0x81E9D85b65E9CC8618D85A1110e4b1DF63fA30d9',
    BigInt(100000),
  )
}

main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })
