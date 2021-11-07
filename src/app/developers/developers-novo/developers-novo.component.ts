import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge, Observable } from 'rxjs';
import { DeveloperService } from 'src/app/services/developer.service';
import { DisplayMessage, GenericValidator, ValidationMessages } from 'src/app/utils/generic-form-validation';
import { ToastrService } from 'ngx-toastr';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Developer, Sexo } from '../models/developer';

@Component({
  selector: 'app-developers-novo',
  templateUrl: './developers-novo.component.html',
  styleUrls: ['./developers-novo.component.css']
})
export class DevelopersNovoComponent implements OnInit {

  sexoOpcoesLista: Sexo[] = [
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
  datanascimento: Date = new Date();

  constructor(private fb: FormBuilder,
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { 

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

      this.developerService.novoDeveloper(this.developer)
          .subscribe(
            sucesso => {
              this.processarSucesso();
              this.router.navigate(['/developers-listar-todos']);
            },
            falha => {this.processarFalha(falha)}
          )
    }
  }

  processarSucesso(){
    this.errors = [];

    let toast = this.toastr.success('Developer insedido com sucesso!', 'Sucesso!');
    if (toast) {
      toast.onAction.subscribe(() => {
        this.router.navigate(['/developers-listar-todos']);
      });
    }
  }

  processarFalha(fail:any){
    this.errors = fail.error.errors;
    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
  }
}