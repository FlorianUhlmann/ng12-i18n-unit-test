import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLocalizeComponent } from './i18n-localize.component';

describe('I18nLocalizeComponent', () => {
  let component: I18nLocalizeComponent;
  let fixture: ComponentFixture<I18nLocalizeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [I18nLocalizeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    mockLocalize.calls.reset();
    fixture = TestBed.createComponent(I18nLocalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call $localize twice', () => {
    expect(mockLocalize).toHaveBeenCalledTimes(2);

  });

  it('should call $localize with "Demo paragraph"', () => {
    expect(mockLocalize.calls.argsFor(0)[0][0]).toContain('Demo paragraph');
  });

  it('should call $localize with ":@@title:Hello World!"', () => {
    console.log('DEMOOOO', mockLocalize.calls.argsFor(1)[0][0]);
    expect(mockLocalize.calls.argsFor(1)[0][0]).toContain(':@@title:Hello World!');
  });

});


