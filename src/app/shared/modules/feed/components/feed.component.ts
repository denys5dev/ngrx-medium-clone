import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../store/actions/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import {
  isLoadingSelector,
  errorSelector,
  feedSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { GetFeedResponseInterface } from '../types/GetFeedResponse.interface';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || 1);
        this.fetchFeed();
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
  }
}
