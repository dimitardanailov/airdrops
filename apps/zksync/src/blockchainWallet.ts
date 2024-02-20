import {Wallet} from 'zksync-ethers'
import {getMainnetProviders} from './providers'

function mainWalletByPrivateKey(privateKey: string): Wallet {
  const providers = getMainnetProviders()

  const wallet = new Wallet(
    privateKey,
    providers.zkSyncProvider,
    providers.ethProvider,
  )

  return wallet
}

export {mainWalletByPrivateKey}
