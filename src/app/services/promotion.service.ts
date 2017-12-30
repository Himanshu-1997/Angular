import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/delay';

@Injectable()
export class PromotionService {

  constructor(private http: Http,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions():  Observable<Promotion[] >{
    return this.http.get(baseURL + 'promotions')
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
  }

  getPromotion(id: number):  Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
  }

  getFeaturedPromotion(): Observable<Promotion> {
   return this.http.get(baseURL + 'promotions?featured=true')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
  }

}