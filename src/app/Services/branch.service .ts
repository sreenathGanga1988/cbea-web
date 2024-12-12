
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { Branch } from '../models/Common/branch.model';
import { ListRequest } from '../models/Common/listrequest.model';


@Injectable({
  providedIn: 'root'
})
export class BranchService {
  url: string = "/api_Branch";
  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "BRANCH";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }

  getBranchAsync(searchtext: string, pageNumber: number=0, pageSize: number=0) {
  
   return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
  }
  getBranch(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {
    return this.httphelper.GetData(this.url);
    
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
  getBranchById(id: number) {
    return this.httphelper.GetData(this.url + "/" + id);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
  postBranch(obj: any) {
    obj.createdByUserId=1;
      
    return this.httphelper.POST(this.url, obj);
  }
  putBranch(id: number, obj: any) {
    return this.httphelper.PUT(this.url + "/" + id, obj);
  
  }
  deleteBranch(id: number) {
    return this.httphelper.Delete(this.url + "/" + id);
  }

}
