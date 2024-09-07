import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListRequest } from '../models/Common/listrequest.model';
import { HttpHelperService } from './Common/http-helper.service';
import { map } from 'rxjs/operators';
import { news } from '../models/Common/news.model';
import { observable, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url: string = "/api_newsitem";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "NEWSITEMS";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getNewsAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}

getNews(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {



  return this.httphelper.GetData(this.url)

}

postNews(obj: news) {
  obj.createdByUserId=1;
  return this.httphelper.POST(this.url, obj);
}
putNews(id: number, obj: any) {
  return this.httphelper.PUT(this.url + "/" + id, obj);
}
deleteItem(id: number) {
  return this.httphelper.Delete(this.url + "/" + id);
}
getNewsById(Id: number) {
  return this.httphelper.GetData(this.url + "/" + Id);
  // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []
  

}
}