import { AppDevelopersListarTodosPage } from './app.listar-todos.po';
import { browser, logging } from 'protractor';

describe('Testes da página developers listar todos', () => {
  let page: AppDevelopersListarTodosPage;

  beforeEach(() => {
    page = new AppDevelopersListarTodosPage();
  });

  it('deve estar na página listar todos', () => {
    page.navegarParaHome();
    expect(page.getTitleText()).toEqual('Lista de Developers');
  });

  it('deve pesquisar o usuário na lista', () => {
    page.navegarParaHome();
    page.campoParametroPesquisa.sendKeys('Marcelinho Silva');
    page.botaoPesquisar.click();
    page.esperar(1000);

    expect(page.retornaNomeDeveloperPesquisado()).toEqual('Marcelinho Silva');
});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
