import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private mockUsuarios = [];

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  constructor() {
    this.mockUsuarios.push({ id: 0, nombre: 'javier', pass: 'hola' });
    this.mockUsuarios.push({ id: 1, nombre: 'hector', pass: 'adios' });
  }

  public logearse(usuario: string, password: string): boolean {
    // Desde aquí se haría la petición a base de datos del usuario.
    // Nos llegaría un token.
    // La Mockeamos con una función.
    if (this.MockLogin(usuario)) {
      localStorage.setItem('currentUser', JSON.stringify({ 'token': usuario }));
      return true;
    }
    return false;
  }

  private MockLogin(nombre: string): boolean {
    if (this.mockUsuarios.find(x => x.nombre === nombre)) {
      return true;
    } else {
      return false;
    }
  }

  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

}
