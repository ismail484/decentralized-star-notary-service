# Project: ethereum-decentralized-star-notary-service - [Mohamed Ismail]

# Description
  
  ### First open [Ethereum Decentralized-Star-Notary-Service](http://localhost:8080/) to discover, how app works .
  - Simply , It acts as a DApp by adding functionality to my smart contract and deploy it on the local public rinkeby testnets   .
  - I employed my blockchain identity to secure digital assets on the Ethereum platform using a smart contract.
  - I migrated m< private blockchain functionality to a smart contract and created my own ERC721 non-fungible token contract!  

  #### How  components do interact with each other:

```
smart_contracts
│     
│
└───contracts 
│   │  
│   └─── Migrations.sol
│   │        
│   └───  StarNotary.sol
│     
└───  migrations   
|        │
|        └───  1_initial_migration.js
|        │
|        └─── 2_deploy_contracts.js
|
|
└───test   
     | 
     └───  StartNotaryTest.js
        
    
 ``` 

# Required Libraries and Dependencies
   - run `npm install` to install all required dependancies &packages .
   - npm install truffle -g
   - npm install ganache -g
   - truffle init 
   - npm install --save truffle-hdwallet-provider
   - npm install openzeppelin-solidity
   - truffle develop,compile,migrate --network rinkeby
   - optional(fallback):truffle migrate  //--reset --network rinkeby

   

# How to Run Project 
   1. run ` ganache-cli`
   2. run `live-server` or `http-server`
 

 
# Test
  - run `ava test.js` .
  - I checked I get &post block data correctly


#contract creation on `local machine`

````
Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x9a490220c078bcdcdd82f1d38cb51deb374a9deab8619b49fa9a32e1fb99ac8c
  Migrations: 0x7bb0111cd7159643ca85fa2fd3d8adbe504853c3
Saving successful migration to network...
  ... 0x10391480c5d0fa642426833e70e52b3d44f2b295f1721b94e571642803a2ca3d
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying StarNotary...
  ... 0x086f6e90ebb5e85921b15727465b46391ab4499b99b75e0185a7e20da0ecd314
  StarNotary: 0xb454e96767d4f0810814aa847bf31a0ee61172cf
Saving successful migration to network...
  ... 0xdee6c340676d61eccf655c73b68ec18ad0af4168c246f14c9250d5874e4a3ed1
Saving artifacts...

````

# Contract creation on `Rinkeby Testnet`

[click Here to see contract creation](https://rinkeby.etherscan.io/tx/0x086f6e90ebb5e85921b15727465b46391ab4499b99b75e0185a7e20da0ecd314)

# important notes after creation:
   
   1-contract Address `0xb454e96767d4f0810814aa847bf31a0ee61172cf`

   2-this contract created by first address in `ganache` , after getting `fund`, which is `0xe04713cbca115375423074f8382ab56eae84c833` .  
  
# first transaction after creation from my frontend (index.html)
  
  [click Here to see first TX  after creation](https://rinkeby.etherscan.io/tx/0x89d53c7a30b2bcbda7cc0f73f29b55bec132102dc56431194051528f4d92bce3)
       
 # important notes after transaction :
    
    1- contract Address `0xb454e96767d4f0810814aa847bf31a0ee61172cf` .
   
   2- the transaction created by first account in `Metamask` , after getting `fund`, which is `0x227b90f89dddf6e75b423460dd483b998ca904b3` .  
