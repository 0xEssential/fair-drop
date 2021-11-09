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

interface WrassleableInterface extends ethers.utils.Interface {
  functions: {
    "wrasslers(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "wrasslers",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "wrasslers", data: BytesLike): Result;

  events: {};
}

export class Wrassleable extends Contract {
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

  interface: WrassleableInterface;

  functions: {
    wrasslers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: string;
        identifier: string;
        symbol: string;
        name: string;
        attack: BigNumber;
        defense: BigNumber;
        strength: BigNumber;
        agility: BigNumber;
        creativity: BigNumber;
      }
    >;

    "wrasslers(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: string;
        identifier: string;
        symbol: string;
        name: string;
        attack: BigNumber;
        defense: BigNumber;
        strength: BigNumber;
        agility: BigNumber;
        creativity: BigNumber;
      }
    >;
  };

  wrasslers(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: string;
      identifier: string;
      symbol: string;
      name: string;
      attack: BigNumber;
      defense: BigNumber;
      strength: BigNumber;
      agility: BigNumber;
      creativity: BigNumber;
    }
  >;

  "wrasslers(bytes)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: string;
      identifier: string;
      symbol: string;
      name: string;
      attack: BigNumber;
      defense: BigNumber;
      strength: BigNumber;
      agility: BigNumber;
      creativity: BigNumber;
    }
  >;

  callStatic: {
    wrasslers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: string;
        identifier: string;
        symbol: string;
        name: string;
        attack: BigNumber;
        defense: BigNumber;
        strength: BigNumber;
        agility: BigNumber;
        creativity: BigNumber;
      }
    >;

    "wrasslers(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: string;
        identifier: string;
        symbol: string;
        name: string;
        attack: BigNumber;
        defense: BigNumber;
        strength: BigNumber;
        agility: BigNumber;
        creativity: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    wrasslers(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "wrasslers(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    wrasslers(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "wrasslers(bytes)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}