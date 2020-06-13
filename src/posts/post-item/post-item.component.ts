import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';



@Component({
    selector: 'wsb-post-item',
    templateUrl: './post-item.component.html'
})
export class PostItemComponent {

    @Input() post: Post;
    @Output() delete = new EventEmitter();

    onClick() {
        this.delete.emit(this.post.id);
    }
    
}