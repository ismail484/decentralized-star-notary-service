var StarNotary = artifacts.require("./StarNotary.sol");
module.exports = function(deployer,netwok,accounts) {
deployer.deploy(StarNotary,{from: accounts[0]});
}; 