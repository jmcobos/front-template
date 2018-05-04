import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService {

  private urlBase: string;

  // Observable string sources
  private emitChangeSource = new Subject<any>();

  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor(private http: HttpClient) {
    this.urlBase = 'http://localhost:3000/';
  }

  public add<T>(usuario: string, password: string): Observable<T> {
    const datos = JSON.stringify({ usuario: usuario, password: password });
    console.log(datos);
    return this.http.post<T>(this.urlBase + 'auth', datos, httpOptions);
  }

  public isAuthenticated(): boolean {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      return true;
    } else {
      return false;
    }
  }

  public logearse(usuario: string, password: string): boolean {
    this.add(usuario, password).subscribe(response => {
      console.log(response);
    });

    return false;
    // localStorage.setItem('currentUser', JSON.stringify({ 'token': usuario }));

  }

  public logout(): void {
      // localStorage.removeItem('access_token');
      // localStorage.removeItem('id_token');
      // localStorage.removeItem('expires_at');
      localStorage.removeItem('currentUser');
  }

  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

}
