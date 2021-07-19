import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ChildData, Redditposts } from './redditposts';

@Injectable({
    providedIn: 'root'
})
export class RedditService {
    constructor(private http: HttpClient) {
        
    }
    subreddit: string = 'aww';
    baseURL:string = `https://www.reddit.com/r/${this.subreddit}/.json`;
    currentPost: any;
    getPost() : any {
        return this.http.get<Redditposts>(this.baseURL)
    
    }
}