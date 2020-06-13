import { Component, OnInit } from "@angular/core";
import { PostsService } from '../posts.service';



@Component({
    selector: 'wsb-post-list',
    templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {

    posts;
    
    query: string = '';

    constructor(public postService: PostsService) {}

    ngOnInit() {
        this.updateList();
    }

    onDelete(postId) {
        this.postService.deletePost(postId)
        .then(() => {
            this.updateList();
        });
    }

    search(query) {
        this.query = query;
        this.updateList();
    }
    
    updateList(){
        this.posts = this.postService.fetchPosts(this.query);
    }
}