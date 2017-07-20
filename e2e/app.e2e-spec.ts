import { ShoppingRecipeListPage } from './app.po';

describe('shopping-recipe-list App', () => {
  let page: ShoppingRecipeListPage;

  beforeEach(() => {
    page = new ShoppingRecipeListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
