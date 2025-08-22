import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaInput
} from "./chunk.YLXA4SOJ.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/input/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-input";
var reactWrapper = o({
  tagName,
  elementClass: WaInput,
  react: React,
  events: {
    onWaClear: "wa-clear",
    onWaInvalid: "wa-invalid"
  },
  displayName: "WaInput"
});
var input_default = reactWrapper;

export {
  input_default
};
