import { Component, OnInit } from '@angular/core';
import { Login } from './../../models/login';
import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  hiddenError = true;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.auth.logearse(this.login.usuario, this.login.password) === false) {
      this.hiddenError = false;
    } else {
      this.hiddenError = true;
      this.auth.emitChange(this.login.usuario);
    }
  }

}
