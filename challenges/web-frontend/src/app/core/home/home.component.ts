import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionsService } from '../services/auctions/auctions.service';
import {Auction} from '../../shared/models/auction.model';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    
  auctions : Auction[];
  subscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private auctionsService : AuctionsService
) { }
  ngOnInit(): void {
    this.fetch();
  }
  
  fetch() {
    this.subscription = timer(0, 20 * 1000).pipe(
      switchMap(() => this.auctionsService.getAuctions())
    ).subscribe(data => this.auctions = data);
  }



  ngOnDestroy(){
      this.subscription.unsubscribe();
  }

}


