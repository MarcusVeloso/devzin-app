import { AppBasePage } from '../../app.base.po';
import { by, element } from 'protractor';

export class AppCadastroPage extends AppBasePage {
  
  constructor() {
    super();
  }

  navegarParaCadastro(){
    this.navegarViaUlr('/developers/novo');
  }

  navegarParaCadastroPorLink(){
    this.navegarPorLink('Novo developer');
  }

  iniciarNavegacao(){
    this.navegarParaHome();
    this.navegarParaCadastroPorLink();
  }

  obterTituloCadastro(){
    return this.obterElementoXpath('/html/body/app-root/app-developers-novo/div/h3').getText();
  }

  redirecionadoParaListarTodos(){
    return this.obterElementoXpath('/html/body/app-root/app-developers-lista/div/h3').getText();
  }

  campoNome = element(by.id('nome'));
  campoSexo = element(by.id('sexo'));
  campoIdade = element(by.id('idade'));
  campoHobby = element(by.id('hobby'));
  campoDataNascimento = element(by.id('datanascimento'));

  botaoGravar = element(by.id('gravar'));
}