import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  BorrowedTicket,
  ClaimedReward,
  Initialized,
  JoinedLottery,
  OwnershipTransferred,
  StartedLottery,
  Upgraded,
  WinnerSelected
} from "../generated/Lottery/Lottery"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createBorrowedTicketEvent(
  borrower: Address,
  tokenId: BigInt,
  wrappedTokenId: BigInt
): BorrowedTicket {
  let borrowedTicketEvent = changetype<BorrowedTicket>(newMockEvent())

  borrowedTicketEvent.parameters = new Array()

  borrowedTicketEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  borrowedTicketEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  borrowedTicketEvent.parameters.push(
    new ethereum.EventParam(
      "wrappedTokenId",
      ethereum.Value.fromUnsignedBigInt(wrappedTokenId)
    )
  )

  return borrowedTicketEvent
}

export function createClaimedRewardEvent(amount: BigInt): ClaimedReward {
  let claimedRewardEvent = changetype<ClaimedReward>(newMockEvent())

  claimedRewardEvent.parameters = new Array()

  claimedRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimedRewardEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createJoinedLotteryEvent(
  tokenId: BigInt,
  buyer: Address,
  amount: BigInt
): JoinedLottery {
  let joinedLotteryEvent = changetype<JoinedLottery>(newMockEvent())

  joinedLotteryEvent.parameters = new Array()

  joinedLotteryEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  joinedLotteryEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  joinedLotteryEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return joinedLotteryEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createStartedLotteryEvent(timestamp: BigInt): StartedLottery {
  let startedLotteryEvent = changetype<StartedLottery>(newMockEvent())

  startedLotteryEvent.parameters = new Array()

  startedLotteryEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return startedLotteryEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createWinnerSelectedEvent(
  winners: Array<Address>
): WinnerSelected {
  let winnerSelectedEvent = changetype<WinnerSelected>(newMockEvent())

  winnerSelectedEvent.parameters = new Array()

  winnerSelectedEvent.parameters.push(
    new ethereum.EventParam("winners", ethereum.Value.fromAddressArray(winners))
  )

  return winnerSelectedEvent
}
