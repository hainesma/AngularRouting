import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RedditPostComponent } from './reddit-post/reddit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent, pathMatch: 'full'},
      {path: 'redditPost', component: RedditPostComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
