import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomApiResponse } from '../../models/Common/custom-api-responseo.model';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
   BaseUrl: String = "https://www.cbeugjfws.co.in/api";
  //BaseUrl: String = "  https://localhost:7157/api";

  header: HttpHeaders;
  constructor(private httpclient: HttpClient) {
    this.header = new HttpHeaders("sdfkjsdhfkj");
    this.header.append('Content-Type', 'applications/json');
  }

  GetData(url: string): Observable<CustomApiResponse> {
    return this.httpclient.get<CustomApiResponse>(this.BaseUrl + url, { headers: this.header });
    // return  this.httpclient.get<CustomApiResponse>(this.BaseUrl+url);
  }
  GetDataWithObject(url: string, _params: any): Observable<CustomApiResponse> {
    // const data = {
    //   "ReportType": "CATEGORY",
    //   "SearchText": "",
    //   "PageSize": 0,
    //   "PageNumber": 0
    // };

   // return this.http.get(url, { headers: headers, params: params });

    const params = new HttpParams()
      .set('ReportType', 'CATEGORY')
      .set('SearchText', '')
      .set('PageSize', '0')
      .set('PageNumber', '0');
    return this.httpclient.get<CustomApiResponse>(this.BaseUrl + url, { headers: this.header ,params:_params});


    // return  this.httpclient.get<CustomApiResponse>(this.BaseUrl+url);
  }
  POST(url: string, params: any): Observable<CustomApiResponse> {
    return this.httpclient.post<CustomApiResponse>(this.BaseUrl + url, params, { headers: this.header });
  }
  PUT(url: string, params: any): Observable<CustomApiResponse> {
    return this.httpclient.put<CustomApiResponse>(this.BaseUrl + url, params, { headers: this.header });
  }

  Delete(url: string): Observable<CustomApiResponse> {
    return this.httpclient.delete<CustomApiResponse> (this.BaseUrl + url,{ headers: this.header })

  }
}
