import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/shared/base';
import { Dish } from 'src/shared/dish';
import { ProcessHttpMsgService } from './process-http-msg.service';
import { map, catchError } from 'rxjs/operators'
import 'rxjs/add/operator/delay';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(public http: Http, private processHttpMsgService: ProcessHttpMsgService) {

  }


  getDishes() {
    return this.http.get(baseUrl + 'dishes').pipe(
      map(res => {
        return this.processHttpMsgService.extractData(res);
      }),
      catchError(err => {
        return this.processHttpMsgService.handleError(err)
      })
    )
  }

  getDish(id:number){
    return this.http.get(baseUrl+'dishes/'+id).pipe(
      map(res=>{
        return this.processHttpMsgService.extractData(res)
      }),

      catchError(err=>{
        return this.processHttpMsgService.handleError(err);
      })
    )
  }

  getFeaturedDish(){
    return this.http.get(baseUrl+'dishes?featured=true').pipe(
      map(res=>{
        return this.processHttpMsgService.extractData(res);
      }),
      catchError(err=>{
        return this.processHttpMsgService.handleError(err);
      })
    )
  }

}
