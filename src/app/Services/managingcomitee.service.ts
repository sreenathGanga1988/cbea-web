import { Injectable } from '@angular/core';
import { ListRequest } from '../models/Common/listrequest.model';
import { HttpHelperService } from './Common/http-helper.service';
import { map } from 'rxjs/operators';
import { Managingcomitee } from '../models/Common/managingcomitee.model';

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
postManagingComite(obj:Managingcomitee) {
  obj.createdByUserId=1;
  return this.httphelper.POST(this.url, obj);
}
putManagingcomitee(id: number, obj: any) {
  return this.httphelper.PUT(this.url + "/" + id, obj);
}
getManagingcomiteeById(Id: number) {
  return this.httphelper.GetData(this.url + "/" + Id);
  // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
}
deleteItem(id: number) {
  return this.httphelper.Delete(this.url + "/" + id);
}
}

