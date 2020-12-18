import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { baseUrl } from 'src/shared/base';
import { ProcessHttpMsgService } from './process-http-msg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(public http:Http, private processMsgHttpService:ProcessHttpMsgService) { }

  getPromotions(){
    return this.http.get(baseUrl+'promotions').pipe(
      map(res=>{
        return this.processMsgHttpService.extractData(res);
      }),
      catchError(err=>{return this.processMsgHttpService.handleError(err)})
    )
  }

  getPromotion(id:number){
    return this.http.get(baseUrl+'promotions/'+id).pipe(
      map(res=>{return this.processMsgHttpService.extractData(res)}),
      catchError(err=>{return this.processMsgHttpService.handleError(err)})
    )
  }

  getFeaturedPromotion(){
    return this.http.get(baseUrl+'promotions?featured=true').pipe(
      map(res=>{
        return this.processMsgHttpService.extractData(res)[0];
      }),
      catchError(err=>{return this.processMsgHttpService.handleError(err)})
    )
  }
}
