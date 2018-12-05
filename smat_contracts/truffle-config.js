/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const mnemonic = "skate nerve civil genius special dove hold juice goddess grit raccoon marble"
const infura = "https://rinkeby.infura.io/v3/8366432e46054a6c89a5cdee8f6df725"


const HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*" // Match any network id
 },
 rinkeby: {
  provider: function() {
 return new HDWalletProvider(mnemonic,infura )
     },
      network_id: '4',
      gas: 4500000,
      gasPrice: 10000000000,
    }
   }
 };