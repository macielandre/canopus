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

  get(id: number): Observable<any>{
    return this.http.get<any>(`${this.URL_GET_CARROSSEIS}?id=${id}`)
  }

  post(nome: string, localizacao: string, aberto: boolean, imagem: string): Observable<any>{
    return this.http.get<any>(`${this.URL_GET_CARROSSEIS}?nome=${nome}&localizacao=${localizacao}&aberto=${aberto}&imagem=${imagem}`)
  }

  put(): Observable<any>{
    return this.http.get<any>(`${this.URL_GET_CARROSSEIS}`)
  }

  delete(): Observable<any>{
    return this.http.delete<any>(`${this.URL_GET_CARROSSEIS}`)
  }
}
