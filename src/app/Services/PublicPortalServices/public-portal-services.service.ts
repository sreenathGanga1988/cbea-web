import { Injectable } from '@angular/core';
import { PublicHttpHelperService } from '../Common/public-http-helper.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { PublicmainPage } from '../../models/Common/public-mainpage.model ';

@Injectable({
  providedIn: 'root'
})

export class PublicPortalServicesService {
  url: string = "/Api_PublicArea";
  mainpageitems: PublicmainPage = {
    newsModels: [],
    managingComiteeDTOs:[],
    corouselImage1: '',
    corouselImage2: '',
    corouselImage3: '',
    mainText: '',
    slogan: '',
    rulesRegulation: null,
    dayQuote: '',
    logoImage1: '',
    logoImage2: '',
    contactDesc1: null,
    contactDesc2: null,
    contactLine1: null,
    contactLine2: null,
    contactLine3: null,
    phonenum: null,
    faxnum: null,
    website: null,
    email: null
  };

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private httphelper: PublicHttpHelperService) {

  }




  getHome() {

    return this.httphelper.GetData(this.url + "/GetMainPageLast");

  }
  getRule() {


    return this.httphelper.GetData(this.url + "/GetRules");

  }
  setPublicData(data: any){
    this.dataSubject.next(data);
  }
  getPubliData(): Observable<PublicmainPage|null> {
    return this.dataSubject.asObservable();
  }
}




