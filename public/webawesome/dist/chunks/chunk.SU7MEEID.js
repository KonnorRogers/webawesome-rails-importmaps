import {
  RequiredValidator
} from "./chunk.Z6CEMRJQ.js";
import {
  form_control_default
} from "./chunk.HXIPTBQJ.js";
import {
  WebAwesomeFormAssociatedElement
} from "./chunk.QMLLEVTT.js";
import {
  HasSlotController
} from "./chunk.DGCYKUU5.js";
import {
  size_default
} from "./chunk.NC5QP643.js";
import {
  uniqueId
} from "./chunk.6JMOPXMK.js";
import {
  e as e2
} from "./chunk.EKCJVOUE.js";
import {
  e,
  n,
  o,
  r,
  t
} from "./chunk.BVJZOEM6.js";
import {
  x
} from "./chunk.IB44PGUJ.js";
import {
  __decorateClass
} from "./chunk.CLOX737Y.js";

// src/components/radio-group/radio-group.css
var radio_group_default = `:host {
  display: block;
}

.form-control {
  position: relative;
  border: none;
  padding: 0;
  margin: 0;
}

.label {
  padding: 0;
}

.radio-group-required .label::after {
  content: var(--wa-form-control-required-content);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}

.button-group {
  display: flex;
}

[part~='form-control-input'] {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.75em;
}

/* Horizontal */
:host([orientation='horizontal']) [part~='form-control-input'] {
  flex-direction: row;
  gap: 1em;
}

/* Help text */
[part~='hint'] {
  margin-block-start: 0.5em;
}

/* Radios have the "button" appearance */
:host fieldset.has-radio-buttons {
  [part~='form-control-input'] {
    gap: 0;
  }
}
`;

