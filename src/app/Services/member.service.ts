import { Injectable } from '@angular/core';
import { ListRequest } from '../models/Common/listrequest.model';
import { HttpHelperService } from './Common/http-helper.service';
import { map } from 'rxjs';
import { Member } from '../models/Common/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url: string = "/api_category";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "Member";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }
  getMembersAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


    return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
}
getMembers(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {



  return this.httphelper.GetData(this.url)

}
postMember(obj: Member) {
  obj.createdByUserId=1;
  return this.httphelper.POST(this.url, obj);
}
getMemberById(ID: number) {
  return this.httphelper.GetData(this.url + "/" + ID);

}
   
   putMember(id: number, obj: any) {
     return this.httphelper.PUT(this.url + "/" + id, obj);
   }
   deleteItem(id: number) {
    return this.httphelper.Delete(this.url + "/" + id);
  }
  

}
