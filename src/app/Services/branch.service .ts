
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

  getBranchAsync(searchtext:string,pageNo:number,pageSize:number) {
   //let asyncurl=this.url+"/BranchGetPaginatedData/"+ pageNo.toString()+"/"+ pageSize.toString();
   // return this.httphelper.GetData(asyncurl);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
   return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNo).pipe(map((val) => val.isSucess ? val.value : []));
  }
  getBranch() {
    return this.httphelper.GetData(this.url);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
  getBranchById(Id: number) {
    return this.httphelper.GetData(this.url + "/" + Id);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
  postBranch(obj: any) {
    return this.httphelper.POST(this.url, obj);
  }
  putBranch(id: number, obj: any) {
    return this.httphelper.PUT(this.url + "/" + id, obj);
  }
  deleteBranch(id: number) {
    return this.httphelper.Delete(this.url + "/" + id);
  }

}
