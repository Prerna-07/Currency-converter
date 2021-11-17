import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMainComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrencyMainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [CurrencyMainComponent]
})
export class CurrencyMainModule { }
