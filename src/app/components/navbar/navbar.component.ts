import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private usuario: string;
  private mostrarUsuario = false;

  constructor(private auth: AuthService) {
    this.auth.changeEmitted$.subscribe(text => {
      this.usuario = text;
      this.mostrarUsuario = true;
      console.log(text);
    });
  }

  ngOnInit() {
  }

}
