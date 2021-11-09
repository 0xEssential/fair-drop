/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NativeMetaTransaction,
  NativeMetaTransactionInterface,
} from "../NativeMetaTransaction";

const _abi = [
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
    stateMutability: "view",
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
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b506107c98061002a6000396000f3fe60806040526004361061004a5760003560e01c80630c53c51c1461004f5780630f7e59701461007857806320379ee51461008d5780632d0335ab146100af5780633408e470146100cf575b600080fd5b61006261005d366004610425565b6100e4565b60405161006f9190610616565b60405180910390f35b34801561008457600080fd5b5061006261026d565b34801561009957600080fd5b506100a261028a565b60405161006f91906105cb565b3480156100bb57600080fd5b506100a26100ca36600461040b565b610290565b3480156100db57600080fd5b506100a26102ab565b60408051606081810183526001600160a01b0388166000818152600260209081529085902054845283015291810186905261012287828787876102af565b6101475760405162461bcd60e51b815260040161013e906106a5565b60405180910390fd5b6001600160a01b03871660009081526002602052604090205461016b906001610355565b6001600160a01b0388166000908152600260205260409081902091909155517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b906101bb90899033908a90610596565b60405180910390a1600080306001600160a01b0316888a6040516020016101e3929190610544565b60408051601f19818403018152908290526101fd91610528565b6000604051808303816000865af19150503d806000811461023a576040519150601f19603f3d011682016040523d82523d6000602084013e61023f565b606091505b5091509150816102615760405162461bcd60e51b815260040161013e90610629565b98975050505050505050565b604051806040016040528060018152602001603160f81b81525081565b60015490565b6001600160a01b031660009081526002602052604090205490565b4690565b60006001600160a01b0386166102d75760405162461bcd60e51b815260040161013e90610660565b60016102ea6102e587610368565b6103c7565b8386866040516000815260200160405260405161030a94939291906105f8565b6020604051602081039080840390855afa15801561032c573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b600061036182846106e6565b9392505050565b600060405180608001604052806043815260200161075160439139805160209182012083518483015160408087015180519086012090516103a995016105d4565b6040516020818303038152906040528051906020012090505b919050565b60006103d161028a565b826040516020016103a992919061057b565b80356001600160a01b03811681146103c257600080fd5b803560ff811681146103c257600080fd5b60006020828403121561041c578081fd5b610361826103e3565b600080600080600060a0868803121561043c578081fd5b610445866103e3565b945060208087013567ffffffffffffffff80821115610462578384fd5b818901915089601f830112610475578384fd5b8135818111156104875761048761073a565b604051601f8201601f19168101850183811182821017156104aa576104aa61073a565b60405281815283820185018c10156104c0578586fd5b8185850186830137908101909301849052509094505060408601359250606086013591506104f0608087016103fa565b90509295509295909350565b6000815180845261051481602086016020860161070a565b601f01601f19169290920160200192915050565b6000825161053a81846020870161070a565b9190910192915050565b6000835161055681846020880161070a565b60609390931b6bffffffffffffffffffffffff19169190920190815260140192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b038481168252831660208201526060604082018190526000906105c2908301846104fc565b95945050505050565b90815260200190565b93845260208401929092526001600160a01b03166040830152606082015260800190565b93845260ff9290921660208401526040830152606082015260800190565b60006020825261036160208301846104fc565b6020808252601c908201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000604082015260600190565b60208082526025908201527f4e61746976654d6574615472616e73616374696f6e3a20494e56414c49445f5360408201526424a3a722a960d91b606082015260800190565b60208082526021908201527f5369676e657220616e64207369676e617475726520646f206e6f74206d6174636040820152600d60fb1b606082015260800190565b6000821982111561070557634e487b7160e01b81526011600452602481fd5b500190565b60005b8381101561072557818101518382015260200161070d565b83811115610734576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a2646970667358221220938154335d64f91d534bacea83633cb549e10d1b7e2344249db0d77a6ddc104b64736f6c63430008000033";

type NativeMetaTransactionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NativeMetaTransactionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NativeMetaTransaction__factory extends ContractFactory {
  constructor(...args: NativeMetaTransactionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NativeMetaTransaction> {
    return super.deploy(overrides || {}) as Promise<NativeMetaTransaction>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NativeMetaTransaction {
    return super.attach(address) as NativeMetaTransaction;
  }
  connect(signer: Signer): NativeMetaTransaction__factory {
    return super.connect(signer) as NativeMetaTransaction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeMetaTransactionInterface {
    return new utils.Interface(_abi) as NativeMetaTransactionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeMetaTransaction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeMetaTransaction;
  }
}
