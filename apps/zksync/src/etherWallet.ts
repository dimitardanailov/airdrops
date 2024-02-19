import {ethers, HDNodeWallet} from 'ethers'

function createWallet(): HDNodeWallet {
  const ethWallet = ethers.Wallet.createRandom()
  console.log('Ethereum Wallet - Address:', ethWallet.address)
  console.log('Ethereum Wallet - Private Key:', ethWallet.privateKey)
  console.log('Ethereum Wallet - Mnenomic:', ethWallet.mnemonic)

  return ethWallet
}

export default createWallet
