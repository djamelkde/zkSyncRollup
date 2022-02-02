# zkSyncRollup
This app is a small demo that demonstrates the basics of zkSync, by walking you through setting up a shop where a customer (Alice) can buy goods from a shopkeeper (Bob) using a Ethereum L2 solution based on the zkSync (https://zksync.io/).
The demo is implemented based on zkSync javascript API (please refer to https://zksync.io/api/sdk/js/tutorial.html for more details). The ZKrollups operations are performed on the rinkbey ethereum testnet.

## Requirements
* Nodejs
* npm
* metamask (https://metamask.io/)
* other js libraries:
```
npm install ethers zksync
```

## Execution
1. clone the project:
	```
	git clone https://github.com/djamelkde/zkSyncRollup.git & cd zkSyncRollup
	```
2. export some env variables:
	```
	export NETWORK_NAME=rinkeby
	export MY_RINKEBY_PRIVATE_KEY=<BOB_PRIVATE_KEY> # could be extracted from metamask
	export ALICE_RINKEBY_PRIVATE_KEY=<ALICE_PRIVATE_KEY> #could be extracted from metamask
	export BOB_ADDRESS=<BOB_PUBLIC_KEY> #could be extracted from metamask
	```
2. open a new terminal and execute the first script (Bob)
	```
	node src/bob.js
	```
2. open another terminal and execute the second script (Alice)
	```
	node src/bob.js
	```
