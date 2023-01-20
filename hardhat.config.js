/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "pyTJ0W1O8rwqx70EIrzgGKqHT2rs8BkJ";
const GOERLI_PRIVATE_KEY = "d5fb6dc9717e4dc57b03f987297fc4e155f70022fe5c8e5ded9039f1a0ea218d"; 

module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }
};