// src/components/radio-group/radio-group.ts
var WaRadioGroup = class extends WebAwesomeFormAssociatedElement {
  constructor() {
    super();
    this.hasSlotController = new HasSlotController(this, "hint", "label");
    this.hasRadioButtons = false;
    this.label = "";
    this.hint = "";
    this.name = null;
    this.disabled = false;
    this.orientation = "vertical";
    this._value = null;
    this.defaultValue = this.getAttribute("value") || null;
    this.size = "medium";
    this.required = false;
    this.withLabel = false;
    this.withHint = false;
    this.handleRadioClick = (e3) => {
      const clickedRadio = e3.target.closest("wa-radio");
      if (!clickedRadio || clickedRadio.disabled || clickedRadio.forceDisabled || this.disabled) {
        return;
      }
      const oldValue = this.value;
      this.value = clickedRadio.value;
      clickedRadio.checked = true;
      const radios = this.getAllRadios();
      for (const radio of radios) {
        if (clickedRadio === radio) {
          continue;
        }
        radio.checked = false;
        radio.setAttribute("tabindex", "-1");
      }
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        });
      }
    };
    if (!o) {
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("click", this.handleRadioClick);
    }
  }
  static get validators() {
    const validators = o ? [] : [
      RequiredValidator({
        validationElement: Object.assign(document.createElement("input"), {
          required: true,
          type: "radio",
          // we need an id that's guaranteed to be unique; users will never see this
          name: uniqueId("__wa-radio")
        })
      })
    ];
    return [...super.validators, ...validators];
  }
  get value() {
    if (this.valueHasChanged) {
      return this._value;
    }
    return this._value ?? this.defaultValue;
  }
  set value(val) {
    if (typeof val === "number") val = String(val);
    this.valueHasChanged = true;
    this._value = val;
  }
  /**
   * We use the first available radio as the validationTarget similar to native HTML that shows the validation popup on
   * the first radio element.
   */
  get validationTarget() {
    if (o) return void 0;
    const radio = this.querySelector(":is(wa-radio):not([disabled])");
    if (!radio) return void 0;
    return radio;
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled") || changedProperties.has("value")) {
      this.syncRadioElements();
    }
  }
  formResetCallback(...args) {
    this.value = this.defaultValue;
    super.formResetCallback(...args);
    this.syncRadioElements();
  }
  getAllRadios() {
    return [...this.querySelectorAll("wa-radio")];
  }
  handleLabelClick() {
    this.focus();
  }
  async syncRadioElements() {
    const radios = this.getAllRadios();
    let hasRadioButtons = false;
    radios.forEach((radio, index) => {
      if (radio.appearance === "button") hasRadioButtons = true;
      radio.setAttribute("size", this.size);
      radio.toggleAttribute("data-wa-radio-horizontal", this.orientation !== "vertical");
      radio.toggleAttribute("data-wa-radio-vertical", this.orientation === "vertical");
      radio.toggleAttribute("data-wa-radio-first", index === 0);
      radio.toggleAttribute("data-wa-radio-inner", index !== 0 && index !== radios.length - 1);
      radio.toggleAttribute("data-wa-radio-last", index === radios.length - 1);
      radio.forceDisabled = this.disabled;
    });
    this.hasRadioButtons = hasRadioButtons;
    await Promise.all(
      radios.map(async (radio) => {
        await radio.updateComplete;
        if (!radio.disabled && radio.value === this.value) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      })
    );
    if (this.disabled) {
      radios.forEach((radio) => {
        radio.tabIndex = -1;
      });
    } else {
      const enabledRadios = radios.filter((radio) => !radio.disabled);
      const checkedRadio = enabledRadios.find((radio) => radio.checked);
      if (enabledRadios.length > 0) {
        if (checkedRadio) {
          enabledRadios.forEach((radio) => {
            radio.tabIndex = radio.checked ? 0 : -1;
          });
        } else {
          enabledRadios.forEach((radio, index) => {
            radio.tabIndex = index === 0 ? 0 : -1;
          });
        }
      }
      radios.filter((radio) => radio.disabled).forEach((radio) => {
        radio.tabIndex = -1;
      });
    }
  }
  handleKeyDown(event) {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key) || this.disabled) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    if (radios.length <= 0) {
      return;
    }
    event.preventDefault();
    const oldValue = this.value;
    const checkedRadio = radios.find((radio) => radio.checked) ?? radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    let index = radios.indexOf(checkedRadio) + incr;
    if (!index) index = 0;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    const hasRadioButtons = radios.some((radio) => radio.tagName.toLowerCase() === "wa-radio-button");
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
      if (!hasRadioButtons) {
        radio.setAttribute("tabindex", "-1");
      }
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    if (!hasRadioButtons) {
      radios[index].setAttribute("tabindex", "0");
      radios[index].focus();
    } else {
      radios[index].shadowRoot.querySelector("button").focus();
    }
    if (this.value !== oldValue) {
      this.updateComplete.then(() => {
        this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      });
    }
    event.preventDefault();
  }
  /** Sets focus on the radio group. */
  focus(options) {
    if (this.disabled) return;
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const firstEnabledRadio = radios.find((radio) => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;
    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  }
  render() {
    const hasLabelSlot = this.hasUpdated ? this.hasSlotController.test("label") : this.withLabel;
    const hasHintSlot = this.hasUpdated ? this.hasSlotController.test("hint") : this.withHint;
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHint = this.hint ? true : !!hasHintSlot;
    return x`
      <fieldset
        part="form-control"
        class=${e2({
      "form-control": true,
      "form-control-radio-group": true,
      "form-control-has-label": hasLabel,
      "has-radio-buttons": this.hasRadioButtons
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${e2({
      "has-slotted": hasHint
    })}
          aria-hidden=${hasHint ? "false" : "true"}
          >${this.hint}</slot
        >
      </fieldset>
    `;
  }
};
WaRadioGroup.css = [size_default, form_control_default, radio_group_default];
//
// We need this because if we don't have it, FormValidation yells at us that it's "not focusable".
//   If we use `this.tabIndex = -1` we can't focus the radio inside.
//
WaRadioGroup.shadowRootOptions = { ...WebAwesomeFormAssociatedElement.shadowRootOptions, delegatesFocus: true };
__decorateClass([
  r()
], WaRadioGroup.prototype, "hasRadioButtons", 2);
__decorateClass([
  e("slot:not([name])")
], WaRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  n()
], WaRadioGroup.prototype, "label", 2);
__decorateClass([
  n({ attribute: "hint" })
], WaRadioGroup.prototype, "hint", 2);
__decorateClass([
  n({ reflect: true })
], WaRadioGroup.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaRadioGroup.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], WaRadioGroup.prototype, "orientation", 2);
__decorateClass([
  r()
], WaRadioGroup.prototype, "value", 1);
__decorateClass([
  n({ attribute: "value", reflect: true })
], WaRadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], WaRadioGroup.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaRadioGroup.prototype, "required", 2);
__decorateClass([
  n({ type: Boolean, attribute: "with-label" })
], WaRadioGroup.prototype, "withLabel", 2);
__decorateClass([
  n({ type: Boolean, attribute: "with-hint" })
], WaRadioGroup.prototype, "withHint", 2);
WaRadioGroup = __decorateClass([
  t("wa-radio-group")
], WaRadioGroup);

export {
  WaRadioGroup
};
