enum Strategy {
  ddanailov,
}

export type Wallet = {
  address: string
  privateKey: string
  strategy: Strategy
}

const wallets: Wallet[] = [
  {
    address: '0x117bc6153031eA9f32865623dfBf5a3E31Ee2C0D',
    privateKey:
      '0x2f93826e2ecd68ade5a6ea3bdc93fc16308927149480cc82424b30a78ee91893',
    strategy: Strategy.ddanailov,
  },
  {
    address: '0xc562BC8a293E72fB760FA2819B0faa0422462351',
    privateKey:
      '0x2421d395390575469fffe852f5438117c704cde2c64f71a28645cd5325b9fd7c',
    strategy: Strategy.ddanailov,
  },
  {
    address: '0xbFA058FFB9fFBDb2583BAD6091F92a851De1efa9',
    privateKey:
      '0xe82e5ac9f22dbd53c14777fcc4e90e63691fd4f66c065543c22b4feaa59d0398',
    strategy: Strategy.ddanailov,
  },
  {
    address: '0xBE4D05eB9d804a8235345D57635bE9aa70068374',
    privateKey:
      '0x405fbc17e456a49a9ebe443bc9a13c30ddca63d9378b7d24b30afb5fb1c63e04',
    strategy: Strategy.ddanailov,
  },
]

export default wallets
