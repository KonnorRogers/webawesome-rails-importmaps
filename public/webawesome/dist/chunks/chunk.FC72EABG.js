import {
  watch
} from "./chunk.2NT6DI7B.js";
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

// src/events/resize.ts
var WaResizeEvent = class extends Event {
  constructor(detail) {
    super("wa-resize", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

// src/components/resize-observer/resize-observer.css
var resize_observer_default = ":host {\n  display: contents;\n}\n";

// src/components/resize-observer/resize-observer.ts
var WaResizeObserver = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.observedElements = [];
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      this.dispatchEvent(new WaResizeEvent({ entries }));
    });
    if (!this.disabled) {
      this.updateComplete.then(() => {
        this.startObserver();
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }
  startObserver() {
    const slot = this.shadowRoot.querySelector("slot");
    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true });
      this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
      this.observedElements = [];
      elements.forEach((el) => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  render() {
    return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
WaResizeObserver.css = resize_observer_default;
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaResizeObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], WaResizeObserver.prototype, "handleDisabledChange", 1);
WaResizeObserver = __decorateClass([
  t("wa-resize-observer")
], WaResizeObserver);

export {
  WaResizeObserver
};
