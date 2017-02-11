import { ScrumlyPage } from './app.po';

describe('scrumly App', function() {
  let page: ScrumlyPage;

  beforeEach(() => {
    page = new ScrumlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
