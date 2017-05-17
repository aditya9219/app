import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import { _ROUTES } from './routes';

import { AppComponent } from './app.component';
import { CreatePaProfileComponent } from './create-pa-profile/create-pa-profile.component';
import { MyprofileComponent } from './myprofile/myprofile.component'
import { EqualValidator } from './equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreatePaProfileComponent,
    EqualValidator,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    RouterModule.forRoot(_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
