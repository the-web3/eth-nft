const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("EthNft", (m) => {

  const ethNft = m.contract("EthNft");

  return { ethNft };
});
