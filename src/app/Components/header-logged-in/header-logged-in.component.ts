import { Component } from '@angular/core';

@Component({
  selector: 'app-header-logged-in',
  templateUrl: './header-logged-in.component.html',
  styleUrls: ['./header-logged-in.component.css']
})
export class HeaderLoggedInComponent {
  logout()
  {
    localStorage.removeItem('token');
  }
}

