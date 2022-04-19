import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserRepoComponent } from './display-user-repo.component';

describe('DisplayUserRepoComponent', () => {
  let component: DisplayUserRepoComponent;
  let fixture: ComponentFixture<DisplayUserRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayUserRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
