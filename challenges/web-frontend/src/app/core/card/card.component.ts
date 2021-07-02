import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Auction} from '../../shared/models/auction.model'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() auction: Auction;
  countdownTimer: any;
  constructor() { }

  ngOnInit(): void {
    this.countDown();
  }
  countDown(){
      this.countdownTimer = setInterval(()=>{
      this.auction.remainingTimeInSeconds--;
  }, 1000)
}
ngOnDestroy() {
  clearInterval(this.countdownTimer);
}
}
