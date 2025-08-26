import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ɵInternalFormsSharedModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  userNotFoundMessage: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      this._Router.navigate(['/movies']);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.loginForm.valid)
    {
      const user = this._AuthService.findUser(this.loginForm.value.email!,this.loginForm.value.password!);

      if (user)
      {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        this.loginForm.reset();
        this._Router.navigate(['/movies']);
      }
      else if (!user)
      {
        this.userNotFoundMessage = 'Invalid email or password.';
      }
    }

  }

}
