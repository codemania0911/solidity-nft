require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
const privateKey = require("./privatekey.js");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/9w6BtZ3AY5E013HA0BDLCZsZEFb_mWWE",
      accounts: [privateKey.primary],
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org`,
      accounts: [privateKey.primary]
    },
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s2.binance.org:8545`,
      accounts: [privateKey.primary]
    }
  },
  etherscan: {
    apiKey: privateKey.bscscan
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
};
