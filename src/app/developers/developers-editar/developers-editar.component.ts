import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge, Observable } from 'rxjs';
import { DeveloperService } from 'src/app/services/developer.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';

const moment = require('moment');

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Developer } from '../models/developer';

export interface sexo {
  id: string,
  name: string
}

@Component({
  selector: 'app-developers-editar',
  templateUrl: './developers-editar.component.html',
  styleUrls: ['./developers-editar.component.css']
})
export class DevelopersEditarComponent implements OnInit {

  sexoOpcoesLista: sexo[] = [
    {id: '1', name: 'Masculino'},
    {id: '2', name: 'Feminino'},
    {id: '3', name: 'Não desejo informar'},
    {id: '4', name: 'Outros'},
  ];

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  developerForm: FormGroup;
  developer: Developer = new Developer();

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  colorTheme = 'theme-dark-blue'; 
  bsConfig?: Partial<BsDatepickerConfig>;
  datanascimento: Date;

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
      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
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

    this.route.params.subscribe(
      (param) => {
      this.developerService
          .obterPorId(param['id'])
          .subscribe(developer => {
            this.developer = developer;
            this.preencheForm();
          });
      });
  }

  preencheForm(){
    this.developerForm.patchValue({
      id: this.developer.id,
      nome: this.developer.nome,
      sexo: this.developer.sexo,
      idade: this.developer.idade,
      hobby: this.developer.hobby,
      datanascimento: this.developer.datanascimento,
    });

    this.datanascimento = new Date(this.developer.datanascimento);
  }

  ngAfterViewInit(){
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(()=>{
      this.displayMessage = this.genericValidator.processarMensagens(this.developerForm);      
    })
  }

  gravar(){
    if(this.developerForm.dirty && this.developerForm.valid){
      this.developer = Object.assign({}, this.developer, this.developerForm.value);

      this.developerService.atualizarDeveloper(this.developer)
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