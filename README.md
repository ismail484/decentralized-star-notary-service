
# Project: # Ethereum-decentralized-star-notary-service - [Mohamed Ismail]

# Description
  
  ### First open [[Private Blockchain Notary Service App](http://localhost:8000/book/:id) to discover, how app works .
  - Simply , It acts as a restfull Blockchain API using Nodejs (Express)   .
  - build a Star Registry Service that allows users to claim ownership of their favorite star in the night sky.
  - This web App introduces the fundamentals of web APIs with Node.js frameworks. Using my own private blockchain to create a web API is a huge first step toward developing my own web applications that are consumable by a variety of web clients.
  

  #### How  components do interact with each other:

```
smart_contracts.js
│     
│
└───contracts 
│   │  
│   └─── Migration.sol
│   │        
│   └───  StarNotary.js
│     
└───  migrations.js   
|        │
|        └───  1_initial_migration.js
|        |   
|        └───  2_deploy_contracts.js 
|       
|
└───test   
     | 
     └───  StartNotayTest.js
        
    
 ``` 

# Required Libraries and Dependencies
   - `npm install truffle -g`
   - `npm install --save truffle-hdwallet-provider` 
   - `npm install openzeppelin-solidity`
   - `truffle develop` --> `compile` then `migrate`


   

# How to Run Project 
   1.  Download all Project files
   2.  Run `npm install` to install all required dependancies &packages .
   3.  Run `nodemon app.js`
   4.  open browser [Private Blockchain Notary Service App](http://localhost:8000/book/5)
 
 # Contract address
    
   ## 0x345ca3e014aaf5dca488057592ee47305d9b3e10


 # Contract Hash 
 
   ## 0x22a07b0faf6d5054a08f12ec112e19f2a8d068b0c8f63ede13d37746a9e74d38
  


 # Transaction hash
   
   ## 
   
 # star tokenId
   
   ## 1


# Test

  - run `truffle test` 




