import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
