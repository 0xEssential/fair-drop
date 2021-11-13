module.exports = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace',
  env: {
    AUTOTASK_URL: process.env.AUTOTASK_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
    L1_CHAIN_ID: process.env.L1_CHAIN_ID,
    INFURA_KEY: process.env.INFURA_KEY,
    MATIC_RPC_URL: process.env.MATIC_RPC_URL,
    MATIC_CHAIN_ID: process.env.MATIC_CHAIN_ID,
    RPC_URL: process.env.RPC_URL,
    STORAGE_API_TOKEN: process.env.STORAGE_API_TOKEN,
  },
};
