import {HDNodeWallet} from 'ethers'
import {Wallet as zksyncWallet} from 'zksync-ethers'
import {Wallet} from '../entities/Wallet'
import {WalletRepository} from '../data-source'
import {Strategy} from '../../entities'

type Props = {
  strategy: Strategy
}

export async function insertHDNodeWallets(
  blockchainWallet: HDNodeWallet,
  props: Props,
) {
  try {
    const {strategy} = props

    const wallet = new Wallet()
    wallet.address = blockchainWallet.address
    wallet.privateKey = blockchainWallet.privateKey
    wallet.strategy = strategy
    await WalletRepository.save(wallet)

    console.log(`wallet: ${wallet.address} is added in db!`)
  } catch (e) {
    console.error('error', e)
  }
}

export async function insertZksyncWallet(
  zksyncWallet: zksyncWallet,
  privateKey: string,
  props: Props,
) {
  try {
    const {strategy} = props
    const address = await zksyncWallet.getAddress()

    const wallet = new Wallet()
    wallet.address = address
    wallet.privateKey = privateKey
    wallet.strategy = strategy

    await WalletRepository.save(wallet)

    console.log(`wallet: ${wallet.address} is added in db!`)
  } catch (e) {
    console.error('error', e)
  }
}
