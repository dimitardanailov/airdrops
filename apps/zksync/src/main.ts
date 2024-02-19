/* eslint-disable @typescript-eslint/no-extra-semi */
import {ethers} from 'ethers'
import {Wallet} from 'zksync-ethers'
import createWallet from './etherWallet'
;(async () => {
  const etherWallet = createWallet()

  const ethProvider = ethers.getDefaultProvider('sepolia')
  const wallet = Wallet.fromMnemonic(etherWallet.mnemonic.phrase, ethProvider)

  console.log('wallet', wallet)
})()
