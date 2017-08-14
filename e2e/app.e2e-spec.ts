import { JsShopPage } from './app.po';

describe('js-shop App', () => {
  let page: JsShopPage;

  beforeEach(() => {
    page = new JsShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
