import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from 'src/app/services/developer.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { Developer } from '../models/developer';

@Component({
  selector: 'app-developers-novo',
  templateUrl: './developers-novo.component.html',
  styleUrls: ['./developers-novo.component.css']
})
export class DevelopersNovoComponent implements OnInit {

  errors: any[] = [];
  developerForm: FormGroup;
  developer: Developer = new Developer();

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder,
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute) { 

      this.validationMessages = {
        nome: {
          required: 'Informe o nome',
        },
        sexo: {
          required: 'Informe o sexo',
        },
        idade: {
          required: 'Informe a idade',
        },
        hobby: {
          required: 'Informe um hobby',
        },
        datanascimento: {
          required: 'Informe a data de nascimento',
        },
      };

      this.genericValidator = new GenericValidator(this.validationMessages);
    }

  ngOnInit(): void {

    this.developerForm = this.fb.group({
      id:'',
      nome: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      hobby: ['', [Validators.required]],
      datanascimento: ['', [Validators.required]],
    });
  }

  gravar(){
    if(this.developerForm.dirty && this.developerForm.valid){
      this.developer = Object.assign({}, this.developer, this.developerForm.value);

      this.developerService.novoDeveloper(this.developer)
          .subscribe(
            sucesso => {
              this.processarSucesso(sucesso);
              this.router.navigate(['/developers-listar-todos']);
            },
            falha => {this.processarFalha(falha)}
          )
    }
  }

  processarSucesso(response:any){
    console.log("gravou");
    
  }

  processarFalha(response:any){
    console.log("falhou");
  }
}