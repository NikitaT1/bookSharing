import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [SharedModule],
  providers: [],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
