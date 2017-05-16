import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import { CreatePaProfileComponent } from './create-pa-profile/create-pa-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePaProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
