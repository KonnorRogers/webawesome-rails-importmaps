import {
  B,
  T
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk.CLOX737Y.js";

// ../../node_modules/lit-html/is-server.js
var o = false;

// ../../node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o2 = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t4, e6, o6) {
    if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e6;
  }
  get styleSheet() {
    let t4 = this.o;
    const s3 = this.t;
    if (e && void 0 === t4) {
      const e6 = void 0 !== s3 && 1 === s3.length;
      e6 && (t4 = o2.get(s3)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o2.set(s3, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var S = (s3, o6) => {
  if (e) s3.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else for (const e6 of o6) {
    const o7 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o7.setAttribute("nonce", n4), o7.textContent = e6.cssText, s3.appendChild(o7);
  }
};
var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e6 = "";
  for (const s3 of t5.cssRules) e6 += s3.cssText;
  return r(e6);
})(t4) : t4;

// ../../node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o3, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t4, s3) => t4;
var u = { toAttribute(t4, s3) {
  switch (s3) {
    case Boolean:
      t4 = t4 ? l : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s3) {
  let i4 = t4;
  switch (s3) {
    case Boolean:
      i4 = null !== t4;
      break;
    case Number:
      i4 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i4 = JSON.parse(t4);
      } catch (t5) {
        i4 = null;
      }
  }
  return i4;
} };
var f = (t4, s3) => !i2(t4, s3);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t4) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s3 = b) {
    if (s3.state && (s3.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s3 = Object.create(s3)).wrapped = true), this.elementProperties.set(t4, s3), !s3.noAccessor) {
      const i4 = Symbol(), h2 = this.getPropertyDescriptor(t4, i4, s3);
      void 0 !== h2 && e2(this.prototype, t4, h2);
    }
  }
  static getPropertyDescriptor(t4, s3, i4) {
    const { get: e6, set: r7 } = h(this.prototype, t4) ?? { get() {
      return this[s3];
    }, set(t5) {
      this[s3] = t5;
    } };
    return { get: e6, set(s4) {
      const h2 = e6?.call(this);
      r7?.call(this, s4), this.requestUpdate(t4, h2, i4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t4 = n2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t5 = this.properties, s3 = [...r2(t5), ...o3(t5)];
      for (const i4 of s3) this.createProperty(i4, t5[i4]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s3 = litPropertyMetadata.get(t4);
      if (void 0 !== s3) for (const [t5, i4] of s3) this.elementProperties.set(t5, i4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s3] of this.elementProperties) {
      const i4 = this._$Eu(t5, s3);
      void 0 !== i4 && this._$Eh.set(i4, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s3) {
    const i4 = [];
    if (Array.isArray(s3)) {
      const e6 = new Set(s3.flat(1 / 0).reverse());
      for (const s4 of e6) i4.unshift(c(s4));
    } else void 0 !== s3 && i4.push(c(s3));
    return i4;
  }
  static _$Eu(t4, s3) {
    const i4 = s3.attribute;
    return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
  }
  addController(t4) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
  }
  removeController(t4) {
    this._$EO?.delete(t4);
  }
  _$E_() {
    const t4 = /* @__PURE__ */ new Map(), s3 = this.constructor.elementProperties;
    for (const i4 of s3.keys()) this.hasOwnProperty(i4) && (t4.set(i4, this[i4]), delete this[i4]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t4) => t4.hostDisconnected?.());
  }
  attributeChangedCallback(t4, s3, i4) {
    this._$AK(t4, i4);
  }
  _$ET(t4, s3) {
    const i4 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i4);
    if (void 0 !== e6 && true === i4.reflect) {
      const h2 = (void 0 !== i4.converter?.toAttribute ? i4.converter : u).toAttribute(s3, i4.type);
      this._$Em = t4, null == h2 ? this.removeAttribute(e6) : this.setAttribute(e6, h2), this._$Em = null;
    }
  }
  _$AK(t4, s3) {
    const i4 = this.constructor, e6 = i4._$Eh.get(t4);
    if (void 0 !== e6 && this._$Em !== e6) {
      const t5 = i4.getPropertyOptions(e6), h2 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
      this._$Em = e6, this[e6] = h2.fromAttribute(s3, t5.type) ?? this._$Ej?.get(e6) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t4, s3, i4) {
    if (void 0 !== t4) {
      const e6 = this.constructor, h2 = this[t4];
      if (i4 ?? (i4 = e6.getPropertyOptions(t4)), !((i4.hasChanged ?? f)(h2, s3) || i4.useDefault && i4.reflect && h2 === this._$Ej?.get(t4) && !this.hasAttribute(e6._$Eu(t4, i4)))) return;
      this.C(t4, s3, i4);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t4, s3, { useDefault: i4, reflect: e6, wrapped: h2 }, r7) {
    i4 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t4) && (this._$Ej.set(t4, r7 ?? s3 ?? this[t4]), true !== h2 || void 0 !== r7) || (this._$AL.has(t4) || (this.hasUpdated || i4 || (s3 = void 0), this._$AL.set(t4, s3)), true === e6 && this._$Em !== t4 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t4));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t6, s4] of this._$Ep) this[t6] = s4;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0) for (const [s4, i4] of t5) {
        const { wrapped: t6 } = i4, e6 = this[s4];
        true !== t6 || this._$AL.has(s4) || void 0 === e6 || this.C(s4, void 0, i4, e6);
      }
    }
    let t4 = false;
    const s3 = this._$AL;
    try {
      t4 = this.shouldUpdate(s3), t4 ? (this.willUpdate(s3), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s3)) : this._$EM();
    } catch (s4) {
      throw t4 = false, this._$EM(), s4;
    }
    t4 && this._$AE(s3);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t5) => this._$ET(t5, this[t5]))), this._$EM();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.0");

