import { AppCadastroPage } from './app.cadastro.po';
import { browser, logging } from 'protractor';

describe('Testes da página novo developer', () => {
  let page: AppCadastroPage;

  beforeEach(() => {
    page = new AppCadastroPage();
  });

  it('deve navegar até o formulário novo developer', () => {
    page.iniciarNavegacao();
    expect(page.obterTituloCadastro()).toEqual('Novo Developer');
  });

  it('deve preencher o formulário novo developer com sucesso', () => {
        page.campoNome.sendKeys('Marcelinho Silva');
        page.campoSexo.sendKeys('Masculino');
        page.campoIdade.sendKeys('20');
        page.campoHobby.sendKeys('Jogar Gears of War 3');
        page.campoDataNascimento.sendKeys('10-10-2001');

        page.botaoGravar.click();

        page.esperar(3000);

        expect(page.redirecionadoParaListarTodos()).toEqual('Lista de Developers');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
