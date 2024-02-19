import {ethers} from 'ethers'
import {Wallet, utils} from 'zksync-ethers'
import providers from './providers'

async function main() {
  const privateKey =
    '0xf65b1aa3fdf6c275e568a772bde2df5ef3a3af772c3f526a941329866f0ef8ce'

  const wallet = new Wallet(
    privateKey,
    providers.provider,
    providers.ethProvider,
  )

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

main()
  .then()
  .catch(error => {
    console.error(`Error: ${error}`)
  })
