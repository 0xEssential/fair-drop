/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ChildERC20 } from "../ChildERC20";

export class ChildERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    childChainManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChildERC20> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      childChainManager,
      overrides || {}
    ) as Promise<ChildERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    childChainManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      childChainManager,
      overrides || {}
    );
  }
  attach(address: string): ChildERC20 {
    return super.attach(address) as ChildERC20;
  }
  connect(signer: Signer): ChildERC20__factory {
    return super.connect(signer) as ChildERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChildERC20 {
    return new Contract(address, _abi, signerOrProvider) as ChildERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "childChainManager",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    name: "DEPOSITOR_ROLE",
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
    name: "ERC712_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeperator",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526008805460ff191690553480156200001b57600080fd5b506040516200258338038062002583833981810160405260808110156200004157600080fd5b81019080805160405193929190846401000000008211156200006257600080fd5b9083019060208201858111156200007857600080fd5b82516401000000008111828201881017156200009357600080fd5b82525081516020918201929091019080838360005b83811015620000c2578181015183820152602001620000a8565b50505050905090810190601f168015620000f05780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011457600080fd5b9083019060208201858111156200012a57600080fd5b82516401000000008111828201881017156200014557600080fd5b82525081516020918201929091019080838360005b83811015620001745781810151838201526020016200015a565b50505050905090810190601f168015620001a25780820380516001836020036101000a031916815260200191505b50604090815260208281015192909101518651929450925085918591620001cf9160039185019062000660565b508051620001e590600490602084019062000660565b50506005805460ff191660121790555060408051808201909152600a81526904368696c6445524332360b41b60208201526200022a906001600160e01b03620002bc16565b6200023e826001600160e01b036200036216565b620002666000620002576001600160e01b036200037816565b6001600160e01b036200039516565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e0190206200029e90826001600160e01b036200039516565b620002b2846001600160e01b03620003aa16565b5050505062000702565b806040516020018082805190602001908083835b60208310620002f15780518252601f199092019160209182019101620002d0565b51815160209384036101000a60001901801990921691161790527f3a20494e53554646494349454e545f5045524d495353494f4e530000000000009190930190815260408051808303600519018152601a909201905280516200035e955060079450920191905062000660565b5050565b6005805460ff191660ff92909216919091179055565b60006200038f6200041860201b620017f31760201c565b90505b90565b6200035e82826001600160e01b036200047716565b60085460ff1615620003f4576040805162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b62000408816001600160e01b03620004fb16565b506008805460ff19166001179055565b600033301415620004725760606000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150620003929050565b503390565b60008281526006602090815260409091206200049e9183906200198b620005c3821b17901c565b156200035e57620004b76001600160e01b036200037816565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6040518060800160405280604f815260200162002534604f913980516020918201208251838301206040805180820190915260018152603160f81b930192909252907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc630620005726001600160e01b03620005ec16565b604080516020808201979097528082019590955260608501939093526001600160a01b03909116608084015260a0808401919091528151808403909101815260c09092019052805191012060095550565b6000620005e3836001600160a01b0384166001600160e01b03620005f016565b90505b92915050565b4690565b60006200060783836001600160e01b036200064816565b6200063f57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620005e6565b506000620005e6565b60009081526001919091016020526040902054151590565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620006a357805160ff1916838001178555620006d3565b82800160010185558215620006d3579182015b82811115620006d3578251825591602001919060010190620006b6565b50620006e1929150620006e5565b5090565b6200039291905b80821115620006e15760008155600101620006ec565b611e2280620007126000396000f3fe60806040526004361061019c5760003560e01c806336568abe116100ec578063a3b0b5a31161008a578063ca15c87311610064578063ca15c873146106ad578063cf2c52cb146106d7578063d547741f14610764578063dd62ed3e1461079d5761019c565b8063a3b0b5a314610626578063a457c2d71461063b578063a9059cbb146106745761019c565b80639010d07c116100c65780639010d07c1461057757806391d14854146105c357806395d89b41146105fc578063a217fddf146106115761019c565b806336568abe146104d2578063395093511461050b57806370a08231146105445761019c565b806323b872dd116101595780632e1a7d4d116101335780632e1a7d4d1461042d5780632f2ff15d14610459578063313ce567146104925780633408e470146104bd5761019c565b806323b872dd1461038d578063248a9ca3146103d05780632d0335ab146103fa5761019c565b806306fdde03146101a1578063095ea7b31461022b5780630c53c51c146102785780630f7e59701461033c57806318160ddd1461035157806320379ee514610378575b600080fd5b3480156101ad57600080fd5b506101b66107d8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f05781810151838201526020016101d8565b50505050905090810190601f16801561021d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023757600080fd5b506102646004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561086e565b604080519115158252519081900360200190f35b6101b6600480360360a081101561028e57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102b957600080fd5b8201836020820111156102cb57600080fd5b803590602001918460018302840111640100000000831117156102ed57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020810135906040013560ff1661088c565b34801561034857600080fd5b506101b6610b8f565b34801561035d57600080fd5b50610366610bac565b60408051918252519081900360200190f35b34801561038457600080fd5b50610366610bb2565b34801561039957600080fd5b50610264600480360360608110156103b057600080fd5b506001600160a01b03813581169160208101359091169060400135610bb8565b3480156103dc57600080fd5b50610366600480360360208110156103f357600080fd5b5035610c45565b34801561040657600080fd5b506103666004803603602081101561041d57600080fd5b50356001600160a01b0316610c5a565b34801561043957600080fd5b506104576004803603602081101561045057600080fd5b5035610c75565b005b34801561046557600080fd5b506104576004803603604081101561047c57600080fd5b50803590602001356001600160a01b0316610c89565b34801561049e57600080fd5b506104a7610cf5565b6040805160ff9092168252519081900360200190f35b3480156104c957600080fd5b50610366610cfe565b3480156104de57600080fd5b50610457600480360360408110156104f557600080fd5b50803590602001356001600160a01b0316610d02565b34801561051757600080fd5b506102646004803603604081101561052e57600080fd5b506001600160a01b038135169060200135610d63565b34801561055057600080fd5b506103666004803603602081101561056757600080fd5b50356001600160a01b0316610db7565b34801561058357600080fd5b506105a76004803603604081101561059a57600080fd5b5080359060200135610dd2565b604080516001600160a01b039092168252519081900360200190f35b3480156105cf57600080fd5b50610264600480360360408110156105e657600080fd5b50803590602001356001600160a01b0316610df7565b34801561060857600080fd5b506101b6610e15565b34801561061d57600080fd5b50610366610e76565b34801561063257600080fd5b50610366610e7b565b34801561064757600080fd5b506102646004803603604081101561065e57600080fd5b506001600160a01b038135169060200135610ea1565b34801561068057600080fd5b506102646004803603604081101561069757600080fd5b506001600160a01b038135169060200135610f0f565b3480156106b957600080fd5b50610366600480360360208110156106d057600080fd5b5035610f23565b3480156106e357600080fd5b50610457600480360360408110156106fa57600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561072557600080fd5b82018360208201111561073757600080fd5b8035906020019184600183028401116401000000008311171561075957600080fd5b509092509050610f3a565b34801561077057600080fd5b506104576004803603604081101561078757600080fd5b50803590602001356001600160a01b0316611031565b3480156107a957600080fd5b50610366600480360360408110156107c057600080fd5b506001600160a01b038135811691602001351661108a565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b5050505050905090565b600061088261087b6110b5565b84846110c4565b5060015b92915050565b6060610896611b45565b50604080516060810182526001600160a01b0388166000818152600a6020908152908490205483528201529081018690526108d487828787876111b0565b61090f5760405162461bcd60e51b8152600401808060200182810382526021815260200180611d0e6021913960400191505060405180910390fd5b6001600160a01b0387166000908152600a602052604090205461093990600163ffffffff61128d16565b6001600160a01b0388166000818152600a602090815260408083209490945583519283523383820181905260609484018581528b51958501959095528a517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b958d9592948d94919260808501928601918190849084905b838110156109c85781810151838201526020016109b0565b50505050905090810190601f1680156109f55780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160006060306001600160a01b0316888a6040516020018083805190602001908083835b60208310610a465780518252601f199092019160209182019101610a27565b6001836020036101000a038019825116818451168082178552505050505050905001826001600160a01b03166001600160a01b031660601b8152601401925050506040516020818303038152906040526040518082805190602001908083835b60208310610ac55780518252601f199092019160209182019101610aa6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b27576040519150601f19603f3d011682016040523d82523d6000602084013e610b2c565b606091505b509150915081610b83576040805162461bcd60e51b815260206004820152601c60248201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000604482015290519081900360640190fd5b98975050505050505050565b604051806040016040528060018152602001603160f81b81525081565b60025490565b60095490565b6000610bc58484846112e7565b610c3b84610bd16110b5565b610c3685604051806060016040528060288152602001611ce6602891396001600160a01b038a16600090815260016020526040812090610c0f6110b5565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61144e16565b6110c4565b5060019392505050565b60009081526006602052604090206002015490565b6001600160a01b03166000908152600a602052604090205490565b610c86610c806110b5565b826114e5565b50565b600082815260066020526040902060020154610cac90610ca76110b5565b610df7565b610ce75760405162461bcd60e51b815260040180806020018281038252602f815260200180611bb5602f913960400191505060405180910390fd5b610cf182826115ed565b5050565b60055460ff1690565b4690565b610d0a6110b5565b6001600160a01b0316816001600160a01b031614610d595760405162461bcd60e51b815260040180806020018281038252602f815260200180611dbe602f913960400191505060405180910390fd5b610cf1828261165c565b6000610882610d706110b5565b84610c368560016000610d816110b5565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61128d16565b6001600160a01b031660009081526020819052604090205490565b6000828152600660205260408120610df0908363ffffffff6116cb16565b9392505050565b6000828152600660205260408120610df0908363ffffffff6116d716565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108645780601f1061083957610100808354040283529160200191610864565b600081565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e01902081565b6000610882610eae6110b5565b84610c3685604051806060016040528060258152602001611d996025913960016000610ed86110b5565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61144e16565b6000610882610f1c6110b5565b84846112e7565b6000818152600660205260408120610886906116ec565b604080516d4445504f5349544f525f524f4c4560901b8152905190819003600e019020610f6981610ca76110b5565b6007906110095760405162461bcd60e51b8152602060048201908152825460026000196101006001841615020190911604602483018190529091829160449091019084908015610ffa5780601f10610fcf57610100808354040283529160200191610ffa565b820191906000526020600020905b815481529060010190602001808311610fdd57829003601f168201915b50509250505060405180910390fd5b5060008383602081101561101c57600080fd5b5035905061102a85826116f7565b5050505050565b60008281526006602052604090206002015461104f90610ca76110b5565b610d595760405162461bcd60e51b8152600401808060200182810382526030815260200180611c916030913960400191505060405180910390fd5b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006110bf6117f3565b905090565b6001600160a01b0383166111095760405162461bcd60e51b8152600401808060200182810382526024815260200180611d756024913960400191505060405180910390fd5b6001600160a01b03821661114e5760405162461bcd60e51b8152600401808060200182810382526022815260200180611c496022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60006001600160a01b0386166111f75760405162461bcd60e51b8152600401808060200182810382526025815260200180611cc16025913960400191505060405180910390fd5b600161120a61120587611851565b6118dd565b83868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611264573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b600082820183811015610df0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b03831661132c5760405162461bcd60e51b8152600401808060200182810382526025815260200180611d506025913960400191505060405180910390fd5b6001600160a01b0382166113715760405162461bcd60e51b8152600401808060200182810382526023815260200180611b926023913960400191505060405180910390fd5b61137c838383611929565b6113bf81604051806060016040528060268152602001611c6b602691396001600160a01b038616600090815260208190526040902054919063ffffffff61144e16565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546113f4908263ffffffff61128d16565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156114dd5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114a257818101518382015260200161148a565b50505050905090810190601f1680156114cf5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b03821661152a5760405162461bcd60e51b8152600401808060200182810382526021815260200180611d2f6021913960400191505060405180910390fd5b61153682600083611929565b61157981604051806060016040528060228152602001611be4602291396001600160a01b038516600090815260208190526040902054919063ffffffff61144e16565b6001600160a01b0383166000908152602081905260409020556002546115a5908263ffffffff61192e16565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082815260066020526040902061160b908263ffffffff61198b16565b15610cf1576116186110b5565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260066020526040902061167a908263ffffffff6119a016565b15610cf1576116876110b5565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6000610df083836119b5565b6000610df0836001600160a01b038416611a19565b600061088682611a31565b6001600160a01b038216611752576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61175e60008383611929565b600254611771908263ffffffff61128d16565b6002556001600160a01b03821660009081526020819052604090205461179d908263ffffffff61128d16565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60003330141561184b5760606000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b0316915061184e9050565b50335b90565b6000604051806080016040528060438152602001611c0660439139805190602001208260000151836020015184604001518051906020012060405160200180858152602001848152602001836001600160a01b03166001600160a01b03168152602001828152602001945050505050604051602081830303815290604052805190602001209050919050565b60006118e7610bb2565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b505050565b600082821115611985576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000610df0836001600160a01b038416611a35565b6000610df0836001600160a01b038416611a7f565b815460009082106119f75760405162461bcd60e51b8152600401808060200182810382526022815260200180611b706022913960400191505060405180910390fd5b826000018281548110611a0657fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6000611a418383611a19565b611a7757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610886565b506000610886565b60008181526001830160205260408120548015611b3b5783546000198083019190810190600090879083908110611ab257fe5b9060005260206000200154905080876000018481548110611acf57fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611aff57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610886565b6000915050610886565b60405180606001604052806000815260200160006001600160a01b0316815260200160608152509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647345524332303a207472616e7366657220746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332303a206275726e20616d6f756e7420657863656564732062616c616e63654d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e61747572652945524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b654e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5349474e455245524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655369676e657220616e64207369676e617475726520646f206e6f74206d6174636845524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a264697066735822122001826b960d0271fcdf1a1bd8ca6a7f1bc97ada644cbccab84ed392fb02dcb9e264736f6c63430006060033454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c6164647265737320766572696679696e67436f6e74726163742c627974657333322073616c7429";
