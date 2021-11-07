import { AppBasePage } from '../../app.base.po';
import { by, element } from 'protractor';

export class AppDevelopersListarTodosPage extends AppBasePage {
  
  constructor() {
    super();
  }

  getTitleText() {
    return this.obterElementoXpath('/html/body/app-root/app-developers-lista/div/h3').getText();
  }

  retornaNomeDeveloperPesquisado(){
    return this.obterElementoXpath('/html/body/app-root/app-developers-lista/div/table/tr[1]/td[1]').getText();
  }
  
  campoParametroPesquisa = element(by.id('parametroPesquisa'));
  botaoPesquisar = element(by.id('pesquisar'));
}