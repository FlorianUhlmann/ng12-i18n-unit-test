import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { I18nLocalizeComponent } from './i18n-localize/i18n-localize.component';
import { I18nStringLiteralComponent } from './i18n-string-literal/i18n-string-literal.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nLocalizeComponent,
    I18nStringLiteralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
