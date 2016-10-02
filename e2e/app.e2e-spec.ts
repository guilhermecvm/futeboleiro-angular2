import { FuteboleiroAngular2Page } from './app.po';

describe('futeboleiro-angular2 App', function() {
  let page: FuteboleiroAngular2Page;

  beforeEach(() => {
    page = new FuteboleiroAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
