/**
 * @description Window: customElements property
 * @source https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
 * @source https://github.com/mdn/web-components-examples
 */

customElements.define(
  "yw-custom-element",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.querySelector("template");
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      }).appendChild(templateContent.cloneNode(true));
    }
  }
);
