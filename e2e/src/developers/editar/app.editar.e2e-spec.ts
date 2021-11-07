import { AppEditarPage } from './app.editar.po';
import { browser, logging } from 'protractor';

describe('Testes da página retornar developer', () => {
  let page: AppEditarPage;

  beforeEach(() => {
    page = new AppEditarPage();
  });

  it('deve navegar até o formulário editar developer', () => {
    page.iniciarNavegacao();
    expect(page.obterTituloEditar()).toEqual('Editar Developer');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
