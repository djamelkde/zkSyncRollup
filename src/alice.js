(async () => {
    const ethers = require('ethers')
    const zksync = require('zksync')
    const utils = require('./utils')
    const token = 'ETH'
    const amountToDeposit = '0.05'
    const amountToTransfer = '0.02'
    const amountToWithdraw = 'O.002'

    const zkSyncProvider = await utils.getZkSyncProvider(zksync, process.env.NETWORK_NAME)
    const ethersProvider = await utils.getEthereumProvider(ethers,  process.env.NETWORK_NAME)
    console.log('Creating a new Rinkeby wallet for Alice')
    const aliceRinkebyWallet = new ethers.Wallet(process.env.ALICE_PRIVATE_KEY, ethersProvider)
    console.log(`Alice's rinkeby address is: ${aliceRinkebyWallet.address}`)
    const aliceInitialRinkbeyBalance = await aliceRinkebyWallet.getBalance()
    console.log(`Alice's initial balance on rinkeby is: ${ethers.utils.formatEther(aliceInitialRinkbeyBalance)}`)

    console.log('Creating a zkSync wallet for Alice')
    const aliceZkSyncWallet = await utils.initAccount(aliceRinkebyWallet, zkSyncProvider, zksync)

    //console.log('Depositing')
    //await utils.depositToZkSync(aliceZkSyncWallet, token, amountToDeposit, ethers)
    await utils.displayZkSyncBalance(aliceZkSyncWallet, ethers)
    //Register the Alice account to be able to transfer tokens using its zkSync Wallet
    await utils.registerAccount(aliceZkSyncWallet)

    console.log('Tansferring')
    const transferFee = await utils.getFee('Transfer', aliceRinkebyWallet.address, token, zkSyncProvider, ethers)
    console.log(`transferFee = ${transferFee}`)
    //const transferFee = "0.0001";
    await utils.transfer(aliceZkSyncWallet, process.env.MY_RINKEBY_PUBLIC_KEY, amountToTransfer, transferFee, token, zksync, ethers)

})()