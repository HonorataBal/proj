import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { OopsComponent } from '../oops/oops.component';
import { PostModule } from '../posts/post.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    PostModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    OopsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
