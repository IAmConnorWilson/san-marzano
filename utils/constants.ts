import SAMPLE_NFT_ABI from '../constants/abis/sample-nft.abi';

/* eslint-disable import/prefer-default-export */
export const INFURA_ID = '9062843564ce4841a35a3787486b70d5';

export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
export const DEPLOYER_WALLET_ADDRESS = '0x2B1CFE8d8dF70B711649f728DE5d5aF6a921FAB5';
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const SAMPLE_NFT_CONTRACT_ADDRESS = '0x07912f88c358E733756Aa1893490c647F19077ee';

export const FIVE_MB = 52428800;

export const NETWORKS = {
  localhost: {
    name: 'localhost',
    color: '#666666',
    chainId: 31337,
    blockExplorer: '',
    rpcUrl: `http://localhost:8545`,
  },
  mainnet: {
    name: 'mainnet',
    color: '#ff8b9e',
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: 'https://etherscan.io/',
  },
  arbitrum: {
    name: 'arbitrum',
    color: '#938bff',
    chainId: 42161,
    // unsure this RPC url is correct
    rpcUrl: `https://arbitrum.infura.io/v3/${INFURA_ID}`,
    blockExplorer: 'https://arbiscan.io/',
  },
  // These are all test nets?
  arbitrum_testnet: {
    name: 'arbitrum testnet',
    color: '#938bff',
    chainId: 79377087078960,
    // unsure this RPC url is correct
    rpcUrl: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_ID}`,
    blockExplorer: 'https://testnet.arbiscan.io/',
  },
  kovan: {
    name: 'kovan',
    color: '#7003DD',
    chainId: 42,
    rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
    blockExplorer: 'https://kovan.etherscan.io/',
    faucet: 'https://gitter.im/kovan-testnet/faucet', // https://faucet.kovan.network/
  },
  rinkeby: {
    name: 'rinkeby',
    color: '#e0d068',
    chainId: 4,
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    faucet: 'https://faucet.rinkeby.io/',
    blockExplorer: 'https://rinkeby.etherscan.io/',
  },
  ropsten: {
    name: 'ropsten',
    color: '#F60D09',
    chainId: 3,
    faucet: 'https://faucet.ropsten.be/',
    blockExplorer: 'https://ropsten.etherscan.io/',
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  },
  goerli: {
    name: 'goerli',
    color: '#0975F6',
    chainId: 5,
    faucet: 'https://goerli-faucet.slock.it/',
    blockExplorer: 'https://goerli.etherscan.io/',
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
  xdai: {
    name: 'xdai',
    color: '#48a9a6',
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: 'https://dai.poa.network',
    faucet: 'https://xdai-faucet.top/',
    blockExplorer: 'https://blockscout.com/poa/xdai/',
  },
  matic: {
    name: 'matic',
    color: '#2bbdf7',
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: 'https://rpc-mainnet.maticvigil.com',
    faucet: 'https://faucet.matic.network/',
    blockExplorer: 'https://explorer-mainnet.maticvigil.com//',
  },
  mumbai: {
    name: 'mumbai',
    color: '#92D9FA',
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    faucet: 'https://faucet.matic.network/',
    blockExplorer: 'https://mumbai-explorer.matic.today/',
  },
};

// not 1000% sold on this format, might wanna move this to the API
export const CONTRACT_WITH_ABI: { [contractAddress: string]: any } = {
  [SAMPLE_NFT_CONTRACT_ADDRESS]: { abi: SAMPLE_NFT_ABI, network: NETWORKS.rinkeby },
  // - v v v temp contract to test switching between contracts v v v -
  '0x8b78a8c135c22d820531a012001ed0bfde0e43d6': { abi: SAMPLE_NFT_ABI, network: NETWORKS.rinkeby },
};
