import {
  e
} from "./chunk.EKCJVOUE.js";
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

// src/components/tab-panel/tab-panel.css
var tab_panel_default = ":host {\n  --padding: 0;\n\n  display: none;\n}\n\n:host([active]) {\n  display: block;\n}\n\n.tab-panel {\n  display: block;\n  padding: var(--padding);\n}\n";

// src/components/tab-panel/tab-panel.ts
var id = 0;
var WaTabPanel = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `wa-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return x`
      <slot
        part="base"
        class=${e({
      "tab-panel": true,
      "tab-panel-active": this.active
    })}
      ></slot>
    `;
  }
};
WaTabPanel.css = tab_panel_default;
__decorateClass([
  n({ reflect: true })
], WaTabPanel.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], WaTabPanel.prototype, "handleActiveChange", 1);
WaTabPanel = __decorateClass([
  t("wa-tab-panel")
], WaTabPanel);

export {
  WaTabPanel
};
