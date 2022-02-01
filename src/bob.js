(async () => {
    const ethers = require('ethers')
    const zksync = require('zksync')
    const utils = require('./utils')
  
    // Start here
    const zkSyncProvider = await utils.getZkSyncProvider(zksync, process.env.NETWORK_NAME)
    const ethersProvider = await utils.getEthereumProvider(ethers, process.env.NETWORK_NAME)

  
    const rinkebyWallet = new ethers.Wallet(process.env.MY_RINKEBY_PRIVATE_KEY, ethersProvider)

    console.log(`Bob's Rinkeby address is: ${rinkebyWallet.address}`)
    console.log(`Bob's initial balance on Rinkeby is: ${ethers.utils.formatEther(await rinkebyWallet.getBalance())}`)

  })()
  