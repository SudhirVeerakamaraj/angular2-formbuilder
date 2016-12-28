import {Headers, Http} from '@angular/Http';
import { FormsModule }   from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CountryComponent} from './custom.components/country.component/country.component';
import {ReportCardComponent}from './custom.components/report-card.component/report-card.component';
import {CountryService}from './custom.components/country.component/country.component.service';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[FormsModule], declarations: [AppComponent,CountryComponent,ReportCardComponent], providers:[Http,CountryService]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
