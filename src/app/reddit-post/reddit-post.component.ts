import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent {

  constructor(private reddit: RedditService) { }

  getPost() {
    this.reddit.getPost();
  }

}
