
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { ListRequest } from '../models/Common/listrequest.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string="/api_category";

  _listRequest!:ListRequest ;
  constructor( private httphelper :HttpHelperService) {
    this._listRequest= new ListRequest();
    this._listRequest.ReportType="CATEGORY";
    this._listRequest.SearchText="";
    this._listRequest.PageSize=50;
    this._listRequest.PageNumber=0;

  }

    getCategories(searchtext:string,pageNumber:number=0,pageSize:number=0) {

      this.url="/api_category"
      this._listRequest.SearchText="sree";

      this._listRequest.PageNumber=0;
      this._listRequest.PageSize=30;
      return this.httphelper.GetData(this.url)
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
      postCategories(obj :any) {
         return this.httphelper.POST(this.url,obj);
       }
       putCategories(id:number,obj :any) {
        return this.httphelper.PUT(this.url+"/"+id,obj);
      }
      deleteItem(id:number) {
        return this.httphelper.Delete(this.url+"/"+id);
      }
      getCategoriesById(Id :number) {
        return this.httphelper.GetData(this.url+"/"+Id);
       // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
         }
}
