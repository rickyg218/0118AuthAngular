import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAServiceComponent } from './book-a-service.component';

describe('BookAServiceComponent', () => {
  let component: BookAServiceComponent;
  let fixture: ComponentFixture<BookAServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
