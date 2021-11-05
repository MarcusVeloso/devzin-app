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
}