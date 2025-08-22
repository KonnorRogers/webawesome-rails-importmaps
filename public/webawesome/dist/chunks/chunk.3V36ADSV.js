import {
  WebAwesomeElement,
  t
} from "./chunk.BVJZOEM6.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// src/components/carousel-item/carousel-item.css
var carousel_item_default = ":host {\n  --aspect-ratio: inherit;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  max-height: 100%;\n  aspect-ratio: var(--aspect-ratio);\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n}\n\n::slotted(img) {\n  width: 100% !important;\n  height: 100% !important;\n  object-fit: cover;\n}\n";

// src/components/carousel-item/carousel-item.ts
var WaCarouselItem = class extends WebAwesomeElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return x` <slot></slot> `;
  }
};
WaCarouselItem.css = carousel_item_default;
WaCarouselItem = __decorateClass([
  t("wa-carousel-item")
], WaCarouselItem);

export {
  WaCarouselItem
};
