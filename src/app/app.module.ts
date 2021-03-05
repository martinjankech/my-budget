import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { Error404Component } from './error404/error404.component';
import {LocalStorageModule} from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    HomeComponent,
    TodoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
