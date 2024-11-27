
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { ListRequest } from '../models/Common/listrequest.model';
import { catchError, map } from 'rxjs/operators';
import { HttpHelperService } from './Common/http-helper.service';

import { identifierName } from '@angular/compiler';
import { State } from '../models/Common/state.model';



@Injectable({
  providedIn: 'root'
})
export class DashboardServices {

  url:string="/api_State";

  constructor(private httphelper: HttpHelperService) {


  }

  getDashBoardData() {

    return this.httphelper.GetData("/api_dashboard/GetLookUpDataAsync").pipe(map((val) => val.isSucess ? val.value : []),
    catchError((error) => {
      console.error("API call failed", error);
      return of([]); // Return an empty array in case of error
    }));
  }






}
