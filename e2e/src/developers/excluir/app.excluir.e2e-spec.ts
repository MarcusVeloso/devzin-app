import { AppExcluirPage } from './app.excluir.po';
import { browser, logging } from 'protractor';

describe('Testes da página excluir developer', () => {
  let page: AppExcluirPage;

  beforeEach(() => {
    page = new AppExcluirPage();
  });

  it('deve navegar até o formulário excluir developer', () => {
    page.iniciarNavegacao();
    expect(page.obterTituloExcluir()).toContain('Tem certeza que deseja excluir o developer');
  });

  it('deve excluir o registro do developer com sucesso', () => {
      page.botaoConfirmar.click();
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
