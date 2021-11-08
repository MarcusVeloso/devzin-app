import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DevelopersNovoComponent } from '../developers/developers-novo/developers-novo.component';

@Injectable()
export class DeveloperGuard implements CanDeactivate<DevelopersNovoComponent> {
  canDeactivate(component: DevelopersNovoComponent){
    if(component.dadosNaoSalvos){
      return window.confirm('As informações não salvas serão perdidas.\nDeseja realmente sair da página?');
    }
    
    return true;
  }
  
}
