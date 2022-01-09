import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { I18nLocalizeComponent } from './i18n-localize/i18n-localize.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nLocalizeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
