import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';

import { ListRequest } from '../../models/Common/listrequest.model';
import { HttpHelperService } from './http-helper.service';
import { Deathclaim } from '../../models/Common/deathclaim.model';


@Injectable({
  providedIn: 'root'
})
export class DeathclaimService {
  url: string = "/api_deathclaim";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "DEATHCLAIM";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getClaimAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}

getClaim(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {



  return this.httphelper.GetData(this.url)

}

postclaim(obj: Deathclaim) {
  obj.createdByUserId=1;
  return this.httphelper.POST(this.url, obj);
}
putclaim(id: number, obj: any) {
  return this.httphelper.PUT(this.url + "/" + id, obj);
}
deleteItem(id: number) {
  return this.httphelper.Delete(this.url + "/" + id);
}
getClaimById(Id: number) {
  return this.httphelper.GetData(this.url + "/" + Id);
  // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
}

}