import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Redditposts } from './redditposts';

export class RedditService {
    constructor(private http: HttpClient) {
        
    }
    subreddit: string = 'aww';
    baseURL:string = `https://www.reddit.com/r/aww/.json`;
    getPost() {
        this.http.get<Redditposts>(this.baseURL)
        .subscribe(topListing => {
            console.log(topListing.data.children[0]);
            }
        )
    }
}