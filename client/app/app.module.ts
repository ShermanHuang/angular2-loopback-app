import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { SDKBrowserModule } from '../shared';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SDKBrowserModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }