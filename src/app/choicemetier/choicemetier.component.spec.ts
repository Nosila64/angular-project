import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicemetierComponent } from './choicemetier.component';

describe('ChoicemetierComponent', () => {
  let component: ChoicemetierComponent;
  let fixture: ComponentFixture<ChoicemetierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicemetierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicemetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
