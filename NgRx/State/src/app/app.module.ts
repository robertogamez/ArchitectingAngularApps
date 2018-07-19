import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

//import { counterReducer } from './counter/counter/counter.reducer';
//import { jediListReducer } from './jedi/jedi-list/jedi-list.reducer';

//import { JediModule } from './jedi/jedi.module';
import { CounterModule } from './counter/counter.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      //JediModule,
      CounterModule,
      StoreModule.forRoot({
      }),
      StoreDevtoolsModule.instrument({
          maxAge: 25
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
