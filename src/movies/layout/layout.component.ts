import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private _Router: Router) { }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this._Router.navigate(['/login']);
  }
}
