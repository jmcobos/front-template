import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private mockUsuarios = [];

  constructor() {
    this.mockUsuarios.push({ id: 0, nombre: 'javier', pass: 'hola' });
    this.mockUsuarios.push({ id: 1, nombre: 'hector', pass: 'adios' });
  }

  isAuthenticated(nombre: string): boolean {
    if (this.mockUsuarios.find(x => x.nombre === nombre)) {
      return true;
    } else {
      return false;
    }
  }

}
