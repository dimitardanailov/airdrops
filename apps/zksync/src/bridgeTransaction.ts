import {ethers} from 'ethers'
import {Wallet, utils} from 'zksync-ethers'

export async function bridgeTransaction(wallet: Wallet) {
  const address = await wallet.getAddress()
  console.log(`Address: ${address}`)

  console.log(`L2 balance before deposit: ${await wallet.getBalance()}`)
  console.log(`L1 balance before deposit: ${await wallet.getBalanceL1()}`)

  const tx = await wallet.deposit({
    token: utils.ETH_ADDRESS,
    to: address,
    amount: ethers.parseEther('0.001'),
    refundRecipient: address,
  })

  const receipt = await tx.wait()
  console.log(`Tx: ${receipt.hash}`)

  console.log(`L2 balance after deposit: ${await wallet.getBalance()}`)
  console.log(`L1 balance after deposit: ${await wallet.getBalanceL1()}`)
}
