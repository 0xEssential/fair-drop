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

interface TestChildTunnelInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "STATE_SYNCER_ROLE()": FunctionFragment;
    "TYPE1()": FunctionFragment;
    "TYPE2()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "number()": FunctionFragment;
    "onStateReceive(uint256,bytes)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "sendMessage(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STATE_SYNCER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TYPE1", values?: undefined): string;
  encodeFunctionData(functionFragment: "TYPE2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "number", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onStateReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STATE_SYNCER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TYPE1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TYPE2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onStateReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export class TestChildTunnel extends Contract {
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

  interface: TestChildTunnelInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    STATE_SYNCER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    "STATE_SYNCER_ROLE()"(overrides?: CallOverrides): Promise<[string]>;

    TYPE1(overrides?: CallOverrides): Promise<[string]>;

    "TYPE1()"(overrides?: CallOverrides): Promise<[string]>;

    TYPE2(overrides?: CallOverrides): Promise<[string]>;

    "TYPE2()"(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    number(overrides?: CallOverrides): Promise<[BigNumber]>;

    "number()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    onStateReceive(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onStateReceive(uint256,bytes)"(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendMessage(
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "sendMessage(bytes)"(
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

  STATE_SYNCER_ROLE(overrides?: CallOverrides): Promise<string>;

  "STATE_SYNCER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  TYPE1(overrides?: CallOverrides): Promise<string>;

  "TYPE1()"(overrides?: CallOverrides): Promise<string>;

  TYPE2(overrides?: CallOverrides): Promise<string>;

  "TYPE2()"(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getRoleAdmin(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRoleMember(bytes32,uint256)"(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRoleMemberCount(bytes32)"(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "grantRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  number(overrides?: CallOverrides): Promise<BigNumber>;

  "number()"(overrides?: CallOverrides): Promise<BigNumber>;

  onStateReceive(
    arg0: BigNumberish,
    message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onStateReceive(uint256,bytes)"(
    arg0: BigNumberish,
    message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "revokeRole(bytes32,address)"(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendMessage(
    message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "sendMessage(bytes)"(
    message: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<string>;

    STATE_SYNCER_ROLE(overrides?: CallOverrides): Promise<string>;

    "STATE_SYNCER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    TYPE1(overrides?: CallOverrides): Promise<string>;

    "TYPE1()"(overrides?: CallOverrides): Promise<string>;

    TYPE2(overrides?: CallOverrides): Promise<string>;

    "TYPE2()"(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    "number()"(overrides?: CallOverrides): Promise<BigNumber>;

    onStateReceive(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "onStateReceive(uint256,bytes)"(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessage(message: BytesLike, overrides?: CallOverrides): Promise<void>;

    "sendMessage(bytes)"(
      message: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    MessageSent(message: null): TypedEventFilter<[string], { message: string }>;

    RoleAdminChanged(
      role: BytesLike | null,
      previousAdminRole: BytesLike | null,
      newAdminRole: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleGranted(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role: BytesLike | null,
      account: string | null,
      sender: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "DEFAULT_ADMIN_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    STATE_SYNCER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "STATE_SYNCER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    TYPE1(overrides?: CallOverrides): Promise<BigNumber>;

    "TYPE1()"(overrides?: CallOverrides): Promise<BigNumber>;

    TYPE2(overrides?: CallOverrides): Promise<BigNumber>;

    "TYPE2()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    "number()"(overrides?: CallOverrides): Promise<BigNumber>;

    onStateReceive(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onStateReceive(uint256,bytes)"(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendMessage(
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "sendMessage(bytes)"(
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DEFAULT_ADMIN_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    STATE_SYNCER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "STATE_SYNCER_ROLE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TYPE1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TYPE1()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TYPE2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TYPE2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleAdmin(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMember(bytes32,uint256)"(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoleMemberCount(bytes32)"(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "grantRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    number(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "number()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onStateReceive(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onStateReceive(uint256,bytes)"(
      arg0: BigNumberish,
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "revokeRole(bytes32,address)"(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendMessage(
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "sendMessage(bytes)"(
      message: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
