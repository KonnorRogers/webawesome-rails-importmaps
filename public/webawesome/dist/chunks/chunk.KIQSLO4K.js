import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaAnimation
} from "./chunk.MK5RUBNH.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/animation/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-animation";
var reactWrapper = o({
  tagName,
  elementClass: WaAnimation,
  react: React,
  events: {
    onWaCancel: "wa-cancel",
    onWaFinish: "wa-finish",
    onWaStart: "wa-start"
  },
  displayName: "WaAnimation"
});
var animation_default = reactWrapper;

export {
  animation_default
};
