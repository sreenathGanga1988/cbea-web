
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListRequest } from '../models/Common/listrequest.model';
import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';

import { identifierName } from '@angular/compiler';
import { State } from '../models/Common/state.model';



@Injectable({
  providedIn: 'root'
})
export class StateService {
 
  url:string="/api_State";
  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "STATE";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }

  getCategoriesAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
  }
  



  getStates(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     
    postStates(obj:State) {
      obj.createdByUserId=1;
      return this.httphelper.POST(this.url,obj);
     }
     putStates(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteState(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }
    getStateById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    

}
