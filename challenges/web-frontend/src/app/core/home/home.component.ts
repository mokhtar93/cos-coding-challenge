import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionsService } from '../services/auctions/auctions.service';
import {Auction} from '../../shared/models/auction.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    
  auctions : Auction[];
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private auctionsService : AuctionsService
) { 
    // redirect to home if already logged in
   
}
  ngOnInit(): void {
    this.fetch();
  }
  
  fetch() {
    this.auctionsService.getAuctions().subscribe(
      data => {
          this.auctions = data;
      }
    );
  }



  ngOnDestroy(){

  }

}


