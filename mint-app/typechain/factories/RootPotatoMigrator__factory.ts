/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RootPotatoMigrator } from "../RootPotatoMigrator";

export class RootPotatoMigrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    stateSender_: string,
    potato_: string,
    rootChainManager_: string,
    erc20Predicate_: string,
    childPotatoMigrator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RootPotatoMigrator> {
    return super.deploy(
      stateSender_,
      potato_,
      rootChainManager_,
      erc20Predicate_,
      childPotatoMigrator_,
      overrides || {}
    ) as Promise<RootPotatoMigrator>;
  }
  getDeployTransaction(
    stateSender_: string,
    potato_: string,
    rootChainManager_: string,
    erc20Predicate_: string,
    childPotatoMigrator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      stateSender_,
      potato_,
      rootChainManager_,
      erc20Predicate_,
      childPotatoMigrator_,
      overrides || {}
    );
  }
  attach(address: string): RootPotatoMigrator {
    return super.attach(address) as RootPotatoMigrator;
  }
  connect(signer: Signer): RootPotatoMigrator__factory {
    return super.connect(signer) as RootPotatoMigrator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RootPotatoMigrator {
    return new Contract(address, _abi, signerOrProvider) as RootPotatoMigrator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "stateSender_",
        type: "address",
      },
      {
        internalType: "address",
        name: "potato_",
        type: "address",
      },
      {
        internalType: "address",
        name: "rootChainManager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "erc20Predicate_",
        type: "address",
      },
      {
        internalType: "address",
        name: "childPotatoMigrator_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "plantOnChildFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610441380380610441833981810160405260a081101561003357600080fd5b508051602082015160408301516060840151608090940151600080546001600160a01b039586166001600160a01b03199182161790915560018054948616948216949094179093556002805492851692841692909217909155600380549484169483169490941790935560048054929093169116179055610388806100b96000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a3d7c45814610030575b600080fd5b61004d6004803603602081101561004657600080fd5b503561004f565b005b600154604080516323b872dd60e01b81523360048201523060248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b1580156100a957600080fd5b505af11580156100bd573d6000803e3d6000fd5b505050506040513d60208110156100d357600080fd5b50506001546003546040805163095ea7b360e01b81526001600160a01b039283166004820152602481018590529051919092169163095ea7b39160448083019260209291908290030181600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b505050506040513d602081101561015857600080fd5b50506002546004546001546040805160208181018790528251808303820181528284019384905263e3dec8fb60e01b9093526001600160a01b039485166044830181815294861660648401819052606060848501908152855160a48601528551979098169763e3dec8fb9792969195949193909260c4909201919085019080838360005b838110156101f45781810151838201526020016101dc565b50505050905090810190601f1680156102215780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561024257600080fd5b505af1158015610256573d6000803e3d6000fd5b5050600080546004546040805133602080830191909152818301899052825180830384018152606083018085526316f1983160e01b90526001600160a01b039485166064840181815260848501958652825160a486015282519690971699506316f1983198509690959460c49093019291860191908190849084905b838110156102ea5781810151838201526020016102d2565b50505050905090810190601f1680156103175780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b15801561033757600080fd5b505af115801561034b573d6000803e3d6000fd5b505050505056fea2646970667358221220ec31ff7a94187e645d55de63e638bd66a68f1ff84d79aa2411488cbb02df601364736f6c63430006060033";
