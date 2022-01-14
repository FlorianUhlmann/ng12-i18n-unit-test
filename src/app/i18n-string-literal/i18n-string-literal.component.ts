import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-i18n-string-literal',
    template: `
    {{demoString}}
  `,
})
export class I18nStringLiteralComponent {

    readonly NachfragenWirdAdmin = (vorname: any, nachname: any) => $localize`Sind Sie sicher, dass Sie die den Benutzer ${vorname} ${nachname} zum Administrator ernennen möchten?`;

    public demoString!: string;

    ngOnInit() {
        this.demoString = this.NachfragenWirdAdmin('Max', 'Musterman');
    }


}

