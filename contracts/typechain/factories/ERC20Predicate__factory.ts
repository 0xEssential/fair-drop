/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20Predicate } from "../ERC20Predicate";

export class ERC20Predicate__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Predicate> {
    return super.deploy(overrides || {}) as Promise<ERC20Predicate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Predicate {
    return super.attach(address) as ERC20Predicate;
  }
  connect(signer: Signer): ERC20Predicate__factory {
    return super.connect(signer) as ERC20Predicate__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Predicate {
    return new Contract(address, _abi, signerOrProvider) as ERC20Predicate;
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LockedERC20",
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
    name: "TRANSFER_EVENT_SIG",
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
];

const _bytecode =
  "0x60806040526002805460ff1916905534801561001a57600080fd5b5061184f8061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a217fddf1161008c578063ca15c87311610066578063ca15c873146102f4578063d547741f14610311578063e375b64e1461033d578063ec87621c146103ce576100ea565b8063a217fddf146102be578063b017a30f146102c6578063c4d66de8146102ce576100ea565b8063609c92b8116100c8578063609c92b8146101785780638274664f146101805780639010d07c1461023f57806391d148541461027e576100ea565b8063248a9ca3146100ef5780632f2ff15d1461011e57806336568abe1461014c575b600080fd5b61010c6004803603602081101561010557600080fd5b50356103d6565b60408051918252519081900360200190f35b61014a6004803603604081101561013457600080fd5b50803590602001356001600160a01b03166103ee565b005b61014a6004803603604081101561016257600080fd5b50803590602001356001600160a01b031661045a565b61010c6104bb565b61014a6004803603606081101561019657600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156101ca57600080fd5b8201836020820111156101dc57600080fd5b803590602001918460018302840111640100000000831117156101fe57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104d8945050505050565b6102626004803603604081101561025557600080fd5b5080359060200135610717565b604080516001600160a01b039092168252519081900360200190f35b6102aa6004803603604081101561029457600080fd5b50803590602001356001600160a01b031661073e565b604080519115158252519081900360200190f35b61010c61075c565b61010c610761565b61014a600480360360208110156102e457600080fd5b50356001600160a01b0316610785565b61010c6004803603602081101561030a57600080fd5b5035610843565b61014a6004803603604081101561032757600080fd5b50803590602001356001600160a01b031661085a565b61014a6004803603608081101561035357600080fd5b6001600160a01b038235811692602081013582169260408201359092169181019060808101606082013564010000000081111561038f57600080fd5b8201836020820111156103a157600080fd5b803590602001918460018302840111640100000000831117156103c357600080fd5b5090925090506108b3565b61010c6109c1565b6000818152602081905260409020600201545b919050565b6000828152602081905260409020600201546104119061040c6109e5565b61073e565b61044c5760405162461bcd60e51b815260040180806020018281038252602f8152602001806116a1602f913960400191505060405180910390fd5b61045682826109ea565b5050565b6104626109e5565b6001600160a01b0316816001600160a01b0316146104b15760405162461bcd60e51b815260040180806020018281038252602f8152602001806117c4602f913960400191505060405180910390fd5b6104568282610a59565b6040805164045524332360dc1b8152905190819003600501902081565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c0190206105058161040c6109e5565b6001906105a55760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156105965780601f1061056b57610100808354040283529160200191610596565b820191906000526020600020905b81548152906001019060200180831161057957829003601f168201915b50509250505060405180910390fd5b5060606105b96105b484610ac8565b610b43565b905060606105da826001815181106105cd57fe5b6020026020010151610b43565b90507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60001b61061d8260008151811061061057fe5b6020026020010151610cc5565b146106595760405162461bcd60e51b81526004018080602001828103825260218152602001806116d06021913960400191505060405180910390fd5b600061066b8260018151811061061057fe5b905060006001600160a01b03166106888360028151811061061057fe5b6001600160a01b0316146106e3576040805162461bcd60e51b815260206004820181905260248201527f45524332305072656469636174653a20494e56414c49445f5245434549564552604482015290519081900360640190fd5b61070e816106f78560028151811061061057fe5b6001600160a01b038916919063ffffffff610e0d16565b50505050505050565b6000828152602081905260408120610735908363ffffffff610e6416565b90505b92915050565b6000828152602081905260408120610735908363ffffffff610e7016565b600081565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef81565b60025460ff16156107ce576040805162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481a5b9a5d195960921b604482015290519081900360640190fd5b6107fd6040518060400160405280600e81526020016d455243323050726564696361746560901b815250610e85565b61080860008261044c565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c019020610833908261044c565b506002805460ff19166001179055565b600081815260208190526040812061073890610f23565b6000828152602081905260409020600201546108789061040c6109e5565b6104b15760405162461bcd60e51b81526004018080602001828103825260308152602001806117176030913960400191505060405180910390fd5b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c0190206108e08161040c6109e5565b6001906109465760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156105965780601f1061056b57610100808354040283529160200191610596565b5060008383602081101561095957600080fd5b5060408051913580835290519092506001600160a01b038088169289821692918b16917f9b217a401a5ddf7c4d474074aff9958a18d48690d77cc2151c4706aa7348b4019181900360200190a461070e6001600160a01b03861688308463ffffffff610f2e16565b604080516b4d414e414745525f524f4c4560a01b8152905190819003600c01902081565b335b90565b6000828152602081905260409020610a08908263ffffffff610f8e16565b1561045657610a156109e5565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081905260409020610a77908263ffffffff610fa316565b1561045657610a846109e5565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b610ad06115cc565b6000825111610b26576040805162461bcd60e51b815260206004820152601f60248201527f524c505265616465723a20494e56414c49445f42595445535f4c454e47544800604482015290519081900360640190fd5b506040805180820190915281518152602082810190820152919050565b6060610b4e82610fb8565b610b9f576040805162461bcd60e51b815260206004820152601860248201527f524c505265616465723a204954454d5f4e4f545f4c4953540000000000000000604482015290519081900360640190fd5b6000610baa83610fe4565b905060608167ffffffffffffffff81118015610bc557600080fd5b50604051908082528060200260200182016040528015610bff57816020015b610bec6115cc565b815260200190600190039081610be45790505b5090506000610c118560200151611070565b85519091508114610c535760405162461bcd60e51b81526004018080602001828103825260278152602001806117736027913960400191505060405180910390fd5b6000610c628660200151611109565b60208701510190506000805b85811015610cb957610c7f83611070565b9150604051806040016040528083815260200184815250858281518110610ca257fe5b602090810291909101015291810191600101610c6e565b50929695505050505050565b6000610cd082610fb8565b15610d22576040805162461bcd60e51b815260206004820181905260248201527f524c505265616465723a204445434f44494e475f4c4953545f41535f55494e54604482015290519081900360640190fd5b815160211015610d79576040805162461bcd60e51b815260206004820152601e60248201527f524c505265616465723a20494e56414c49445f55494e545f4c454e4754480000604482015290519081900360640190fd5b6000610d888360200151611070565b83519091508114610dca5760405162461bcd60e51b81526004018080602001828103825260278152602001806117f36027913960400191505060405180910390fd5b6000610dd98460200151611109565b84516020808701518301805193945091849003929190831015610e0357826020036101000a820491505b5095945050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610e5f90849061116c565b505050565b6000610735838361121d565b6000610735836001600160a01b038416611281565b806040516020018082805190602001908083835b60208310610eb85780518252601f199092019160209182019101610e99565b51815160209384036101000a60001901801990921691161790527f3a20494e53554646494349454e545f5045524d495353494f4e530000000000009190930190815260408051808303600519018152601a9092019052805161045695506001945092019190506115e6565b600061073882611299565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610f8890859061116c565b50505050565b6000610735836001600160a01b03841661129d565b6000610735836001600160a01b0384166112e7565b6020810151805160009190821a9060c0821015610fda576000925050506103e9565b5060019392505050565b600080600090506000610ffa8460200151611109565b602085015185519181019250015b808210156110675761101982611070565b820191508082111561105c5760405162461bcd60e51b815260040180806020018281038252602c815260200180611747602c913960400191505060405180910390fd5b600190920191611008565b50909392505050565b80516000908190811a608081101561108b5760019150611102565b60b88110156110a057607e1981019150611102565b60c08110156110cd5760b78103600185019450806020036101000a85510460018201810193505050611102565b60f88110156110e25760be1981019150611102565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b8051600090811a60808110156111235760009150506103e9565b60b881108061113e575060c0811080159061113e575060f881105b1561114d5760019150506103e9565b60c08110156111615760b5190190506103e9565b60f5190190506103e9565b60606111c1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113ad9092919063ffffffff16565b805190915015610e5f578080602001905160208110156111e057600080fd5b5051610e5f5760405162461bcd60e51b815260040180806020018281038252602a81526020018061179a602a913960400191505060405180910390fd5b8154600090821061125f5760405162461bcd60e51b815260040180806020018281038252602281526020018061167f6022913960400191505060405180910390fd5b82600001828154811061126e57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b60006112a98383611281565b6112df57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610738565b506000610738565b600081815260018301602052604081205480156113a3578354600019808301919081019060009087908390811061131a57fe5b906000526020600020015490508087600001848154811061133757fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061136757fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610738565b6000915050610738565b60606113bc84846000856113c6565b90505b9392505050565b6060824710156114075760405162461bcd60e51b81526004018080602001828103825260268152602001806116f16026913960400191505060405180910390fd5b61141085611522565b611461576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106114a05780518252601f199092019160209182019101611481565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611502576040519150601f19603f3d011682016040523d82523d6000602084013e611507565b606091505b5091509150611517828286611528565b979650505050505050565b3b151590565b606083156115375750816113bf565b8251156115475782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611591578181015183820152602001611579565b50505050905090810190601f1680156115be5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b604051806040016040528060008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061162757805160ff1916838001178555611654565b82800160010185558215611654579182015b82811115611654578251825591602001919060010190611639565b50611660929150611664565b5090565b6109e791905b80821115611660576000815560010161166a56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332305072656469636174653a20494e56414c49445f5349474e4154555245416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65524c505265616465723a204e554d5f4954454d535f4445434f4445445f4c454e4754485f4d49534d41544348524c505265616465723a204c4953545f4445434f4445445f4c454e4754485f4d49534d415443485361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66524c505265616465723a2055494e545f4445434f4445445f4c454e4754485f4d49534d41544348a2646970667358221220c2d0b9bed54af203be115788fc432305734a1c8693907033fb2290f01799098d64736f6c63430006060033";
