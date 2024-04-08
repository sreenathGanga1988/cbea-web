import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  url:string="/api_Designation";
  constructor( private httphelper :HttpHelperService) {  }


  getDesignations() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     getDesignationById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postDesignations(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putDesignations(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteDesignation(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
