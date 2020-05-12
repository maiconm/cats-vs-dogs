import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('image url should be undefined when created', () => {
    expect(component.imageUrl).toBeUndefined();
  });

  it('like flag should be false when created', () => {
    expect(component.likeFlag).toBeFalse();
  });

  it('like flag should be true when call like method', () => {
    component.like();
    expect(component.likeFlag).toBeTrue();
  });

  it('animationTrigger() should return notShowing after created', () => {
    expect(component.animationTrigger).toBe('notShowing');
  });

  it('animationTrigger() should return showing after call like()', () => {
    component.like();
    expect(component.animationTrigger).toBe('showing');
  });

  it('canLike should be true when component is created', () => {
    expect(component.canLike).toBeTrue();
  });

  it('whenever canLike is false, likeFlag should be false after calling like()', () => {
    component.canLike = false;
    component.like();
    expect(component.likeFlag).toBeFalse();
  });

  it('whenever canLike is false, animatoinTrigger should return notShowing after calling like()', () => {
    component.canLike = false;
    component.like();
    expect(component.animationTrigger).toBe('notShowing');
  });
});
