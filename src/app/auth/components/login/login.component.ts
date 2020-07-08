import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

import { BackEndErrorsInterface } from '../../../shared/types/BackEndErrors.interface';
import { LoginRequestInterface } from '../../types/LoginRequest.interface';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackEndErrorsInterface> | null;
  constructor(private _fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this._fb.group({
      email: [null],
      password: [null],
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
