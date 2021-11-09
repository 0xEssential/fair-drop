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

interface CryptOrchidRootTunnelInterface extends ethers.utils.Interface {
  functions: {
    "CryptOrchidERC721()": FunctionFragment;
    "SEND_MESSAGE_EVENT_SIG()": FunctionFragment;
    "checkpointManager()": FunctionFragment;
    "fxChildTunnel()": FunctionFragment;
    "fxRoot()": FunctionFragment;
    "latestData()": FunctionFragment;
    "processedExits(bytes32)": FunctionFragment;
    "receiveMessage(bytes)": FunctionFragment;
    "sendMessageToChild(uint256)": FunctionFragment;
    "setFxChildTunnel(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CryptOrchidERC721",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpointManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fxChildTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fxRoot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "latestData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processedExits",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessageToChild",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxChildTunnel",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "CryptOrchidERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpointManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fxChildTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fxRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "latestData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processedExits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessageToChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxChildTunnel",
    data: BytesLike
  ): Result;

  events: {};
}

export class CryptOrchidRootTunnel extends Contract {
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

  interface: CryptOrchidRootTunnelInterface;

  functions: {
    CryptOrchidERC721(overrides?: CallOverrides): Promise<[string]>;

    "CryptOrchidERC721()"(overrides?: CallOverrides): Promise<[string]>;

    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;

    "SEND_MESSAGE_EVENT_SIG()"(overrides?: CallOverrides): Promise<[string]>;

    checkpointManager(overrides?: CallOverrides): Promise<[string]>;

    "checkpointManager()"(overrides?: CallOverrides): Promise<[string]>;

    fxChildTunnel(overrides?: CallOverrides): Promise<[string]>;

    "fxChildTunnel()"(overrides?: CallOverrides): Promise<[string]>;

    fxRoot(overrides?: CallOverrides): Promise<[string]>;

    "fxRoot()"(overrides?: CallOverrides): Promise<[string]>;

    latestData(overrides?: CallOverrides): Promise<[string]>;

    "latestData()"(overrides?: CallOverrides): Promise<[string]>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "receiveMessage(bytes)"(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessageToChild(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sendMessageToChild(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFxChildTunnel(address)"(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CryptOrchidERC721(overrides?: CallOverrides): Promise<string>;

  "CryptOrchidERC721()"(overrides?: CallOverrides): Promise<string>;

  SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

  "SEND_MESSAGE_EVENT_SIG()"(overrides?: CallOverrides): Promise<string>;

  checkpointManager(overrides?: CallOverrides): Promise<string>;

  "checkpointManager()"(overrides?: CallOverrides): Promise<string>;

  fxChildTunnel(overrides?: CallOverrides): Promise<string>;

  "fxChildTunnel()"(overrides?: CallOverrides): Promise<string>;

  fxRoot(overrides?: CallOverrides): Promise<string>;

  "fxRoot()"(overrides?: CallOverrides): Promise<string>;

  latestData(overrides?: CallOverrides): Promise<string>;

  "latestData()"(overrides?: CallOverrides): Promise<string>;

  processedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "processedExits(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  receiveMessage(
    inputData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "receiveMessage(bytes)"(
    inputData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessageToChild(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sendMessageToChild(uint256)"(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFxChildTunnel(
    _fxChildTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFxChildTunnel(address)"(
    _fxChildTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CryptOrchidERC721(overrides?: CallOverrides): Promise<string>;

    "CryptOrchidERC721()"(overrides?: CallOverrides): Promise<string>;

    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

    "SEND_MESSAGE_EVENT_SIG()"(overrides?: CallOverrides): Promise<string>;

    checkpointManager(overrides?: CallOverrides): Promise<string>;

    "checkpointManager()"(overrides?: CallOverrides): Promise<string>;

    fxChildTunnel(overrides?: CallOverrides): Promise<string>;

    "fxChildTunnel()"(overrides?: CallOverrides): Promise<string>;

    fxRoot(overrides?: CallOverrides): Promise<string>;

    "fxRoot()"(overrides?: CallOverrides): Promise<string>;

    latestData(overrides?: CallOverrides): Promise<string>;

    "latestData()"(overrides?: CallOverrides): Promise<string>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveMessage(bytes)"(
      inputData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessageToChild(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendMessageToChild(uint256)"(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFxChildTunnel(address)"(
      _fxChildTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    CryptOrchidERC721(overrides?: CallOverrides): Promise<BigNumber>;

    "CryptOrchidERC721()"(overrides?: CallOverrides): Promise<BigNumber>;

    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    "SEND_MESSAGE_EVENT_SIG()"(overrides?: CallOverrides): Promise<BigNumber>;

    checkpointManager(overrides?: CallOverrides): Promise<BigNumber>;

    "checkpointManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    fxChildTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    "fxChildTunnel()"(overrides?: CallOverrides): Promise<BigNumber>;

    fxRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "fxRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestData(overrides?: CallOverrides): Promise<BigNumber>;

    "latestData()"(overrides?: CallOverrides): Promise<BigNumber>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "receiveMessage(bytes)"(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessageToChild(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sendMessageToChild(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFxChildTunnel(address)"(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CryptOrchidERC721(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CryptOrchidERC721()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SEND_MESSAGE_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "SEND_MESSAGE_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkpointManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "checkpointManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fxChildTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fxChildTunnel()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fxRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "latestData()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "processedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "receiveMessage(bytes)"(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessageToChild(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sendMessageToChild(uint256)"(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFxChildTunnel(address)"(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}