
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListRequest } from '../models/Common/listrequest.model';
import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { UserType } from '../models/Common/userType.model';



@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  url:string="/api_Usertype";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "Usertype";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getUserTypeAsync (searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
  }

  getUserTypes() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
    postUserTypes(obj :UserType) {
      obj.createdByUserId=1;
       return this.httphelper.POST(this.url,obj);
     }
     putUserTypes(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteItem(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }
    getUserTypeById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
}
