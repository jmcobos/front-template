import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private usuario: string;
  private logeado = false;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.changeEmitted$.subscribe(text => {
      this.usuario = text;
      this.logeado = true;
      this.router.navigate(['/escritorio']);
    });
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.logeado = true;
    } else {
      this.logeado = false;
    }
  }

  logout() {
    this.auth.logout();
    this.logeado = false;
    this.router.navigate(['/inicio']);
  }

}
