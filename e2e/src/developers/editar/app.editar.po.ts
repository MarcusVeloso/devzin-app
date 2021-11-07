import { AppBasePage } from '../../app.base.po';

export class AppEditarPage extends AppBasePage {
  
  constructor() {
    super();
  }

  navegarParaEditar(){
    this.navegarViaUlr('/developers-editar/1');
  }

  iniciarNavegacao(){
    this.navegarParaEditar();
  }

  obterTituloEditar(){
    return this.obterElementoXpath('/html/body/app-root/app-developers-editar/div/h3').getText();
  }
}