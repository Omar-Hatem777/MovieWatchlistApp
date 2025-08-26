import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
