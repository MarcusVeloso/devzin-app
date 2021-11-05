import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperService } from './services/developer.service';
import { DevelopersListaComponent } from './developers/developers-lista/developers-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevelopersEditarComponent } from './developers/developers-editar/developers-editar.component';
import { DevelopersNovoComponent } from './developers/developers-novo/developers-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersListaComponent,
    DevelopersEditarComponent,
    DevelopersNovoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    DeveloperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
