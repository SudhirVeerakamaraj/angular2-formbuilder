import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/Http';
import { RoutingModule } from './app.route';
import { WelcomeModule } from './modules/welcome.module';

import { AppComponent } from './app.component';
import { AppConfig } from './app.config';

import { map as _map, find as _find, findWhere as _findWhere } from 'underscore';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    WelcomeModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [AppConfig],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
