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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface FxBaseChildTunnelInterface extends ethers.utils.Interface {
  functions: {
    "fxChild()": FunctionFragment;
    "fxRootTunnel()": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "setFxRootTunnel(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fxRootTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxRootTunnel",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxRootTunnel",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
}

export type MessageSentEvent = TypedEvent<[string], { message: string }>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface FxBaseChildTunnel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FxBaseChildTunnelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    fxChild(overrides?: CallOverrides): Promise<[string]>;

    fxRootTunnel(overrides?: CallOverrides): Promise<[string]>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  fxChild(overrides?: CallOverrides): Promise<string>;

  fxRootTunnel(overrides?: CallOverrides): Promise<string>;

  processMessageFromRoot(
    stateId: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFxRootTunnel(
    _fxRootTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fxChild(overrides?: CallOverrides): Promise<string>;

    fxRootTunnel(overrides?: CallOverrides): Promise<string>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageSent(bytes)"(message?: null): MessageSentEventFilter;
    MessageSent(message?: null): MessageSentEventFilter;
  };

  estimateGas: {
    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    fxRootTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRootTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
