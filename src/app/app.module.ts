import { AuthModule } from './auth/auth.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TopbarModule } from './shared/modules/topbar/topbar.module';
import { ArticleModule } from './article/article.module';
import { AuthInterceptor } from './shared/services/auth.interceptor.service';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { CreateArticleModule } from './createArticle/createArticle.module';
import { EditArticleModule } from './editArticle/editArticle.module';
import { SettingsModule } from './settings/settings.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TopbarModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
