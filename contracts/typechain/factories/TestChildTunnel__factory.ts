/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestChildTunnel } from "../TestChildTunnel";

export class TestChildTunnel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestChildTunnel> {
    return super.deploy(overrides || {}) as Promise<TestChildTunnel>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestChildTunnel {
    return super.attach(address) as TestChildTunnel;
  }
  connect(signer: Signer): TestChildTunnel__factory {
    return super.connect(signer) as TestChildTunnel__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestChildTunnel {
    return new Contract(address, _abi, signerOrProvider) as TestChildTunnel;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STATE_SYNCER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TYPE1",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TYPE2",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "onStateReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526200001a6000336001600160e01b036200009316565b604080517053544154455f53594e4345525f524f4c4560781b8152905190819003601101902062000057906110016001600160e01b036200009316565b60408051808201909152600b81526a10da1a5b19151d5b9b995b60aa1b60208201526200008d906001600160e01b03620000ac16565b62000310565b620000a882826001600160e01b036200014e16565b5050565b806040516020018082805190602001908083835b60208310620000e15780518252601f199092019160209182019101620000c0565b51815160209384036101000a60001901801990921691161790527f3a20494e53554646494349454e545f5045524d495353494f4e530000000000009190930190815260408051808303600519018152601a90920190528051620000a895506001945092019190506200026e565b60008281526020818152604090912062000173918390620008d7620001d0821b17901c565b15620000a8576200018c6001600160e01b03620001f916565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001f0836001600160a01b0384166001600160e01b03620001fe16565b90505b92915050565b335b90565b60006200021583836001600160e01b036200025616565b6200024d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001f3565b506000620001f3565b60009081526001919091016020526040902054151590565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002b157805160ff1916838001178555620002e1565b82800160010185558215620002e1579182015b82811115620002e1578251825591602001919060010190620002c4565b50620002ef929150620002f3565b5090565b620001fb91905b80821115620002ef5760008155600101620002fa565b610b7780620003206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638381f58a1161008c578063a217fddf11610066578063a217fddf1461032c578063a618f4c614610334578063ca15c8731461033c578063d547741f14610359576100ea565b80638381f58a146102a55780639010d07c146102ad57806391d14854146102ec576100ea565b806336568abe116100c857806336568abe146101f95780634dee44981461022557806367cedeef1461022d57806382646a5814610235576100ea565b8063248a9ca3146100ef57806326c53bea1461011e5780632f2ff15d146101cd575b600080fd5b61010c6004803603602081101561010557600080fd5b5035610385565b60408051918252519081900360200190f35b6101cb6004803603604081101561013457600080fd5b8135919081019060408101602082013564010000000081111561015657600080fd5b82018360208201111561016857600080fd5b8035906020019184600183028401116401000000008311171561018a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061039a945050505050565b005b6101cb600480360360408110156101e357600080fd5b50803590602001356001600160a01b0316610480565b6101cb6004803603604081101561020f57600080fd5b50803590602001356001600160a01b03166104e7565b61010c610548565b61010c610571565b6101cb6004803603602081101561024b57600080fd5b81019060208101813564010000000081111561026657600080fd5b82018360208201111561027857600080fd5b8035906020019184600183028401116401000000008311171561029a57600080fd5b50909250905061058e565b61010c6105cd565b6102d0600480360360408110156102c357600080fd5b50803590602001356105d3565b604080516001600160a01b039092168252519081900360200190f35b6103186004803603604081101561030257600080fd5b50803590602001356001600160a01b03166105fa565b604080519115158252519081900360200190f35b61010c610618565b61010c61061d565b61010c6004803603602081101561035257600080fd5b503561063a565b6101cb6004803603604081101561036f57600080fd5b50803590602001356001600160a01b0316610651565b60009081526020819052604090206002015490565b604080517053544154455f53594e4345525f524f4c4560781b815290519081900360110190206103d1816103cc6106aa565b6105fa565b6001906104715760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156104625780601f1061043757610100808354040283529160200191610462565b820191906000526020600020905b81548152906001019060200180831161044557829003601f168201915b50509250505060405180910390fd5b5061047b826106ae565b505050565b60008281526020819052604090206002015461049e906103cc6106aa565b6104d95760405162461bcd60e51b815260040180806020018281038252602f815260200180610ab4602f913960400191505060405180910390fd5b6104e38282610731565b5050565b6104ef6106aa565b6001600160a01b0316816001600160a01b03161461053e5760405162461bcd60e51b815260040180806020018281038252602f815260200180610b13602f913960400191505060405180910390fd5b6104e382826107a0565b604080517053544154455f53594e4345525f524f4c4560781b8152905190819003601101902081565b6040805164545950453160d81b8152905190819003600501902081565b6104e382828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061080f92505050565b60025481565b60008281526020819052604081206105f1908363ffffffff6108ab16565b90505b92915050565b60008281526020819052604081206105f1908363ffffffff6108b716565b600081565b60408051642a2ca8229960d91b8152905190819003600501902081565b60008181526020819052604081206105f4906108cc565b60008281526020819052604090206002015461066f906103cc6106aa565b61053e5760405162461bcd60e51b8152600401808060200182810382526030815260200180610ae36030913960400191505060405180910390fd5b3390565b6000808280602001905160408110156106c657600080fd5b5080516020909101516040805164545950453160d81b81529051908190036005019020919350915082141561070257600280548201905561047b565b60408051642a2ca8229960d91b8152905190819003600501902082141561047b57600280548290039055505050565b600082815260208190526040902061074f908263ffffffff6108d716565b156104e35761075c6106aa565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020819052604090206107be908263ffffffff6108ec16565b156104e3576107cb6106aa565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036816040518080602001828103825283818151815260200191508051906020019080838360005b8381101561086e578181015183820152602001610856565b50505050905090810190601f16801561089b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a150565b60006105f18383610901565b60006105f1836001600160a01b038416610965565b60006105f48261097d565b60006105f1836001600160a01b038416610981565b60006105f1836001600160a01b0384166109cb565b815460009082106109435760405162461bcd60e51b8152600401808060200182810382526022815260200180610a926022913960400191505060405180910390fd5b82600001828154811061095257fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b600061098d8383610965565b6109c3575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105f4565b5060006105f4565b60008181526001830160205260408120548015610a8757835460001980830191908101906000908790839081106109fe57fe5b9060005260206000200154905080876000018481548110610a1b57fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080610a4b57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506105f4565b60009150506105f456fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a2646970667358221220b7b5e02939d810ebca5a818202f80840596d47b57a122d00af88f38f996001be64736f6c63430006060033";
