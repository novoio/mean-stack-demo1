import { MeanApp1Page } from './app.po';

describe('mean-app1 App', () => {
  let page: MeanApp1Page;

  beforeEach(() => {
    page = new MeanApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
