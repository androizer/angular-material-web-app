import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  authenticateUser({userName, password}: {userName: string, password: string}): Observable<object> {
    return this.http.get(`/users/authenticate/${userName}/${password}`);
  }

  getCompanyList(): Observable<object> {
    return this.http.get('/users/list');
  }
}
