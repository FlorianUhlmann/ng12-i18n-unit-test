import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nStringLiteralComponent } from './i18n-string-literal.component';

describe('I18nStringLiteralCompnent', () => {
    let component: I18nStringLiteralComponent;
    let fixture: ComponentFixture<I18nStringLiteralComponent>;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [I18nStringLiteralComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        mockLocalize.calls.reset();
        fixture = TestBed.createComponent(I18nStringLiteralComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should call $localize twice', () => {
        expect(mockLocalize).toHaveBeenCalledTimes(1);
    });

    it('should call $localize with "Sind Sie sicher, dass Sie die den Benutzer ${vorname} ${nachname} zum Administrator ernennen möchten?"', () => {
        component.NachfragenWirdAdmin('a', 'b')
        expect(mockLocalize.calls.argsFor(0)[0][0]).toContain('Sind Sie sicher, dass Sie die den Benutzer');
        expect(mockLocalize.calls.argsFor(0)[[0][0]][2]).toContain('zum Administrator ernennen möchten?');
    });

});


