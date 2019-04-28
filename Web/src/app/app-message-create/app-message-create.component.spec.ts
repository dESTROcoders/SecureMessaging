import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMessageCreateComponent } from './app-message-create.component';

describe('AppMessageCreateComponent', () => {
  let component: AppMessageCreateComponent;
  let fixture: ComponentFixture<AppMessageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMessageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMessageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
