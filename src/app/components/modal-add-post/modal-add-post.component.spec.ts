import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPost } from './modal-add-post.component';

describe('ModalAddPost', () => {
  let component: ModalAddPost;
  let fixture: ComponentFixture<ModalAddPost>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddPost ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
