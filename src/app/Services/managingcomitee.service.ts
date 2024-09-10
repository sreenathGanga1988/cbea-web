import { Injectable } from '@angular/core';
import { ListRequest } from '../models/Common/listrequest.model';
import { HttpHelperService } from './Common/http-helper.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagingcomiteeService {

  url: string = "/api_managingcomitee";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "managingcomitee";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

}
getManagingComiteeAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


  return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}

getManagingcomitee(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {



return this.httphelper.GetData(this.url)

}
}

