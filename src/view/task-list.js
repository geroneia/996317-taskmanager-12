import AbstractView from "./abstract.js";

export default class Tasklist extends AbstractView {
  getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}
