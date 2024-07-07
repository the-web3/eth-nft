require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/b48b6387e66d4f3497245873747f6e4d",
      accounts: ["PrivateKey"]
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: ["PrivateKey"]
    },
    holesky: {
      url: `https://holesky.infura.io/v3/94f54dde24f94cdb97f141dc9e3a4315`,
      accounts: ["PrivateKey"]
    },
  },
  etherscan: {
    apiKey: "TNSTBJQHXQV8FJDC8BXEYCQXJP39TJ3U7U",
  }
};
