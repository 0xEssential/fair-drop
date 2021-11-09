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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ITokenPredicateInterface extends ethers.utils.Interface {
  functions: {
    "exitTokens(address,address,bytes)": FunctionFragment;
    "lockTokens(address,address,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exitTokens",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lockTokens",
    values: [string, string, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "exitTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;

  events: {};
}

export class ITokenPredicate extends Contract {
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

  interface: ITokenPredicateInterface;

  functions: {
    exitTokens(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exitTokens(address,address,bytes)"(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockTokens(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "lockTokens(address,address,address,bytes)"(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  exitTokens(
    sender: string,
    rootToken: string,
    logRLPList: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exitTokens(address,address,bytes)"(
    sender: string,
    rootToken: string,
    logRLPList: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockTokens(
    depositor: string,
    depositReceiver: string,
    rootToken: string,
    depositData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "lockTokens(address,address,address,bytes)"(
    depositor: string,
    depositReceiver: string,
    rootToken: string,
    depositData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exitTokens(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "exitTokens(address,address,bytes)"(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    lockTokens(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "lockTokens(address,address,address,bytes)"(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    exitTokens(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exitTokens(address,address,bytes)"(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockTokens(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "lockTokens(address,address,address,bytes)"(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exitTokens(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exitTokens(address,address,bytes)"(
      sender: string,
      rootToken: string,
      logRLPList: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockTokens(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "lockTokens(address,address,address,bytes)"(
      depositor: string,
      depositReceiver: string,
      rootToken: string,
      depositData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
