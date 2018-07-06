import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      StoreModule.forRoot({
          counter: counterReducer
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
