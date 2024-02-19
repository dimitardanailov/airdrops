import {Provider, types} from 'zksync-ethers'
import {ethers, AbstractProvider} from 'ethers'

type Pair = {
  ethProvider: AbstractProvider
  zkSyncProvider: Provider
}

export function getMainnetProviders(): Pair {
  const pair: Pair = {
    ethProvider: ethers.getDefaultProvider('homestead'),
    zkSyncProvider: Provider.getDefaultProvider(types.Network.Mainnet),
  }

  return pair
}
