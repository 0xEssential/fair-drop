/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155Predicate } from "../ERC1155Predicate";

export class ERC1155Predicate__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Predicate> {
    return super.deploy(overrides || {}) as Promise<ERC1155Predicate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Predicate {
    return super.attach(address) as ERC1155Predicate;
  }
  connect(signer: Signer): ERC1155Predicate__factory {
    return super.connect(signer) as ERC1155Predicate__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Predicate {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Predicate;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositReceiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "LockedBatchERC1155",
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
    name: "MANAGER_ROLE",
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
    name: "TOKEN_TYPE",
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
    name: "TRANSFER_BATCH_EVENT_SIG",
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
    name: "TRANSFER_SINGLE_EVENT_SIG",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "log",
        type: "bytes",
      },
    ],
    name: "exitTokens",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositReceiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
    ],
    name: "lockTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x60806040526003805460ff1916905534801561001a57600080fd5b506100346301ffc9a760e01b6001600160e01b0361005216565b61004d630271189760e51b6001600160e01b0361005216565b6100d6565b6001600160e01b031980821614156100b1576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b61201280620000e66000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063bc197c81116100a2578063e375b64e11610071578063e375b64e146104ca578063e9cff29114610559578063eacc7af214610561578063ec87621c14610569578063f23a6e611461057157610116565b8063bc197c8114610317578063c4d66de81461045b578063ca15c87314610481578063d547741f1461049e57610116565b8063609c92b8116100e9578063609c92b8146101df5780638274664f146101e75780639010d07c146102a457806391d14854146102e3578063a217fddf1461030f57610116565b806301ffc9a71461011b578063248a9ca3146101565780632f2ff15d1461018557806336568abe146101b3575b600080fd5b6101426004803603602081101561013157600080fd5b50356001600160e01b031916610604565b604080519115158252519081900360200190f35b6101736004803603602081101561016c57600080fd5b5035610627565b60408051918252519081900360200190f35b6101b16004803603604081101561019b57600080fd5b50803590602001356001600160a01b031661063c565b005b6101b1600480360360408110156101c957600080fd5b50803590602001356001600160a01b03166106a8565b610173610709565b6101b1600480360360608110156101fd57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561023057600080fd5b82018360208201111561024257600080fd5b803590602001918460018302840111600160201b8311171561026357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610728945050505050565b6102c7600480360360408110156102ba57600080fd5b5080359060200135610d77565b604080516001600160a01b039092168252519081900360200190f35b610142600480360360408110156102f957600080fd5b50803590602001356001600160a01b0316610d9e565b610173610dbc565b61043e600480360360a081101561032d57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561036057600080fd5b82018360208201111561037257600080fd5b803590602001918460208302840111600160201b8311171561039357600080fd5b919390929091602081019035600160201b8111156103b057600080fd5b8201836020820111156103c257600080fd5b803590602001918460208302840111600160201b831117156103e357600080fd5b919390929091602081019035600160201b81111561040057600080fd5b82018360208201111561041257600080fd5b803590602001918460018302840111600160201b8311171561043357600080fd5b509092509050610dc1565b604080516001600160e01b03199092168252519081900360200190f35b6101b16004803603602081101561047157600080fd5b50356001600160a01b0316610dd5565b6101736004803603602081101561049757600080fd5b5035610e95565b6101b1600480360360408110156104b457600080fd5b50803590602001356001600160a01b0316610eac565b6101b1600480360360808110156104e057600080fd5b6001600160a01b0382358116926020810135821692604082013590921691810190608081016060820135600160201b81111561051b57600080fd5b82018360208201111561052d57600080fd5b803590602001918460018302840111600160201b8311171561054e57600080fd5b509092509050610f05565b61017361139b565b6101736113bf565b6101736113e3565b61043e600480360360a081101561058757600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156105c657600080fd5b8201836020820111156105d857600080fd5b803590602001918460018302840111600160201b831117156105f957600080fd5b509092509050611407565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60009081526001602052604090206002015490565b60008281526001602052604090206002015461065f9061065a611413565b610d9e565b61069a5760405162461bcd60e51b815260040180806020018281038252602f815260200180611e65602f913960400191505060405180910390fd5b6106a48282611418565b5050565b6106b0611413565b6001600160a01b0316816001600160a01b0316146106ff5760405162461bcd60e51b815260040180806020018281038252602f815260200180611f87602f913960400191505060405180910390fd5b6106a48282611487565b60408051664552433131353560c81b8152905190819003600701902081565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c0190206107558161065a611413565b6002906107f55760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107e65780601f106107bb576101008083540402835291602001916107e6565b820191906000526020600020905b8154815290600101906020018083116107c957829003601f168201915b50509250505060405180910390fd5b506060610809610804846114f6565b611571565b9050606061082a8260018151811061081d57fe5b6020026020010151611571565b9050606061084b8360028151811061083e57fe5b60200260200101516116f3565b9050600061086c8360028151811061085f57fe5b60200260200101516117c7565b905060006001600160a01b03166108898460038151811061085f57fe5b6001600160a01b0316146108ce5760405162461bcd60e51b8152600401808060200182810382526022815260200180611eba6022913960400191505060405180910390fd5b7fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6260001b6109028460008151811061085f57fe5b1415610a595760008083806020019051604081101561092057600080fd5b81019080805190602001909291908051906020019092919050505091509150886001600160a01b031663f242432a30858585604051806020016040528060008152506040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109ea5781810151838201526020016109d2565b50505050905090810190601f168015610a175780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610a3a57600080fd5b505af1158015610a4e573d6000803e3d6000fd5b505050505050610d6d565b7f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb60001b610a8d8460008151811061085f57fe5b1415610d3657606080838060200190516040811015610aab57600080fd5b8101908080516040519392919084600160201b821115610aca57600080fd5b908301906020820185811115610adf57600080fd5b82518660208202830111600160201b82111715610afb57600080fd5b82525081516020918201928201910280838360005b83811015610b28578181015183820152602001610b10565b5050505090500160405260200180516040519392919084600160201b821115610b5057600080fd5b908301906020820185811115610b6557600080fd5b82518660208202830111600160201b82111715610b8157600080fd5b82525081516020918201928201910280838360005b83811015610bae578181015183820152602001610b96565b5050505090500160405250505091509150886001600160a01b0316632eb2c2d630858585604051806020016040528060008152506040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015610c69578181015183820152602001610c51565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015610ca8578181015183820152602001610c90565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015610ce4578181015183820152602001610ccc565b50505050905090810190601f168015610d115780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015610a3a57600080fd5b60405162461bcd60e51b8152600401808060200182810382526026815260200180611e946026913960400191505060405180910390fd5b5050505050505050565b6000828152600160205260408120610d95908363ffffffff61190d16565b90505b92915050565b6000828152600160205260408120610d95908363ffffffff61191916565b600081565b63bc197c8160e01b98975050505050505050565b60035460ff1615610e1e576040805162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b610e4f6040518060400160405280601081526020016f4552433131353550726564696361746560801b81525061192e565b610e5a60008261069a565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c019020610e85908261069a565b506003805460ff19166001179055565b6000818152600160205260408120610d98906119cc565b600082815260016020526040902060020154610eca9061065a611413565b6106ff5760405162461bcd60e51b8152600401808060200182810382526030815260200180611f046030913960400191505060405180910390fd5b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c019020610f328161065a611413565b600290610f985760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107e65780601f106107bb576101008083540402835291602001916107e6565b50606080606085856060811015610fae57600080fd5b810190602081018135600160201b811115610fc857600080fd5b820183602082011115610fda57600080fd5b803590602001918460208302840111600160201b83111715610ffb57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561104a57600080fd5b82018360208201111561105c57600080fd5b803590602001918460208302840111600160201b8311171561107d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156110cc57600080fd5b8201836020820111156110de57600080fd5b803590602001918460018302840111600160201b831117156110ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050925092509250866001600160a01b0316886001600160a01b03168a6001600160a01b03167f5a921678b5779e4471b77219741a417a6ad6ec5d89fa5c8ce8cd7bd2d9f341868686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156111d75781810151838201526020016111bf565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156112165781810151838201526020016111fe565b5050505090500194505050505060405180910390a4604051631759616b60e11b81526001600160a01b038a811660048301908152306024840181905260a060448501908152875160a48601528751938c1694632eb2c2d6948f948a938a938a936064820191608481019160c4909101906020808a01910280838360005b838110156112ab578181015183820152602001611293565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156112ea5781810151838201526020016112d2565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561132657818101518382015260200161130e565b50505050905090810190601f1680156113535780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561137857600080fd5b505af115801561138c573d6000803e3d6000fd5b50505050505050505050505050565b7fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6281565b7f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb81565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c01902081565b60009695505050505050565b335b90565b6000828152600160205260409020611436908263ffffffff6119d716565b156106a457611443611413565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526001602052604090206114a5908263ffffffff6119ec16565b156106a4576114b2611413565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6114fe611d90565b6000825111611554576040805162461bcd60e51b815260206004820152601f60248201527f524c505265616465723a20494e56414c49445f42595445535f4c454e47544800604482015290519081900360640190fd5b506040805180820190915281518152602082810190820152919050565b606061157c82611a01565b6115cd576040805162461bcd60e51b815260206004820152601860248201527f524c505265616465723a204954454d5f4e4f545f4c4953540000000000000000604482015290519081900360640190fd5b60006115d883611a2d565b905060608167ffffffffffffffff811180156115f357600080fd5b5060405190808252806020026020018201604052801561162d57816020015b61161a611d90565b8152602001906001900390816116125790505b509050600061163f8560200151611ab9565b855190915081146116815760405162461bcd60e51b8152600401808060200182810382526027815260200180611f606027913960400191505060405180910390fd5b60006116908660200151611b52565b60208701510190506000805b858110156116e7576116ad83611ab9565b91506040518060400160405280838152602001848152508582815181106116d057fe5b60209081029190910101529181019160010161169c565b50929695505050505050565b606060006117048360200151611ab9565b835190915081146117465760405162461bcd60e51b8152600401808060200182810382526028815260200180611edc6028913960400191505060405180910390fd5b60006117558460200151611b52565b845190915081900360608167ffffffffffffffff8111801561177657600080fd5b506040519080825280601f01601f1916602001820160405280156117a1576020820181803683370190505b50905060008160200190506117bd848860200151018285611bb5565b5095945050505050565b60006117d282611a01565b15611824576040805162461bcd60e51b815260206004820181905260248201527f524c505265616465723a204445434f44494e475f4c4953545f41535f55494e54604482015290519081900360640190fd5b81516021101561187b576040805162461bcd60e51b815260206004820152601e60248201527f524c505265616465723a20494e56414c49445f55494e545f4c454e4754480000604482015290519081900360640190fd5b600061188a8360200151611ab9565b835190915081146118cc5760405162461bcd60e51b8152600401808060200182810382526027815260200180611fb66027913960400191505060405180910390fd5b60006118db8460200151611b52565b845160208087015183018051939450918490039291908310156117bd57506020919091036101000a9004949350505050565b6000610d958383611c00565b6000610d95836001600160a01b038416611c64565b806040516020018082805190602001908083835b602083106119615780518252601f199092019160209182019101611942565b51815160209384036101000a60001901801990921691161790527f3a20494e53554646494349454e545f5045524d495353494f4e530000000000009190930190815260408051808303600519018152601a909201905280516106a49550600294509201919050611daa565b6000610d9882611c7c565b6000610d95836001600160a01b038416611c80565b6000610d95836001600160a01b038416611cca565b6020810151805160009190821a9060c0821015611a2357600092505050610622565b5060019392505050565b600080600090506000611a438460200151611b52565b602085015185519181019250015b80821015611ab057611a6282611ab9565b8201915080821115611aa55760405162461bcd60e51b815260040180806020018281038252602c815260200180611f34602c913960400191505060405180910390fd5b600190920191611a51565b50909392505050565b80516000908190811a6080811015611ad45760019150611b4b565b60b8811015611ae957607e1981019150611b4b565b60c0811015611b165760b78103600185019450806020036101000a85510460018201810193505050611b4b565b60f8811015611b2b5760be1981019150611b4b565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b8051600090811a6080811015611b6c576000915050610622565b60b8811080611b87575060c08110801590611b87575060f881105b15611b96576001915050610622565b60c0811015611baa5760b519019050610622565b60f519019050610622565b80611bbf57611bfb565b5b60208110611bdf578251825260209283019290910190601f1901611bc0565b8251825160208390036101000a60001901801990921691161782525b505050565b81546000908210611c425760405162461bcd60e51b8152600401808060200182810382526022815260200180611e436022913960400191505060405180910390fd5b826000018281548110611c5157fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b6000611c8c8383611c64565b611cc257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610d98565b506000610d98565b60008181526001830160205260408120548015611d865783546000198083019190810190600090879083908110611cfd57fe5b9060005260206000200154905080876000018481548110611d1a57fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611d4a57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610d98565b6000915050610d98565b604051806040016040528060008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611deb57805160ff1916838001178555611e18565b82800160010185558215611e18579182015b82811115611e18578251825591602001919060010190611dfd565b50611e24929150611e28565b5090565b61141591905b80821115611e245760008155600101611e2e56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74455243313135355072656469636174653a20494e56414c49445f57495448445241575f534947455243313135355072656469636174653a20494e56414c49445f5245434549564552524c505265616465723a2042595445535f4445434f4445445f4c454e4754485f4d49534d41544348416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65524c505265616465723a204e554d5f4954454d535f4445434f4445445f4c454e4754485f4d49534d41544348524c505265616465723a204c4953545f4445434f4445445f4c454e4754485f4d49534d41544348416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66524c505265616465723a2055494e545f4445434f4445445f4c454e4754485f4d49534d41544348a26469706673582212203f011d485d296a21663b89b7810062e2d0c08acfb591d132d25535bdf0c1598864736f6c63430006060033";