import { ShopRecipePage } from './app.po';

describe('shop-recipe App', function() {
  let page: ShopRecipePage;

  beforeEach(() => {
    page = new ShopRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
