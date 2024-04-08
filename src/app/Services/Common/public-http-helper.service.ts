import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../Custom Modules/public-area/Models/loginresponse.model';
@Injectable({
  providedIn: 'root'
})
export class PublicHttpHelperService {

  BaseUrl:String="https://www.cbeugjfws.co.in/api";
  constructor( private httpclient :HttpClient) {
   }

   GetData(url:string) : Observable<any>{
    return  this.httpclient.get<any>(this.BaseUrl+url);
   }
   Login(obj :any ) {
            return this.httpclient.post<LoginResponse>(this.BaseUrl+'/Security',obj);
}

  }

  
