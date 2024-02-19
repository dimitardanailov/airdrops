import {Wallet} from 'zksync-ethers'

export async function transaction(
  wallet: Wallet,
  receiver: string,
  amount: bigint,
) {
  const address = await wallet.getAddress()
  console.log(`Address: ${address}`)

  const tx = await wallet.transfer({
    to: receiver,
    amount: amount,
  })
  const receipt = await tx.wait()
  console.log(`Tx: ${receipt.hash}`)
}
