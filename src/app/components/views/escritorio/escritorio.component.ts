import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    }
  }

  irActivos() {
    this.router.navigate(['/activos']);
  }

}
