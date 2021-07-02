import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Auth } from '../../shared/models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Auth>;
    public loggedInUser: Observable<Auth>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('currentUser') ));
        this.loggedInUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Auth {
        return this.currentUserSubject.value;
    }

    login(userMailId: string, password: string) {
        return this.http.put<any>(`${environment.apiUrl}/v1/authentication/${userMailId}`, {  password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if(user && user.token){
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        
    }
}