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

  constructor(private developersService: DeveloperService) { }

  ngOnInit(): void {
    this.developersService.obterTodos()
    .subscribe(
      developers => this.developers = developers,
      error => this.erroMessage
    )
  }
}