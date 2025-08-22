import {
  HasSlotController
} from "./chunk.DGCYKUU5.js";
import {
  size_default
} from "./chunk.NC5QP643.js";
import {
  WebAwesomeElement,
  n,
  t
} from "./chunk.BVJZOEM6.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// src/components/card/card.css
var card_default = ":host {\n  --spacing: var(--wa-space-l);\n\n  /* Internal calculated properties */\n  --inner-border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));\n\n  display: flex;\n  flex-direction: column;\n  background-color: var(--wa-color-surface-default);\n  border-color: var(--wa-color-surface-border);\n  border-radius: var(--wa-panel-border-radius);\n  border-style: var(--wa-panel-border-style);\n  box-shadow: var(--wa-shadow-s);\n  border-width: var(--wa-panel-border-width);\n  color: var(--wa-color-text-normal);\n}\n\n/* Appearance modifiers */\n:host([appearance~='plain']) {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n:host([appearance~='outlined']) {\n  background-color: var(--wa-color-surface-default);\n  border-color: var(--wa-color-surface-border);\n}\n\n:host([appearance~='filled']) {\n  background-color: var(--wa-color-neutral-fill-quiet);\n  border-color: transparent;\n}\n\n:host([appearance~='filled'][appearance~='outlined']) {\n  border-color: var(--wa-color-neutral-border-quiet);\n}\n\n:host([appearance~='accent']) {\n  color: var(--wa-color-neutral-on-loud);\n  background-color: var(--wa-color-neutral-fill-loud);\n  border-color: transparent;\n}\n\n/* Take care of top and bottom radii */\n.media,\n:host(:not([with-media])) .header,\n:host(:not([with-media], [with-header])) .body {\n  border-start-start-radius: var(--inner-border-radius);\n  border-start-end-radius: var(--inner-border-radius);\n}\n\n:host(:not([with-footer])) .body,\n.footer {\n  border-end-start-radius: var(--inner-border-radius);\n  border-end-end-radius: var(--inner-border-radius);\n}\n\n.media {\n  display: flex;\n  overflow: hidden;\n\n  &::slotted(*) {\n    display: block;\n    width: 100%;\n    border-radius: 0 !important;\n  }\n}\n\n/* Round all corners for plain appearance */\n:host([appearance='plain']) .media {\n  border-radius: var(--inner-border-radius);\n\n  &::slotted(*) {\n    border-radius: inherit !important;\n  }\n}\n\n.header {\n  display: block;\n  border-block-end-style: inherit;\n  border-block-end-color: var(--wa-color-surface-border);\n  border-block-end-width: var(--wa-panel-border-width);\n  padding: calc(var(--spacing) / 2) var(--spacing);\n}\n\n.body {\n  display: block;\n  padding: var(--spacing);\n}\n\n.footer {\n  display: block;\n  border-block-start-style: inherit;\n  border-block-start-color: var(--wa-color-surface-border);\n  border-block-start-width: var(--wa-panel-border-width);\n  padding: var(--spacing);\n}\n\n:host(:not([with-header])) .header,\n:host(:not([with-footer])) .footer,\n:host(:not([with-media])) .media {\n  display: none;\n}\n";

// src/components/card/card.ts
var WaCard = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "media");
    this.appearance = "outlined";
    this.withHeader = false;
    this.withMedia = false;
    this.withFooter = false;
  }
  updated() {
    if (!this.withHeader && this.hasSlotController.test("header")) this.withHeader = true;
    if (!this.withMedia && this.hasSlotController.test("media")) this.withMedia = true;
    if (!this.withFooter && this.hasSlotController.test("footer")) this.withFooter = true;
  }
  render() {
    return x`
      <slot name="media" part="media" class="media"></slot>
      <slot name="header" part="header" class="header"></slot>
      <slot part="body" class="body"></slot>
      <slot name="footer" part="footer" class="footer"></slot>
    `;
  }
};
WaCard.css = [size_default, card_default];
__decorateClass([
  n({ reflect: true })
], WaCard.prototype, "appearance", 2);
__decorateClass([
  n({ attribute: "with-header", type: Boolean, reflect: true })
], WaCard.prototype, "withHeader", 2);
__decorateClass([
  n({ attribute: "with-media", type: Boolean, reflect: true })
], WaCard.prototype, "withMedia", 2);
__decorateClass([
  n({ attribute: "with-footer", type: Boolean, reflect: true })
], WaCard.prototype, "withFooter", 2);
WaCard = __decorateClass([
  t("wa-card")
], WaCard);

export {
  WaCard
};
