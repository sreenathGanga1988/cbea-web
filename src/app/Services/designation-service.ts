import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { ListRequest } from '../models/Common/listrequest.model';
import { Designation } from '../models/Common/designation-model';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  url:string="/api_Designation";
  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "Designation";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }

  getdesignationAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
  }
 
  getDesignations(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetData(this.url);
   
     }
     getDesignationById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postDesignations(obj :Designation) {
      obj.createdByUserId=1;
       return this.httphelper.POST(this.url,obj);
     }
     putDesignations(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteDesignaton(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
