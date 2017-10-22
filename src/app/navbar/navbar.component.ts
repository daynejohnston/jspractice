import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  title = 'navbar';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout().subscribe(
      data => {
        // logged out successfully
      },
      error => {
        console.log(error);
      }
    );
  }
}
