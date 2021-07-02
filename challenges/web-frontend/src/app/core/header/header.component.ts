import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedinUser:boolean = false;
  constructor(private authenticationService : AuthenticationService ) { }

  ngOnInit(): void {
    this.authenticationService.loggedInUser.subscribe(
      (loggedin) => {
        
          loggedin? this.loggedinUser = true: this.loggedinUser = false;
      }
    )
  }

  logout(){
    this.authenticationService.logout();
    location.reload();
  }

}
