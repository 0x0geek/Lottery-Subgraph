import {
  WinnerSelected as WinnerSelectedEvent
} from "../generated/Lottery/Lottery"
import {
  WinnerSelected
} from "../generated/schema"
import { Value } from "@graphprotocol/graph-ts";

export function handleWinnerSelected(event: WinnerSelectedEvent): void {
  let entity = new WinnerSelected(
    event.transaction.from.toHex()
  )
  entity.winners = Value.fromAddressArray(event.params.winners).toBytesArray();

  entity.save()
}
