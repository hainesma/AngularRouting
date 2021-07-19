import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RedditPostComponent } from './reddit-post/reddit-post.component';
import { RedditpostlistComponent } from './redditpostlist/redditpostlist.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPostComponent,
    RedditpostlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent, pathMatch: 'full'},
      {path: 'reddit-post', component: RedditPostComponent},
      {path: 'app-root', component: AppComponent},
      {path: 'reddit-list', component: RedditpostlistComponent}
    ])

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
