import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'angular_client';
import { BurgerListComponent } from './burger-list/burger-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
