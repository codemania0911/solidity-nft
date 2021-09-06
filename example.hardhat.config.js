require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

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
      accounts: ["41886483c184a186722140c449d535a66fdcd6222dde7fd4ae533bb84b29ea98"],
    }
  },
  etherscan: {
    apiKey: "CE7JWE3Z5ZAPP5GGC3MSG2MNBUBKEH2VZW"
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  }
};
