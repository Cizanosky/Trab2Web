import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/';

  constructor(private http: HttpClient) { }

  getCadastro(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  deleteCadastro(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<any>(`${this.apiUrl}${id}`, httpOptions);
  }

  updateCadastro(id: number, cadastro: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}`, cadastro);
  }
}
