import {
  DefenderRelayProvider,
  DefenderRelaySigner,
} from 'defender-relay-client/lib/ethers';
import {Contract} from 'ethers';

import Forwarder from '../../contracts/deployments/mumbai/FairDropGasStation.json';

async function relay(
  forwarder: Contract,
  request: any,
  signature: string,
) {

  // Validate request on the forwarder contract
  const valid = await forwarder.verify(request, signature);
  if (!valid) throw new Error(`Invalid request`);

  // Send meta-tx through relayer to the forwarder contract
  const gasLimit = (parseInt(request.gas) * 1.4).toString();
  return await forwarder.execute(request, signature, {gasLimit});
}

// Entrypoint for the Autotask
export async function handler(event: any) {
  // Parse webhook payload
  if (!event.request || !event.request.body) throw new Error(`Missing payload`);
  const {request, signature} = event.request.body;

  // Initialize Relayer provider and signer, and forwarder contract
  const credentials = {...event};
  const provider = new DefenderRelayProvider(credentials);
  const signer = new DefenderRelaySigner(credentials, provider, {
    speed: 'fastest',
  });
  const forwarder = new Contract(Forwarder.address, Forwarder.abi, signer);

  // Relay transaction!
  const tx = await relay(forwarder, request, signature);
  console.log(`Sent meta-tx: ${tx.hash}`);
  return {txHash: tx.hash};
}
// Sample typescript type definitions
type EnvInfo = {
  API_KEY: string;
  API_SECRET: string;
};

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
  const {API_KEY: apiKey, API_SECRET: apiSecret} = process.env as EnvInfo;
  handler({apiKey, apiSecret})
    .then(() => process.exit(0))
    .catch((error: Error) => {
      console.error(error);
      process.exit(1);
    });
}
