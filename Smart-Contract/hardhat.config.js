require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli: {
      url: process.env.ALCHEMY_TESTNET,
      accounts: [process.env.TESTNET_PRIVATE_KEY]
    }
  }
};
