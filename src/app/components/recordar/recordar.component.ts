import { Component, OnInit } from '@angular/core';
import { Login } from './../../models/login';

@Component({
  selector: 'app-recordar',
  templateUrl: './recordar.component.html',
  styleUrls: ['./recordar.component.css']
})
export class RecordarComponent implements OnInit {

  login = new Login();
  hiddenError = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert('Flipado! Tienes que implementar esto!');
  }

}
