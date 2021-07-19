import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditpostlistComponent } from './redditpostlist.component';

describe('RedditpostlistComponent', () => {
  let component: RedditpostlistComponent;
  let fixture: ComponentFixture<RedditpostlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditpostlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditpostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
