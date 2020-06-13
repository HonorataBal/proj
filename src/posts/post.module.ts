import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { SandwichFormComponent } from './sandwich-form/sandwich-form.component';
// import { SandwichesService } from './sandwiches.service';
// import { SandwichListComponent } from './sandwich-list/sandwich-list.component';
// import { SandwichItemComponent } from './sandwich-item/sandwich-item.component';
import { RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsService } from './posts.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
// import { SandwichDetailsComponent } from './sandwich-details/sandwich-details.component';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [// <-- Component, Directive, Pipe
        PostFormComponent,
        PostListComponent,
        PostItemComponent
        // SandwichFormComponent,
        // SandwichListComponent,
        // SandwichItemComponent,
        // SandwichDetailsComponent
    ],
    providers: [// <-- Service (Injectable)
       PostsService
        // SandwichesService
    ],
    exports: [
        PostFormComponent,
        PostListComponent
        // SandwichFormComponent,
        // SandwichListComponent,
        // SandwichDetailsComponent
    ]
})
export class PostModule { }
