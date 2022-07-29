require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',

  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      // get the your url and accounts info from alchemy and metamask.
      url: `https://eth-rinkeby.alchemyapi.io/v2/ThisIsMyAPIKey_FromAlchemy`,
      accounts: [`123456abcdef12345xxxx12345fedcabxxxx0`],
    },
  },
};
