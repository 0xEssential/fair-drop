/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface RootChainManagerStorageInterface extends ethers.utils.Interface {
  functions: {
    "childChainManagerAddress()": FunctionFragment;
    "childToRootToken(address)": FunctionFragment;
    "processedExits(bytes32)": FunctionFragment;
    "rootToChildToken(address)": FunctionFragment;
    "tokenToType(address)": FunctionFragment;
    "typeToPredicate(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "childChainManagerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "childToRootToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "processedExits",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rootToChildToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tokenToType", values: [string]): string;
  encodeFunctionData(
    functionFragment: "typeToPredicate",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "childChainManagerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "childToRootToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processedExits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rootToChildToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "typeToPredicate",
    data: BytesLike
  ): Result;

  events: {};
}

export class RootChainManagerStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RootChainManagerStorageInterface;

  functions: {
    childChainManagerAddress(overrides?: CallOverrides): Promise<[string]>;

    "childChainManagerAddress()"(overrides?: CallOverrides): Promise<[string]>;

    childToRootToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "childToRootToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rootToChildToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "rootToChildToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenToType(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "tokenToType(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    typeToPredicate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "typeToPredicate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  childChainManagerAddress(overrides?: CallOverrides): Promise<string>;

  "childChainManagerAddress()"(overrides?: CallOverrides): Promise<string>;

  childToRootToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  "childToRootToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  processedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "processedExits(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  rootToChildToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  "rootToChildToken(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenToType(arg0: string, overrides?: CallOverrides): Promise<string>;

  "tokenToType(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  typeToPredicate(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "typeToPredicate(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    childChainManagerAddress(overrides?: CallOverrides): Promise<string>;

    "childChainManagerAddress()"(overrides?: CallOverrides): Promise<string>;

    childToRootToken(arg0: string, overrides?: CallOverrides): Promise<string>;

    "childToRootToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rootToChildToken(arg0: string, overrides?: CallOverrides): Promise<string>;

    "rootToChildToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenToType(arg0: string, overrides?: CallOverrides): Promise<string>;

    "tokenToType(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    typeToPredicate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "typeToPredicate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    childChainManagerAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "childChainManagerAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    childToRootToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "childToRootToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rootToChildToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rootToChildToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToType(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "tokenToType(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    typeToPredicate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "typeToPredicate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    childChainManagerAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "childChainManagerAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    childToRootToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "childToRootToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rootToChildToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rootToChildToken(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenToType(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenToType(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    typeToPredicate(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "typeToPredicate(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
