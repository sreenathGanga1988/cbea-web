
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';
import { Branch } from '../models/Common/branch.model';


@Injectable({
  providedIn: 'root'
})
export class BranchService {
  url: string = "/api_branch";
  constructor(private httphelper: HttpHelperService) { }

  getBranches(url: string): Observable<Branch[]> {


    return this.httphelper.GetData(url).pipe(map((val) => val.isSucess ? val.value : []));

  }

  getBranchAsync(pageNo:number,pageSize:number,sortOrder :string) {
   let asyncurl=this.url+"/BranchGetPaginatedData/"+ pageNo.toString()+"/"+ pageSize.toString()+"/"+ sortOrder.toString();
    return this.httphelper.GetData(asyncurl);
    // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
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
