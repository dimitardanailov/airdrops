import {Provider, types} from 'zksync-ethers'
import {ethers} from 'ethers'

const provider = Provider.getDefaultProvider(types.Network.Sepolia)
const ethProvider = ethers.getDefaultProvider('sepolia')

export default {provider, ethProvider}
