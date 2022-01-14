import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLocalizeComponent } from './i18n-localize.component';

describe('I18nLocalizeComponent', () => {
  let component: I18nLocalizeComponent;
  let fixture: ComponentFixture<I18nLocalizeComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    expect(mockLocalize).toHaveBeenCalledTimes(5);
  });

  it('should call $localize with "Demo paragraph"', () => {
    expect(mockLocalize.calls.argsFor(0)[0][0]).toContain('@@i18n Demo paragraph');
  });

  it('should call $localize with "button"', () => {
    expect(mockLocalize.calls.argsFor(1)[0][0]).toContain('i18n-[attr] button');
  });
  it('should call $localize with "button2"', () => {
    expect(mockLocalize.calls.argsFor(2)[0][0]).toContain('i18n-[attr] button2');
  });

  it('should call $localize with ":@@title:Hello World!"', () => {
    expect(mockLocalize.calls.argsFor(3)[0][0]).toContain(':@@$localize:Hello World!');
  });

  it('should call $localize with ":@@title:Hello World!"', () => {
    expect(mockLocalize.calls.argsFor(4)[0][0]).toContain(':@@$localize2:Die call order der Tag');
  });
  // it('should call $localize.translate with "string to translate"', () => {
  //   expect(mockLocalize.calls.argsFor(0)[0][0]).toContain('string to translate');
  // });

});


