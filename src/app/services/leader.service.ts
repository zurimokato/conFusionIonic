import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { baseUrl } from 'src/shared/base';
import { ProcessHttpMsgService } from './process-http-msg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(public http:Http, private processMsgHttpService:ProcessHttpMsgService ) { }

  getLeaders(){
    return this.http.get(baseUrl+'leaders').pipe(
      map(res=>{
        return this.processMsgHttpService.extractData(res);
      }),
      catchError(err=>{
        return this.processMsgHttpService.handleError(err);
      })
    )
  }

  getLeader(id: number) {
    return  this.http.get(baseUrl + 'leaders/'+ id).pipe(
                    map(res => { return this.processMsgHttpService.extractData(res); }),
                    catchError(error => { return this.processMsgHttpService.handleError(error); })
                    )
  }

  getFeaturedLeader() {
    return this.http.get(baseUrl + 'leaders?featured=true').pipe(
     map(res=>{
      return this.processMsgHttpService.extractData(res);
     }),
     catchError(err=>{
      return this.processMsgHttpService.handleError(err);
     })
    )
  }

}
