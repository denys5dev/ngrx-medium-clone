import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import { RegisterEffect } from './store/effects/register.effects';
import { LoginEffect } from './store/effects/login.effects';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effects';
import { reducers } from './store/reducer';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      GetCurrentUserEffect,
      RegisterEffect,
      LoginEffect,
    ]),
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
