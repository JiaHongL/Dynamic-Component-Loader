
import { AdModule } from './feature/ad/ad.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';

import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxLoremIpsumModule,
    AdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
