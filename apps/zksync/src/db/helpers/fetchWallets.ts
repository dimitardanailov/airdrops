import {WalletRepository} from '../data-source'
import {Strategy} from '../../entities'

export async function fetchWalletsByStrategy(strategy: Strategy) {
  const wallets = await WalletRepository.find({
    select: {
      address: true,
      privateKey: true,
    },
    where: {
      strategy: strategy,
    },
  })

  return wallets
}
