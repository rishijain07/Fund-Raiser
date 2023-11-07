require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

// const PROJECT_ID= "WvwKvyJw5Odxn_wDC9dMCdGHZAPFrVLy"
// const ACCOUNT_PRIVATE_KEY= "5287856b35be8e2a357ebe724cd7d0233fbb708e402a2c34b7a4345b47975fa3"
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.PROJECT_ID}`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    }
  }
};
