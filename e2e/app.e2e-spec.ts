import { HeroesVsVillainsPage } from './app.po';

describe('heroes-vs-villains App', () => {
  let page: HeroesVsVillainsPage;

  beforeEach(() => {
    page = new HeroesVsVillainsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Heroes vs. Villains'))
      .then(done, done.fail);
  });
});
