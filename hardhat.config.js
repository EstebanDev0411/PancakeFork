require("@nomiclabs/hardhat-waffle");

const { deployerWalletPrivateKey } = require('./secrets.json');
const { etherscanAPIkey } = require('./secrets.json');
const { alchemyAPIkey } = require('./secrets.json');

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyAPIkey}`,
        blockNumber: 11095000
      }
    },
    Candle: {
      url: "https://rpc.cndlchain.com",
      chainId: 534,
      accounts: [deployerWalletPrivateKey],
      allowUnlimitedContractSize: true,
    }
  },
  mocha: {
    timeout: 200000
  }
};
