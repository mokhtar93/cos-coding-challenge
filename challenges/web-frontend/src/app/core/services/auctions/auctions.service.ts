import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auction, AuctionAdapter } from "../../../shared/models/auction.model";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private http: HttpClient, private adapter: AuctionAdapter ) { }

  public getAuctions(): Observable<Auction[]>  {
    return timer(0, 20 * 90000).pipe(
        mergeMap(() => {
             return this.http.get<any>(`${environment.apiUrl}/v2/auction/buyer/?count=false`).pipe(
                       map((data) => data.items.map((item:any) => this.adapter.adapt(item)))

             )
             ;}
    ));
  }
}
