import AbstractComponent from './abstract-component';


const createLoadMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;


export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
