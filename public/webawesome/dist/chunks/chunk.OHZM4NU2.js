import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaCopyButton
} from "./chunk.XYZVCPDS.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/copy-button/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-copy-button";
var reactWrapper = o({
  tagName,
  elementClass: WaCopyButton,
  react: React,
  events: {
    onWaCopy: "wa-copy",
    onWaError: "wa-error"
  },
  displayName: "WaCopyButton"
});
var copy_button_default = reactWrapper;

export {
  copy_button_default
};
