import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMsgService {

  constructor(public http:Http) { 
    console.log("Hello from httpMsgService");
  }
  public extractData(res:Response){
    let body=res.json();
    return body || {};
  }


  public handleError( error:Response |any){
    let errMsg:string;
    if(error instanceof Response){
      const body =error.json;
      const err=JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

    }else{
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
