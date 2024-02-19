import {createWallet} from './etherWallet'
import {Wallet} from 'zksync-ethers'
import providers from './providers'
import {transaction} from './transaction'

async function main() {
  const privateKey =
    '0x2421d395390575469fffe852f5438117c704cde2c64f71a28645cd5325b9fd7c'

  const wallet = new Wallet(
    privateKey,
    providers.provider,
    providers.ethProvider,
  )

  await transaction(wallet, '0xa591d6d5B852d81e2Ee803e7E93bE2A373179EBc')
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
