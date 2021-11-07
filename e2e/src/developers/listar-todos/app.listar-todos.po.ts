import { AppBasePage } from '../../app.base.po';
import { browser, by, element } from 'protractor';

export class AppDevelopersListarTodosPage extends AppBasePage {
  
  constructor() {
    super();
  }

  getTitleText() {
    return this.obterElementoXpath('/html/body/app-root/app-developers-lista/div/h3').getText();
  }
}