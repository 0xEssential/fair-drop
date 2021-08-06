#!/usr/bin/env bash
NETWORK=${1?Error: No network provided}

POLYGONSCAN_API_KEY=$(grep POLYGONSCAN_API_KEY .env | xargs)
POLYGONSCAN_API_KEY=${POLYGONSCAN_API_KEY#*=}

if [[ $NETWORK == 'goerli' || $NETWORK == 'mainnet' ]]

then
  ADDRESS=`jq -r '.address' ./deployments/${NETWORK}/NFTStateTransfer.json`
  npx hardhat verify --network $NETWORK $ADDRESS \
    "0x2890bA17EfE978480615e330ecB65333b880928e" \
    "0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA"
else
echo $POLYGONSCAN_API_KEY
  ADDRESS=`jq -r '.address' ./deployments/${NETWORK}/FairDropRegistration.json`
  ETHERSCAN_API_KEY=$POLYGONSCAN_API_KEY npx hardhat verify --network $NETWORK $ADDRESS \
    "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255" \
    "0x326C977E6efc84E512bB9C30f76E30c160eD06FB" \
    "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4" \
    "0xCf73231F28B7331BBe3124B907840A94851f9f11"
fi
