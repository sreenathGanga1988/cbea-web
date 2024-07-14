import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListRequest } from '../models/Common/listrequest.model';
import { HttpHelperService } from './Common/http-helper.service';
import { Quotes } from '../models/Common/quotes.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DayquotesService {
  url: string = "/api_dayquote";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "DAYQUOTE";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getQuoteAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
  }
  getquotes(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
 return this.httphelper.GetData(this.url)

  }
  postQuotes(obj: Quotes) {
    obj.createdByUserId=1;
    return this.httphelper.POST(this.url, obj);
  }

  putQuotes(id: number, obj: any) {
    return this.httphelper.PUT(this.url + "/" + id, obj);
  }
  deleteQuote(id: number) {
    return this.httphelper.Delete(this.url + "/" + id);
  }
  getQuotessById(Id: number) {
    return this.httphelper.GetData(this.url + "/" + Id);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
}
