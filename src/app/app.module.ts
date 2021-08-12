import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AddButtonModule } from './shared/components/add-button/add-button.module';
import { SearchModule } from './shared/components/search/search.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './core/components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HeaderModule,
    BrowserModule,
    AppRoutingModule,
    AddButtonModule,
    NoopAnimationsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
