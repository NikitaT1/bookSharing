import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchModule } from './../shared/components/search/search.module';
import { AddButtonModule } from './../shared/components/add-button/add-button.module';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [SearchModule, AddButtonModule, MatIconModule],


providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
