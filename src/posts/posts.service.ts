import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from './post';



@Injectable()
export class PostsService {

    url: string = 'http://localhost:3000/posts';

    constructor(public http: HttpClient) {}

    savePost(post: Post) {
        return this.http.post(this.url, post).toPromise();
    }

    fetchPosts(query: string) {
        return this.http.get(`${this.url}?q=${query}`).toPromise();
    }

    fetchPost(postId) {
        return this.http.get(`${this.url}/${postId}`).toPromise();
    }
       
    deletePost(postId) {
        return this.http.delete(`${this.url}/${postId}`).toPromise();
    }
}