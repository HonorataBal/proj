import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
    selector: 'wsb-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{

    postForm: FormGroup;

    showErrors: boolean = false;

    constructor(public formBuilder: FormBuilder, public postService: PostsService) {}

    ngOnInit() {
        this.postForm = this.formBuilder.group({
            id:[''],
            title: ['', Validators.minLength(3)],
            text: ['', Validators.minLength(3)],
        });
    }
    // save () {

    //     const formValue = this.postForm.getRawValue();

    //     // console.log(this.postForm.value);
    //     this.postService.savePost(formValue)
        
    // }
    save() {
        if (this.postForm.valid) {
            const formValue = this.postForm.getRawValue();
            this.postService.savePost(formValue)
        } else {
            this.showErrors = true;
        }
    }
}

