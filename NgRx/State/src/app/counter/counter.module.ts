import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
