import {HDNodeWallet, Wallet} from 'ethers'

export function createWallet(): HDNodeWallet {
  const wallet = Wallet.createRandom()
  console.log('Ethereum Wallet - Address:', wallet.address)
  console.log('Ethereum Wallet - Private Key:', wallet.privateKey)
  console.log('Ethereum Wallet - Mnenomic:', wallet.mnemonic)

  return wallet
}

export function importWalletByPrivateKey(privateKey: string): Wallet {
  const wallet = new Wallet(privateKey)

  console.log('Address:', wallet.address)
  console.log('Private Key:', wallet.privateKey)

  return wallet
}
