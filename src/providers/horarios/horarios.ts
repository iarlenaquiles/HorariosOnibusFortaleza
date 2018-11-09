import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HorariosProvider {

  constructor(public http: HttpClient) {

  }

  public getLinhas(): Observable<any> {
    return this.http.get('http://gistapis.etufor.ce.gov.br:8081/api/linhas/');
  }

  public getHorarios(id, data): Observable<any> {
    return this.http.get('http://gistapis.etufor.ce.gov.br:8081/api/horarios/' + id + '?data=' + data);
  }
}
