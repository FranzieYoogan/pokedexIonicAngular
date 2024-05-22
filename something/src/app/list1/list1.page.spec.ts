import { ComponentFixture, TestBed } from '@angular/core/testing';
import { List1Page } from './list1.page';

describe('List1Page', () => {
  let component: List1Page;
  let fixture: ComponentFixture<List1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(List1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
