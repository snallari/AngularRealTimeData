import { AngularRealTimeDataPage } from './app.po';

describe('angular-real-time-data App', () => {
  let page: AngularRealTimeDataPage;

  beforeEach(() => {
    page = new AngularRealTimeDataPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
