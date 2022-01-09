import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-localize',
  template: `
    <h4>{{ title }}</h4>
    <p i18n>Demo paragraph</p>
  `,
})
export class I18nLocalizeComponent {
  readonly title: string = $localize`:@@title:Hello World!`;

}

