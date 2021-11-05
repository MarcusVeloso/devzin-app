import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersFormComponent } from './developers/developers-form/developers-form.component';
import { DevelopersListaComponent } from './developers/developers-lista/developers-lista.component';


const routes: Routes = [
  { path: '', redirectTo: '/developers-lista', pathMatch: 'full' },
  { path: 'developers-lista', component: DevelopersListaComponent },
  { path: 'developers/novo', component: DevelopersFormComponent },
  { path: 'developers/editar/:id', component: DevelopersFormComponent },
  { path: 'developers/excluir/:id', component: DevelopersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
