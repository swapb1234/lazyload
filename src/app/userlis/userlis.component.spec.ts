import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlisComponent } from './userlis.component';

describe('UserlisComponent', () => {
  let component: UserlisComponent;
  let fixture: ComponentFixture<UserlisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
