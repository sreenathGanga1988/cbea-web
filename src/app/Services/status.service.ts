
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  url:string="/api_Status";
  constructor( private httphelper :HttpHelperService) {  }


  getStatus() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     getStatusById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postStatus(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putStatus(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteStatus(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
