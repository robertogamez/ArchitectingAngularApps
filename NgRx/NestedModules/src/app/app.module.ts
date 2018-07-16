import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { JedisModule } from './jedis/jedis.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      JedisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
