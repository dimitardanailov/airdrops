import {ethers} from 'ethers'
import {Wallet} from 'zksync-ethers'

export async function transaction(wallet: Wallet, receiver: string) {
  const address = await wallet.getAddress()
  console.log(`Address: ${address}`)

  const tx = await wallet.transfer({
    to: receiver,
    amount: ethers.parseEther('0.0001'),
  })
  const receipt = await tx.wait()
  console.log(`Tx: ${receipt.hash}`)
}
