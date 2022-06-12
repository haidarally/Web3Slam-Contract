const HDWalletProvider = require("@truffle/hdwallet-provider");

// require("@nomiclabs/hardhat-waffle");
require("@truffle/hdwallet-provider");
// require("hardhat-deploy");
// require("hardhat-deploy-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/679e629368664df78fb2bdb6826271b7",
      accounts: {
        mnemonic:
          "also alcohol metal point whip emerge science elevator recycle can bundle diesel",
      },
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      skipDryRun: true,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  //},
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
