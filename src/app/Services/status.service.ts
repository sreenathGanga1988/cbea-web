
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { ListRequest } from '../models/Common/listrequest.model';
import { Status } from '../models/Common/status.model';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  url: string = "/api_Status";
  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "STATUS";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getstatusAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}

getStatus(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {



  return this.httphelper.GetData(this.url)

}

postStatus(obj:Status) {
  obj.createdByUserId=2;


  return this.httphelper.POST(this.url,obj);
 }
 getStatusById(Id :number) {
  return this.httphelper.GetData(this.url+"/"+Id);
 // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
   }
   putStatus(id:number,obj :any) {
    return this.httphelper.PUT(this.url+"/"+id,obj);
  }
  deleteStatus(id:number) {
    return this.httphelper.Delete(this.url+"/"+id);
  }
}
