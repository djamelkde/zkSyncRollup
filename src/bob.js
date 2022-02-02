(async () => {
    const ethers = require('ethers')
    const zksync = require('zksync')
    const utils = require('./utils')
    const SLEEP_INTERVAL = process.env.SLEEP_INTERVAL || 5000
  
    // Start here
    const zkSyncProvider = await utils.getZkSyncProvider(zksync, process.env.NETWORK_NAME)
    const ethersProvider = await utils.getEthereumProvider(ethers, process.env.NETWORK_NAME)

  
    const rinkebyWallet = new ethers.Wallet(process.env.MY_RINKEBY_PRIVATE_KEY, ethersProvider)

    console.log(`Bob's Rinkeby address is: ${rinkebyWallet.address}`)
    console.log(`Bob's initial balance on Rinkeby is: ${ethers.utils.formatEther(await rinkebyWallet.getBalance())}`)

    const bobZkSyncWallet = await utils.initAccount(rinkebyWallet, zkSyncProvider, zksync)
    //Register the Alice account to be able to transfer tokens using its zkSync Wallet
    await utils.registerAccount(bobZkSyncWallet)

    process.on('SIGINT', () => {
      console.log("Disconnecting")
      process.exit()
    })
    setInterval(async () => {
      await utils.displayZkSyncBalance(bobZkSyncWallet, ethers)
      console.log('---')
    }, SLEEP_INTERVAL)
  })()
  