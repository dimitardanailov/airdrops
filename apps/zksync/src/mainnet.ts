import {createWallet} from './etherWallet'
import {Wallet} from 'zksync-ethers'
import providers from './providers'
import {transaction} from './transaction'
import {randomAmount} from './randomAmount'

async function main() {
  const privateKey =
    '0x2421d395390575469fffe852f5438117c704cde2c64f71a28645cd5325b9fd7c'

  const wallet = new Wallet(
    privateKey,
    providers.provider,
    providers.ethProvider,
  )

  const amount = await randomAmount(wallet)

  await transaction(
    wallet,
    '0x117bc6153031eA9f32865623dfBf5a3E31Ee2C0D',
    amount,
  )
}

async function createWalletConfig() {
  await createWallet()
}

main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })

/*
createWalletConfig()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  }) */
