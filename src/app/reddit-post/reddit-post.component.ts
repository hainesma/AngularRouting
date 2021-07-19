import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { ChildData } from '../redditposts';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css'],
  providers: [RedditService]
})
export class RedditPostComponent {

  constructor(private reddit: RedditService) { 
    this.getPost();
  }
  post: ChildData | null | undefined = this.reddit.currentPost;
  
  @Input() index: number = 0;

  getPost() {
    this.reddit.getPost()
    .subscribe((topListing: any) => {
      console.log(topListing.data.children[this.index].data.subreddit);
      this.post = topListing.data.children[this.index].data;
    })

  }

}
