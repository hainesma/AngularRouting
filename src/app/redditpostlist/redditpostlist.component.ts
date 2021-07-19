import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redditpostlist',
  templateUrl: './redditpostlist.component.html',
  styleUrls: ['./redditpostlist.component.css']
})
export class RedditpostlistComponent implements OnInit {
postDisplayIndex: number[] = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
