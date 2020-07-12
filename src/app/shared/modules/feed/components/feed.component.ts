import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../store/actions/getFeed.action';
import { Observable } from 'rxjs';
import {
  isLoadingSelector,
  errorSelector,
  feedSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { GetFeedResponseInterface } from '../types/GetFeedResponse.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initializeValues();
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
}
