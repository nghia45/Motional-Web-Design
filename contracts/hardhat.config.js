require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_URL = "https://eth-sepolia.g.alchemy.com/v2/kadHSrb8L6LbtP1OPl5Y8qFhvHDdQycz";
const PRIVATE_KEY = "3ca636564e2085fd7723c2073a70de65232fccfbf1811d83fdb30b4157a46229";
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
