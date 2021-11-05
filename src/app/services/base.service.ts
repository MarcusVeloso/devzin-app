import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class BaseService {

  protected UrlV1: string = environment.apiUrl;

  protected ObterHeadJson(){
    return {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  }

  protected extractData(response: any){
    return response.data || {};
  }

  protected serviceError(response: Response | any){
    let customError: string[] = [];

    if(response instanceof HttpErrorResponse){

      if(response.statusText === "Unknown Error"){
        customError.push("Ocorreu um erro desconhecido");
        response.error.errors = customError;
      }
    } 
    return throwError(response);
  }
}