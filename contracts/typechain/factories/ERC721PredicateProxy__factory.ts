/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC721PredicateProxy } from "../ERC721PredicateProxy";

export class ERC721PredicateProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _proxyTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721PredicateProxy> {
    return super.deploy(
      _proxyTo,
      overrides || {}
    ) as Promise<ERC721PredicateProxy>;
  }
  getDeployTransaction(
    _proxyTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_proxyTo, overrides || {});
  }
  attach(address: string): ERC721PredicateProxy {
    return super.attach(address) as ERC721PredicateProxy;
  }
  connect(signer: Signer): ERC721PredicateProxy__factory {
    return super.connect(signer) as ERC721PredicateProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721PredicateProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721PredicateProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_proxyTo",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_new",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_old",
        type: "address",
      },
    ],
    name: "ProxyOwnerUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
    ],
    name: "ProxyUpdated",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyType",
    outputs: [
      {
        internalType: "uint256",
        name: "proxyTypeId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferProxyOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newProxyTo",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "updateAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newProxyTo",
        type: "address",
      },
    ],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108783803806108788339818101604052602081101561003357600080fd5b505180610048336001600160e01b0361006116565b61005a816001600160e01b0361009616565b50506100b8565b604080517f6d617469632e6e6574776f726b2e70726f78792e6f776e6572000000000000008152905190819003601901902055565b6000604051808061085660229139604051908190036022019020929092555050565b61078f806100c76000396000f3fe6080604052600436106100595760003560e01c8063025313a2146100b3578063025b22bc146100e45780634555d5c9146101175780635c60da1b1461013e578063d88ca2c814610153578063f1739cae14610209576100a8565b366100a8576100a661006961023c565b6000368080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061026292505050565b005b6100a661006961023c565b3480156100bf57600080fd5b506100c861028a565b604080516001600160a01b039092168252519081900360200190f35b3480156100f057600080fd5b506100a66004803603602081101561010757600080fd5b50356001600160a01b0316610299565b34801561012357600080fd5b5061012c6103d3565b60408051918252519081900360200190f35b34801561014a57600080fd5b506100c86103d8565b6100a66004803603604081101561016957600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103e2945050505050565b34801561021557600080fd5b506100a66004803603602081101561022c57600080fd5b50356001600160a01b0316610578565b600080600060405180806107386022913960405190819003602201902054935050505090565b600080825160208401856127105a03f43d604051816000823e828015610286578282f35b8282fd5b600061029461066a565b905090565b336102a261066a565b6001600160a01b0316146102e9576040805162461bcd60e51b81526020600482015260096024820152682727aa2fa7aba722a960b91b604482015290519081900360640190fd5b6001600160a01b03811661033c576040805162461bcd60e51b8152602060048201526015602482015274494e56414c49445f50524f58595f4144445245535360581b604482015290519081900360640190fd5b6103458161069c565b6103805760405162461bcd60e51b81526004018080602001828103825260258152602001806107136025913960400191505060405180910390fd5b61038861023c565b6001600160a01b0316816001600160a01b03167fd32d24edea94f55e932d9a008afc425a8561462d1b1f57bc6e508e9a6b9509e160405160405180910390a36103d0816106bf565b50565b600290565b600061029461023c565b336103eb61066a565b6001600160a01b031614610432576040805162461bcd60e51b81526020600482015260096024820152682727aa2fa7aba722a960b91b604482015290519081900360640190fd5b61043b82610299565b60006060306001600160a01b031634846040518082805190602001908083835b6020831061047a5780518252601f19909201916020918201910161045b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146104dc576040519150601f19603f3d011682016040523d82523d6000602084013e6104e1565b606091505b50915091508181906105715760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561053657818101518382015260200161051e565b50505050905090810190601f1680156105635780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5050505050565b3361058161066a565b6001600160a01b0316146105c8576040805162461bcd60e51b81526020600482015260096024820152682727aa2fa7aba722a960b91b604482015290519081900360640190fd5b6001600160a01b038116610612576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b7fdbe5fd65bcdbae152f24ab660ea68e72b4d4705b57b16e0caae994e214680ee28161063c61066a565b604080516001600160a01b03938416815291909216602082015281519081900390910190a16103d0816106e1565b604080517836b0ba34b1973732ba3bb7b93597383937bc3c9737bbb732b960391b815290519081900360190190205490565b60006001600160a01b0382166106b4575060006106ba565b50803b15155b919050565b6000604051808061073860229139604051908190036022019020929092555050565b604080517836b0ba34b1973732ba3bb7b93597383937bc3c9737bbb732b960391b815290519081900360190190205556fe44455354494e4154494f4e5f414444524553535f49535f4e4f545f415f434f4e54524143546d617469632e6e6574776f726b2e70726f78792e696d706c656d656e746174696f6ea2646970667358221220e978c3e794ad2e8e208764a876f25141745a1c3a0756e6fa4327939dd86c789264736f6c634300060600336d617469632e6e6574776f726b2e70726f78792e696d706c656d656e746174696f6e";
