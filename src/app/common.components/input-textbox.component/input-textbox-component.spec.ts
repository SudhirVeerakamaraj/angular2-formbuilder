import { TestBed } from '@angular/core/testing';
import { InputTextboxComponent } from './input-textbox.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[FormsModule,CommonModule], declarations: [InputTextboxComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(InputTextboxComponent);
    expect(fixture.componentInstance instanceof InputTextboxComponent).toBe(true, 'should create InputTextboxComponent');
  });
});
