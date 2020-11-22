import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../auth/store/reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { EffectsModule } from '@ngrx/effects';
import { LogOutEffect } from '../auth/store/effects/logout.effect';

const routes: Routes = [{ path: 'settings', component: SettingsComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([LogOutEffect]),
    StoreModule.forFeature('settings', reducers),
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
