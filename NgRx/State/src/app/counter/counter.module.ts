import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { counterListReducer } from './counter-list/counter-list.reducer';
import { CounterListComponent } from './counter-list/counter-list.component';
import { Counter } from "./counter-list/counter.model";

export interface CounterState {
    data: number;
    list: Array<Counter>
}

const combinedReducers: ActionReducerMap<CounterState> = {
    data: counterReducer,
    list: counterListReducer
}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      StoreModule.forFeature('counter', combinedReducers)
  ],
  declarations: [CounterComponent, CounterListComponent],
  exports: [CounterComponent, CounterListComponent]
})
export class CounterModule { }
