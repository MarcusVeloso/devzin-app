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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevelopersExcluirComponent } from './developers/developers-excluir/developers-excluir.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { ToastrModule } from 'ngx-toastr';
import { DeveloperGuard } from './services/developer.guard';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersListaComponent,
    DevelopersEditarComponent,
    DevelopersNovoComponent,
    DevelopersExcluirComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    DeveloperService,
    DeveloperGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
