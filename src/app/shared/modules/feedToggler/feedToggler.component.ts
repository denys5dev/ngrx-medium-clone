import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector } from './../../../auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html',
  styleUrls: ['./feedToggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tagName') tagNameProps: string | null;

  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
