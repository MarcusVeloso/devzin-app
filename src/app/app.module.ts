import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperService } from './services/developer.service';
import { DevelopersListaComponent } from './developers/developers-lista/developers-lista.component';
import { DevelopersFormComponent } from './developers/developers-form/developers-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersListaComponent,
    DevelopersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    DeveloperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
