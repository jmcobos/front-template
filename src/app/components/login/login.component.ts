import { Component, OnInit } from '@angular/core';
import { Login } from './../../models/login';
import { AuthService } from './../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  hiddenError = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.auth.logearse(this.login.usuario, this.login.password) === false) {
      this.hiddenError = false;
    } else {
      this.hiddenError = true;
      this.router.navigate(['/inicio']);
    }
  }

}
