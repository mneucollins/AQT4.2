import { AQT4.2Page } from './app.po';

describe('aqt4.2 App', () => {
  let page: AQT4.2Page;

  beforeEach(() => {
    page = new AQT4.2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
