import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/CurrentUser.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackEndErrorsInterface | null>;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeListeners() {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm() {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  submit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout() {
    this.store.dispatch(logoutAction());
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
