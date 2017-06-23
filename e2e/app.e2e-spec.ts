import { MyhuelightsPage } from './app.po';

describe('myhuelights App', () => {
  let page: MyhuelightsPage;

  beforeEach(() => {
    page = new MyhuelightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
