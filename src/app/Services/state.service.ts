
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  url:string="/api_State";
  constructor( private httphelper :HttpHelperService) {  }


  getStates() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     getStateById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postStates(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putStates(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteState(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
