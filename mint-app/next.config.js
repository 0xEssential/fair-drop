module.exports = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace',
  env: {
    RPC_URL: process.env.RPC_URL,
    MATIC_RPC_URL: process.env.MATIC_RPC_URL,
    MATIC_CHAIN_ID: process.env.MATIC_CHAIN_ID,
    INFURA_KEY: process.env.INFURA_KEY,
    STORAGE_API_TOKEN: process.env.STORAGE_API_TOKEN,
    L1_CHAIN_ID: process.env.L1_CHAIN_ID,
  },
};
