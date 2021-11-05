import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Developer } from '../developers/models/developer';
import { catchError, map } from "rxjs/operators";
import { BaseService } from './base.service';

@Injectable()
export class DeveloperService extends BaseService {

  constructor(private http: HttpClient) { 
    super()
  }

  developer: Developer = new Developer();

  obterTodos(): Observable<Developer[]> {
    return this.http
               .get<Developer[]>(this.UrlV1 + "developers")
               .pipe(catchError(super.serviceError));
  }

  obterPorId(id:string): Observable<Developer> {
    return this.http
               .get<Developer>(this.UrlV1 + "developers/" + id)
               .pipe(catchError(super.serviceError)); 
  }

  novoDeveloper(developer: Developer): Observable<Developer>{
    return this.http
               .post(this.UrlV1 + "developers", developer)
               .pipe(
                 map(super.extractData),
                 catchError(super.serviceError));
  }

  atualizarDeveloper(developer: Developer): Observable<Developer>{
    return this.http
               .put(this.UrlV1 + "developers/" + developer.id, developer)
               .pipe(
                 map(this.extractData),
                 catchError(super.serviceError));
  }
}