import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarrosselService {

  URL_GET_CARROSSEIS='/api/get'
  URL_POST_CARROSSEIS='/api/post'
  URL_PUT_CARROSSEIS='/api/put'
  URL_DELETE_CARROSSEIS='/api/delete'

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get<any>(this.URL_GET_CARROSSEIS)
  }

  post(): Observable<any>{
    return this.http.get<any>(this.URL_GET_CARROSSEIS)
  }

  put(): Observable<any>{
    return this.http.get<any>(this.URL_GET_CARROSSEIS)
  }

  delete(): Observable<any>{
    return this.http.delete<any>(this.URL_GET_CARROSSEIS)
  }
}
