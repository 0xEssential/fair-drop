#!/usr/bin/env bash
NETWORK=${1?Error: No network provided}

POLYGONSCAN_API_KEY=$(grep POLYGONSCAN_API_KEY .env | xargs)
POLYGONSCAN_API_KEY=${POLYGONSCAN_API_KEY#*=}

if [[ $NETWORK == 'main' ]]

then
  ADDRESS=`jq -r '.address' ./deployments/mainnet/MintWithProof.json`
  npx hardhat verify --network mainnet $ADDRESS \
    "0x86e4dc95c7fbdbf52e33d563bbdb00823894c287" \
    "0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2"

  ADDRESS=`jq -r '.address' ./deployments/matic/FairDropRegistration.json`
  ETHERSCAN_API_KEY=$POLYGONSCAN_API_KEY npx hardhat verify --network matic $ADDRESS \
    "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255" \
    "0x326C977E6efc84E512bB9C30f76E30c160eD06FB" \
    "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4" \
    "0xCf73231F28B7331BBe3124B907840A94851f9f11"
else
 ADDRESS=`jq -r '.address' ./deployments/goerli/MintWithProof.json`
  npx hardhat verify --network goerli $ADDRESS \
    "0x2890bA17EfE978480615e330ecB65333b880928e" \
    "0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA"

  GAS_ADDRESS=`jq -r '.address' ./deployments/mumbai/FairDropGasStation.json`
  ETHERSCAN_API_KEY=$POLYGONSCAN_API_KEY npx hardhat verify --network mumbai $GAS_ADDRESS \

  ADDRESS=`jq -r '.address' ./deployments/mumbai/FairDropRegistration.json`
  ETHERSCAN_API_KEY=$POLYGONSCAN_API_KEY npx hardhat verify --network mumbai $ADDRESS \
    "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255" \
    "0x326C977E6efc84E512bB9C30f76E30c160eD06FB" \
    "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4" \
    "0xCf73231F28B7331BBe3124B907840A94851f9f11" \
    $GAS_ADDRESS
fi
