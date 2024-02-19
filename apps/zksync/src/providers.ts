import {Provider, types} from 'zksync-ethers'
import {ethers} from 'ethers'

const provider = Provider.getDefaultProvider(types.Network.Mainnet)
const ethProvider = ethers.getDefaultProvider('homestead')

export default {provider, ethProvider}
