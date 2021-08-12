import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchModule } from './../shared/components/search/search.module';
import { AddButtonModule } from './../shared/components/add-button/add-button.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [SearchModule, AddButtonModule],


providers: [],
  exports: [
    NavbarComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
