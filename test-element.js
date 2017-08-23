import { Element } from '/node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/paper-button/paper-button.js';
export class TestElement extends Element {
    static get template() {
      return `
      <h1>Hello Polymer 3!</h1>
      <paper-button toggles raised>Polymer 3 button test</paper-button>
    `;
  }
}
customElements.define('test-element', TestElement);