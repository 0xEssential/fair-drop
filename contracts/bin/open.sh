#!/usr/bin/env bash
NETWORK=${1}

POLYGONSCAN_API_KEY=$(grep POLYGONSCAN_API_KEY .env | xargs)
POLYGONSCAN_API_KEY=${POLYGONSCAN_API_KEY#*=}

if [[ $NETWORK == 'mainnet' ]]

then
  echo "PRODUCTION"
else
  ADDRESS=`jq -r '.address' ./deployments/goerli/MintWithProof.json`
  open https://goerli.etherscan.io/address/${ADDRESS}

  MUMBAI_ADDRESS=`jq -r '.address' ./deployments/mumbai/FairDropRegistration.json`
  open https://mumbai.polygonscan.com/address/${MUMBAI_ADDRESS}

  MUMBAI_ADDRESS=`jq -r '.address' ./deployments/mumbai/FairDropGasStation.json`
  open https://mumbai.polygonscan.com/address/${MUMBAI_ADDRESS}
fi
