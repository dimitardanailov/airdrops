/* eslint-disable @typescript-eslint/no-extra-semi */
import providers from './providers'

async function loadExamples() {
  const {provider} = providers
  const network = await provider.getNetwork()
  const blockNumber = await provider.getBlockNumber()

  console.log('network', network)
  console.log('blockNumber', blockNumber)
}

;(async () => {
  await loadExamples()
})()
