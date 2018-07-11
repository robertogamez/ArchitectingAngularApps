import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { JediListComponent } from './jedi-list/jedi-list.component';

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule
  ],
  declarations: [
      JediListComponent
  ],
  exports: [
      JediListComponent
  ]
})
export class JediModule { }
