import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-localize',
  template: `
    <h4>{{ title }}</h4>
    <p i18n>@@i18n Demo paragraph</p>
    <button i18n-title title="i18n-[attr] button"></button>
    <button i18n-title title="i18n-[attr] button2"></button>
    <p>{{callOrder}}</p>
  `,
})
export class I18nLocalizeComponent {
  readonly title: string = $localize`:@@$localize:Hello World!`;
  readonly callOrder: string = $localize`:@@$localize2:Die call order der Tag ist i18n -> i18n-[attribute] -> $localize`;



}

