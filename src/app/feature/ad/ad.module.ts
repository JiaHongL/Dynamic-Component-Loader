import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ad1Component } from './ad-1/ad-1.component';
import { Ad2Component } from './ad-2/ad-2.component';
import { Ad3Component } from './ad-3/ad-3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdDirective, Ad1Component, Ad2Component, Ad3Component],
  exports: [AdDirective],
  entryComponents: [Ad1Component, Ad2Component,Ad3Component],
  providers: [AdService]
})
export class AdModule { }
