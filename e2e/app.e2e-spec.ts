import { ShopperAppPage } from './app.po';

describe('shopper-app App', function() {
  let page: ShopperAppPage;

  beforeEach(() => {
    page = new ShopperAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
