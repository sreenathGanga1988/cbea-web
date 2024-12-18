import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomApiResponse } from '../../models/Common/custom-api-responseo.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

 BaseUrl: String = environment.BaseUrl;


  header: HttpHeaders;
  constructor(private httpclient: HttpClient) {
    this.header = new HttpHeaders("sdfkjsdhfkj");
    this.header.append('Content-Type', 'applications/json');
  }

  GetData(url: string): Observable<CustomApiResponse> {
    return this.httpclient.get<CustomApiResponse>(this.BaseUrl + url, { headers: this.header });
    // return  this.httpclient.get<CustomApiResponse>(this.BaseUrl+url);
  }
  GetDataWithObject(url: string, ReportType:string,SearchText :string, PageSize:number, PageNumber : number): Observable<CustomApiResponse> {

    const _params = new HttpParams()
      .set('ReportType', ReportType)
      .set('SearchText', SearchText)
      .set('PageSize', PageSize)
      .set('PageNumber', PageNumber);
    return this.httpclient.get<CustomApiResponse>(this.BaseUrl + url, { headers: this.header ,params:_params});


    // return  this.httpclient.get<CustomApiResponse>(this.BaseUrl+url);
  }

  GetDataWithSelectedObject(url: string, ReportType:string,SearchText :string, PageSize:number, PageNumber : number,SelectedItems :string): Observable<CustomApiResponse> {

    const _params = new HttpParams()
      .set('listType', ReportType)
      .set('SearchTerm', SearchText)
      .set('PageSize', PageSize)
      .set('PageNumber', PageNumber)
      .set('SelectedItems', SelectedItems);
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
