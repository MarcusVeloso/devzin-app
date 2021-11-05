import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from 'src/app/services/developer.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { Developer } from '../models/developer';

@Component({
  selector: 'app-developers-excluir',
  templateUrl: './developers-excluir.component.html',
  styleUrls: ['./developers-excluir.component.css']
})
export class DevelopersExcluirComponent {

  errors: any[] = [];
  developer: Developer = new Developer();

  constructor(private fb: FormBuilder,
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute) {

      this.route.params.subscribe(
        (param) => {
        this.developerService
            .obterPorId(param['id'])
            .subscribe(developer => this.developer = developer);
        });
    }

  excluirDeveloper(){
    this.developerService.excluirDeveloper(this.developer.id)
        .subscribe(
          sucesso => {
            this.processarSucesso(sucesso);
            this.router.navigate(['/developers-listar-todos']);
          },
          falha => {this.processarFalha(falha)}
        )
  }

  processarSucesso(response:any){
    console.log("gravou");
    
  }

  processarFalha(response:any){
    console.log("falhou");
  }
}