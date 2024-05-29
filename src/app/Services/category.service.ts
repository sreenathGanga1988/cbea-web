
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { ListRequest } from '../models/Common/listrequest.model';
import { Category } from '../models/Common/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = "/api_category";

  _listRequest!: ListRequest;
  constructor(private httphelper: HttpHelperService) {
    this._listRequest = new ListRequest();
    this._listRequest.ReportType = "CATEGORY";
    this._listRequest.SearchText = "";
    this._listRequest.PageSize = 25;
    this._listRequest.PageNumber = 0;

  }

  getCategoriesAsync(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {


      return this.httphelper.GetDataWithObject("/api_datatable/GetPageinatedDataAsync", this._listRequest.ReportType, searchtext, pageSize, pageNumber).pipe(map((val) => val.isSucess ? val.value : []));
  }

  getCategories(searchtext: string, pageNumber: number = 0, pageSize: number = 0) {



    return this.httphelper.GetData(this.url)

  }

  postCategories(obj: Category) {
    obj.createdByUserId=1;
    return this.httphelper.POST(this.url, obj);
  }
  putCategories(id: number, obj: any) {
    return this.httphelper.PUT(this.url + "/" + id, obj);
  }
  deleteItem(id: number) {
    return this.httphelper.Delete(this.url + "/" + id);
  }
  getCategoriesById(Id: number) {
    return this.httphelper.GetData(this.url + "/" + Id);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
  }
}
