import { Signer } from '@ethersproject/abstract-signer';
import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';

import FairDropGasStation from '../../contracts/deployments/mumbai/FairDropGasStation.json';
import { signMetaTxRequest } from './signer';

export async function sendMetaTx(
  receiverContract: Contract,
  provider: Web3Provider,
  signer: Signer,
  method: string,
  args: (string | BigNumber)[],
  onSigned?: () => void,
): Promise<any> {
  const forwarder = new Contract(
    FairDropGasStation.address,
    FairDropGasStation.abi,
    provider.getSigner(),
  );

  const from = await signer.getAddress();
  const data = receiverContract.interface.encodeFunctionData(method, args);
  const to = receiverContract.address;

  const request = await signMetaTxRequest(signer.provider, forwarder, {
    to,
    from,
    data,
  });

  onSigned && onSigned();

  return fetch('/api/kyc_transaction', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  });
}
