const DevToken = artifacts.require("DevToken");
// THis is an async function, it will accept the Deployer account, the network, and eventual accounts.
module.exports = async function (deployer, network, accounts) {
  // await while we deploy the DevToken
  console.log("======开始部署======");
  await deployer.deploy(DevToken,'DevToken','DTK',18,'50000000000000000000000');
  
  console.log("======部署完成======");
};
