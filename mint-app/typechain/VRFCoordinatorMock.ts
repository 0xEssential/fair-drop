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

export interface VRFCoordinatorMockInterface extends ethers.utils.Interface {
  functions: {
    "LINK()": FunctionFragment;
    "callBackWithRandomness(bytes32,uint256,address)": FunctionFragment;
    "onTokenTransfer(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "LINK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "callBackWithRandomness",
    values: [BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onTokenTransfer",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "LINK", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callBackWithRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onTokenTransfer",
    data: BytesLike
  ): Result;

  events: {
    "RandomnessRequest(address,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RandomnessRequest"): EventFragment;
}

export type RandomnessRequestEvent = TypedEvent<
  [string, string, BigNumber],
  { sender: string; keyHash: string; seed: BigNumber }
>;

export type RandomnessRequestEventFilter =
  TypedEventFilter<RandomnessRequestEvent>;

export interface VRFCoordinatorMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRFCoordinatorMockInterface;

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
    LINK(overrides?: CallOverrides): Promise<[string]>;

    callBackWithRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      consumerContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onTokenTransfer(
      sender: string,
      fee: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  LINK(overrides?: CallOverrides): Promise<string>;

  callBackWithRandomness(
    requestId: BytesLike,
    randomness: BigNumberish,
    consumerContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onTokenTransfer(
    sender: string,
    fee: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LINK(overrides?: CallOverrides): Promise<string>;

    callBackWithRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      consumerContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    onTokenTransfer(
      sender: string,
      fee: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RandomnessRequest(address,bytes32,uint256)"(
      sender?: string | null,
      keyHash?: BytesLike | null,
      seed?: BigNumberish | null
    ): RandomnessRequestEventFilter;
    RandomnessRequest(
      sender?: string | null,
      keyHash?: BytesLike | null,
      seed?: BigNumberish | null
    ): RandomnessRequestEventFilter;
  };

  estimateGas: {
    LINK(overrides?: CallOverrides): Promise<BigNumber>;

    callBackWithRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      consumerContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onTokenTransfer(
      sender: string,
      fee: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LINK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callBackWithRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      consumerContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onTokenTransfer(
      sender: string,
      fee: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
