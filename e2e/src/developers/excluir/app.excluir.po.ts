import { AppBasePage } from '../../app.base.po';
import { by, element } from 'protractor';

export class AppExcluirPage extends AppBasePage {
  
  constructor() {
    super();
  }

  navegarParaExcluir(){
    this.navegarViaUlr('/developers-excluir/12');
  }

  iniciarNavegacao(){
    this.navegarParaHome();
    this.navegarParaExcluir();
  }

  obterTituloExcluir(){
    return this.obterElementoXpath('/html/body/app-root/app-developers-excluir/div/h3').getText();
  }

  redirecionadoParaListarTodos(){
    return this.obterElementoXpath('/html/body/app-root/app-developers-lista/div/h3').getText();
  }

  botaoConfirmar = element(by.id('confirmar'));
}