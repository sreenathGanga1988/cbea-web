
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class CircleService {
  url:string="/api_Circle";
  constructor( private httphelper :HttpHelperService) {  }


  getCircles() {
    return this.httphelper.GetData(this.url);
   // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
     }
     getCircleById(Id :number) {
      return this.httphelper.GetData(this.url+"/"+Id);
     // return this.httphelper.GetData(this.url).pipe(map((val) => val.isSucess ? val.value : []));
       }
    postCircles(obj :any) {
       return this.httphelper.POST(this.url,obj);
     }
     putCircles(id:number,obj :any) {
      return this.httphelper.PUT(this.url+"/"+id,obj);
    }
    deleteCircle(id:number) {
      return this.httphelper.Delete(this.url+"/"+id);
    }

}
