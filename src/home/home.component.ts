
import { Component } from '@angular/core';
// import { AppInfoService } from '../app-info/app-info.service';


@Component({
    selector: 'wsb-home',
    templateUrl: './home.component.html',
   
})
export class HomeComponent {

    today = new Date();
    // headingTitle = this.appInfo.add(1, 2);
    // isActive: boolean = false;

    // users: any = [];

    // constructor(public appInfo: AppInfoService) {
    //     // wykonujemy zapytanie HTTP do jsonplaceholder.typicode.com/users
    //     this.appInfo.getUsers()
    //         .then(response => {
    //             console.log(response);
    //             this.users = response;
    //         })
    //         .catch(error => console.error(error));
    // }

    // toggle() {
    //     // this.isActive = !this.isActive;
    //     this.isActive = this.isActive ? false : true;
    // }
    
}
