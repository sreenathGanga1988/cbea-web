import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicHttpHelperService {
  BaseUrl: String = environment.BaseUrl;

  constructor( private httpclient :HttpClient) {
   }

   GetData(url:string) : Observable<any>{
    return  this.httpclient.get<any>(this.BaseUrl+url);
   }
   Login(obj :any ) {
            return this.httpclient.post<any>(this.BaseUrl+'/Api_Security/login',obj);
}

  }


