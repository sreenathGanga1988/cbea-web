import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListRequest } from '../models/Common/listrequest.model';
import { HttpHelperService } from './Common/http-helper.service';
import { map } from 'rxjs';
import { Refund } from '../models/Common/refund.model';

@Injectable({
  providedIn: 'root'
})
export class RefundService {
  url: string = "/api_deathclaim";

   _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "DEATHCLAIM";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getRefundAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}
postRefundclaim(obj: Refund) {
  obj.createdByUserId=2;
  return this.httphelper.POST(this.url,obj);
}
}
