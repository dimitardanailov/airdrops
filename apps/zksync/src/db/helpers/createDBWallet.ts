import {HDNodeWallet} from 'ethers'
import {Wallet} from '../entities/Wallet'
import {WalletRepository} from '../data-source'

async function createDBWallet(blockchainWallet: HDNodeWallet) {
  try {
    const wallet = new Wallet()
    wallet.address = blockchainWallet.address
    await WalletRepository.save(wallet)
    console.log(`wallet: ${wallet.address} is added in db!`)
  } catch (e) {
    console.error('error', e)
  }
}

export default createDBWallet
