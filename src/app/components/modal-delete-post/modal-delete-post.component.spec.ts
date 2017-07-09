import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletePost } from './modal-delete-post.component';

describe('ModalDeletePost', () => {
  let component: ModalDeletePost;
  let fixture: ComponentFixture<ModalDeletePost>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeletePost ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletePost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
