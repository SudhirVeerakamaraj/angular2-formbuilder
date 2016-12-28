import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {HttpModule} from '@angular/Http';
import {WelcomeModule} from './modules/welcome.module';

import { AppComponent } from './app.component';
import {AppConfig} from './app.config'


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    WelcomeModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers:[AppConfig],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
