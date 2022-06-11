require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:__dirname+'/.env'})

const {ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY} = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.14",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
