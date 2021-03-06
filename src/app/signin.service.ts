import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Signin } from './signin';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SigninService {
  auth_token: any;
  userid:"";
  
  _url='https://git.heroku.com/enigmatic-bayou-20651.git/user/login';
  constructor(private http:HttpClient) { }
  
  Check(signin: Signin)
  {
    console.log(this._url);
    
   return this.http.post<any>(this._url, signin)
   .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error);
  }
  storeUserData(token)
  {
    localStorage.setItem('token', token);
    this.auth_token = token;
  }
  Logout()
  {
    this.auth_token = null;
    localStorage.clear();
  }
}
