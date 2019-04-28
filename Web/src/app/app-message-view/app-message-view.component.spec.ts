import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMessageViewComponent } from './app-message-view.component';

describe('AppMessageViewComponent', () => {
  let component: AppMessageViewComponent;
  let fixture: ComponentFixture<AppMessageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMessageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMessageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
