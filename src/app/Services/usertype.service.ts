
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  url:string="/api_UserType";

  constructor( private httphelper :HttpHelperService) {  }



   getUserTypes() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
    postUserTypes(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putUserTypes(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteItem(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }
    getUserTypeById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
}
