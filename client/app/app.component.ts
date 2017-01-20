import { Component } from '@angular/core';
import { LoopBackConfig } from '../shared/index';
import { UserApi } from '../shared/services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent  {
    username = "";
    responseText = "";
    responseTextToThankUser = "";

    constructor(private userApi: UserApi) {
        LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
        LoopBackConfig.setApiVersion('api');
    }

    getResponseTextByUsername() {
        this.userApi.greet(this.username)
            .subscribe((data) => this.responseText = data.responseText);
    }
}