import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopersEditarComponent } from './developers/developers-editar/developers-editar.component';
import { DevelopersExcluirComponent } from './developers/developers-excluir/developers-excluir.component';
import { DevelopersListaComponent } from './developers/developers-lista/developers-lista.component';
import { DevelopersNovoComponent } from './developers/developers-novo/developers-novo.component';


const routes: Routes = [
  { path: '', redirectTo: '/developers-listar-todos', pathMatch: 'full' },
  { path: 'developers-listar-todos', component: DevelopersListaComponent },
  { path: 'developers/novo', component: DevelopersNovoComponent },
  { path: 'developers-editar/:id', component: DevelopersEditarComponent },
  { path: 'developers-excluir/:id', component: DevelopersExcluirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
