
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { ListRequest } from '../models/Common/listrequest.model';
import { Circle } from '../models/Common/circle.model';


@Injectable({
  providedIn: 'root'
})
export class CircleService {
  url:string="/api_Circle";
  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "CIRCLE";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getCircleAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}
  getCircles() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     getCircleById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postCircles(obj :Circle) {
      obj.createdByUserId=1;
      alert(obj.createdByUserId)
       return this.httphelper.POST(this.url,obj);
     }
     putCircles(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteCircle(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
