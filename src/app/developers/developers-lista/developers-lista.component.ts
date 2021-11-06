import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../../services/developer.service';
import { Developer } from '../models/developer';

@Component({
  selector: 'app-developers-lista',
  templateUrl: './developers-lista.component.html',
  styleUrls: ['./developers-lista.component.css']
})
export class DevelopersListaComponent implements OnInit {

  public developers: Developer[];
  erroMessage: string;
  parametroPesquisa: string;

  constructor(private developersService: DeveloperService) { }

  ngOnInit(): void {
    this.consultaPadrao();
  }

  consultaPadrao(){
    this.developersService.obterTodos()
    .subscribe(
      developers => this.developers = developers,
      error => this.erroMessage
    )
  }

  pesquisar(parametro:string){
    if(!parametro){
      this.consultaPadrao();
      return;
    }
    
    this.developersService.obterPorFullTextSearch(parametro)
        .subscribe(
          developers => this.developers = developers,
          erro => this.erroMessage
        )
  }
}