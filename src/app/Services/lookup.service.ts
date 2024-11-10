
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
export class LookUpService {

  url:string="/api_State";

  constructor(private httphelper: HttpHelperService) {


  }

  getLookUpDatasync(ReportType: string ,searchtext: string, pageNumber: number =0, pageSize: number = 0, selecteditem: string = "") {

    return this.httphelper.GetDataWithSelectedObject("/api_datatable/GetLookUpDataAsync", ReportType, searchtext, pageSize, pageNumber,selecteditem).pipe(map((val) => val.isSucess ? val.value : []),
    catchError((error) => {
      console.error("API call failed", error);
      return of([]); // Return an empty array in case of error
    }));
  }






}
