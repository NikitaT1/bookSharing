import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './features/homepage/homepage.module';
import { AddButtonModule } from './shared/components/add-button/add-button.module';
import { SearchModule } from './shared/components/search/search.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    AddButtonModule,
    SearchModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
