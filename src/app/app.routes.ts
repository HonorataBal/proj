import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OopsComponent } from '../oops/oops.component';
import { PostFormComponent } from 'src/posts/post-form/post-form.component';
import { PostListComponent } from 'src/posts/post-list/post-list.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'post-list', component: PostListComponent },
    { path: 'create-post', component: PostFormComponent},
    { path: '**', component: OopsComponent }
];
