async function getZkSyncProvider (zksync, networkName) {
    let zkSyncProvider
    try {
      zkSyncProvider = await zksync.getDefaultProvider(networkName)
    } catch (error) {
      console.log('Unable to connect to zkSync.')
      console.log(error)
    }
    return zkSyncProvider
  }

  async function getEthereumProvider (ethers, networkName) {
      let zkSyncProvider
      try {
          //eslint-disable-next-line new-cap
          ethersProvider = new ethers.getDefaultProvider(networkName)
      } catch (error) {
        console.log('Could not connect to Ethereum !')
        console.log(error)
      }
  }

  async function initAccount (rinkebyWallet, zkSyncProvider, zksync) {
    const zkSyncWallet = await zksync.Wallet.fromEthSigner(rinkebyWallet, zkSyncProvider)
    return zkSyncWallet
  }