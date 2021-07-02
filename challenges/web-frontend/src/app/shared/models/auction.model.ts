import { Injectable } from "@angular/core";
import { Adapter } from "../../core/adapter/adapter";
type AssociatedVehicle = {
  mileageInKm: string,
  make: string,
  fuelType: number,
  transmission: number,
  vehicleImages : [
    {
      url : string
    }
  ]
  ez : number
}
export class Auction {
  constructor(
    public id: number,
    public label: string,
    public endingTime: Date,
    public minimumRequiredAsk: number,
    public numBids: number,
    public amIHighestBidder: boolean,
    public currentHighestBidValue: number,
    public remainingTimeInSeconds : number,
    public associatedVehicle: AssociatedVehicle
  ) { }
}



@Injectable({
  providedIn: "root",
})
export class AuctionAdapter implements Adapter<Auction> {
  adapt(item: any): Auction {
    return new Auction(item.id, item.label, new Date(item.endingTime), item.minimumRequiredAsk, item.numBids, item.amIHighestBidder,
      item.currentHighestBidValue, item.remainingTimeInSeconds, item.associatedVehicle);
  }
}