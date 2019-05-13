import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface ServerResponse {
  success: boolean;
  msg: string;
  token: any;
  user: any;
}

// const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user): Observable<ServerResponse>{
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>('users/register', user,{headers: headers})
      .pipe(map(res => res));

  }

  authenticateUser(user){
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    // console.log(helper.isTokenExpired(localStorage.id_token));
    return this.http.post<ServerResponse>('users/authenticate', user,{headers: headers})
      .pipe(map(res => res));
  }

  getProfile(){
    let headers = new HttpHeaders;
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get<ServerResponse>('users/profile', {headers: headers})
      .pipe(map(res => res));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    if(localStorage.id_token == undefined){
      return false;
    } else {
      const helper = new JwtHelperService();
      // console.log(helper.isTokenExpired(localStorage.id_token));
      return !helper.isTokenExpired(localStorage.id_token);
    }

  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