// ../../node_modules/lit-element/lit-element.js
var s2 = globalThis;
var i3 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t4 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t4.firstChild), t4;
  }
  update(t4) {
    const r7 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = B(r7, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
};
i3._$litElement$ = true, i3["finalized"] = true, s2.litElementHydrateSupport?.({ LitElement: i3 });
var o4 = s2.litElementPolyfillSupport;
o4?.({ LitElement: i3 });
(s2.litElementVersions ?? (s2.litElementVersions = [])).push("4.2.0");

// ../../node_modules/@lit/reactive-element/decorators/custom-element.js
var t2 = (t4) => (e6, o6) => {
  void 0 !== o6 ? o6.addInitializer(() => {
    customElements.define(t4, e6);
  }) : customElements.define(t4, e6);
};

// ../../node_modules/@lit/reactive-element/decorators/property.js
var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r3 = (t4 = o5, e6, r7) => {
  const { kind: n4, metadata: i4 } = r7;
  let s3 = globalThis.litPropertyMetadata.get(i4);
  if (void 0 === s3 && globalThis.litPropertyMetadata.set(i4, s3 = /* @__PURE__ */ new Map()), "setter" === n4 && ((t4 = Object.create(t4)).wrapped = true), s3.set(r7.name, t4), "accessor" === n4) {
    const { name: o6 } = r7;
    return { set(r8) {
      const n5 = e6.get.call(this);
      e6.set.call(this, r8), this.requestUpdate(o6, n5, t4);
    }, init(e7) {
      return void 0 !== e7 && this.C(o6, void 0, t4, e7), e7;
    } };
  }
  if ("setter" === n4) {
    const { name: o6 } = r7;
    return function(r8) {
      const n5 = this[o6];
      e6.call(this, r8), this.requestUpdate(o6, n5, t4);
    };
  }
  throw Error("Unsupported decorator location: " + n4);
};
function n3(t4) {
  return (e6, o6) => "object" == typeof o6 ? r3(t4, e6, o6) : ((t5, e7, o7) => {
    const r7 = e7.hasOwnProperty(o7);
    return e7.constructor.createProperty(o7, t5), r7 ? Object.getOwnPropertyDescriptor(e7, o7) : void 0;
  })(t4, e6, o6);
}

// ../../node_modules/@lit/reactive-element/decorators/state.js
function r4(r7) {
  return n3({ ...r7, state: true, attribute: false });
}

// ../../node_modules/@lit/reactive-element/decorators/event-options.js
function t3(t4) {
  return (n4, o6) => {
    const c3 = "function" == typeof n4 ? n4 : n4[o6];
    Object.assign(c3, t4);
  };
}

// ../../node_modules/@lit/reactive-element/decorators/base.js
var e3 = (e6, t4, c3) => (c3.configurable = true, c3.enumerable = true, Reflect.decorate && "object" != typeof t4 && Object.defineProperty(e6, t4, c3), c3);

// ../../node_modules/@lit/reactive-element/decorators/query.js
function e4(e6, r7) {
  return (n4, s3, i4) => {
    const o6 = (t4) => t4.renderRoot?.querySelector(e6) ?? null;
    if (r7) {
      const { get: e7, set: r8 } = "object" == typeof s3 ? n4 : i4 ?? (() => {
        const t4 = Symbol();
        return { get() {
          return this[t4];
        }, set(e8) {
          this[t4] = e8;
        } };
      })();
      return e3(n4, s3, { get() {
        let t4 = e7.call(this);
        return void 0 === t4 && (t4 = o6(this), (null !== t4 || this.hasUpdated) && r8.call(this, t4)), t4;
      } });
    }
    return e3(n4, s3, { get() {
      return o6(this);
    } });
  };
}

// ../../node_modules/@lit/reactive-element/decorators/query-all.js
var e5;
function r5(r7) {
  return (n4, o6) => e3(n4, o6, { get() {
    return (this.renderRoot ?? (e5 ?? (e5 = document.createDocumentFragment()))).querySelectorAll(r7);
  } });
}

// ../../node_modules/@lit/reactive-element/decorators/query-async.js
function r6(r7) {
  return (n4, e6) => e3(n4, e6, { async get() {
    return await this.updateComplete, this.renderRoot?.querySelector(r7) ?? null;
  } });
}

// src/styles/component/host.css
var host_default = ":host {\n  box-sizing: border-box !important;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: inherit !important;\n}\n\n[hidden] {\n  display: none !important;\n}\n";

// src/internal/webawesome-element.ts
var _hasRecordedInitialProperties;
var WebAwesomeElement = class extends i3 {
  constructor() {
    super();
    __privateAdd(this, _hasRecordedInitialProperties, false);
    this.initialReflectedProperties = /* @__PURE__ */ new Map();
    this.didSSR = o || Boolean(this.shadowRoot);
    /**
     * Methods for setting and checking custom states.
     */
    this.customStates = {
      /** Adds or removes the specified custom state. */
      set: (customState, active) => {
        if (!Boolean(this.internals?.states)) return;
        if (active) {
          this.internals.states.add(customState);
        } else {
          this.internals.states.delete(customState);
        }
      },
      /** Determines whether or not the element currently has the specified state. */
      has: (customState) => {
        if (!Boolean(this.internals?.states)) return false;
        return this.internals.states.has(customState);
      }
    };
    try {
      this.internals = this.attachInternals();
    } catch {
      console.error("Element internals are not supported in your browser. Consider using a polyfill");
    }
    this.customStates.set("wa-defined", true);
    let Self = this.constructor;
    for (let [property, spec] of Self.elementProperties) {
      if (spec.default === "inherit" && spec.initial !== void 0 && typeof property === "string") {
        this.customStates.set(`initial-${property}-${spec.initial}`, true);
      }
    }
  }
  /**
   * Override the default styles property to fetch and convert string CSS files. Components can override this behavior
   * by setting their own `static styles = []` property.
   */
  static get styles() {
    const styles = Array.isArray(this.css) ? this.css : this.css ? [this.css] : [];
    return [host_default, ...styles].map((style) => typeof style === "string" ? r(style) : style);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!__privateGet(this, _hasRecordedInitialProperties)) {
      this.constructor.elementProperties.forEach(
        (obj, prop) => {
          if (obj.reflect && this[prop] != null) {
            this.initialReflectedProperties.set(prop, this[prop]);
          }
        }
      );
      __privateSet(this, _hasRecordedInitialProperties, true);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    this.initialReflectedProperties.forEach((value, prop) => {
      if (changedProperties.has(prop) && this[prop] == null) {
        this[prop] = value;
      }
    });
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.didSSR) {
      this.shadowRoot?.querySelectorAll("slot").forEach((slotElement) => {
        slotElement.dispatchEvent(new Event("slotchange", { bubbles: true, composed: false, cancelable: false }));
      });
    }
  }
  update(changedProperties) {
    try {
      super.update(changedProperties);
    } catch (e6) {
      if (this.didSSR && !this.hasUpdated) {
        const event = new Event("lit-hydration-error", { bubbles: true, composed: true, cancelable: false });
        event.error = e6;
        this.dispatchEvent(event);
      }
      throw e6;
    }
  }
  /**
   * Given a native event, this function cancels it and dispatches it again from the host element using the desired
   * event options.
   */
  relayNativeEvent(event, eventOptions) {
    event.stopImmediatePropagation();
    this.dispatchEvent(
      new event.constructor(event.type, {
        ...event,
        ...eventOptions
      })
    );
  }
};
_hasRecordedInitialProperties = new WeakMap();
__decorateClass([
  n3()
], WebAwesomeElement.prototype, "dir", 2);
__decorateClass([
  n3()
], WebAwesomeElement.prototype, "lang", 2);
__decorateClass([
  n3({ type: Boolean, reflect: true, attribute: "did-ssr" })
], WebAwesomeElement.prototype, "didSSR", 2);

export {
  o,
  t2 as t,
  n3 as n,
  r4 as r,
  t3 as t2,
  e4 as e,
  r5 as r2,
  r6 as r3,
  WebAwesomeElement
};
/*! Bundled license information:

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
