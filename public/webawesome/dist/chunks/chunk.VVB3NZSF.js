import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaInclude
} from "./chunk.FT75JBKR.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/include/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-include";
var reactWrapper = o({
  tagName,
  elementClass: WaInclude,
  react: React,
  events: {
    onWaLoad: "wa-load",
    onWaError: "wa-error"
  },
  displayName: "WaInclude"
});
var include_default = reactWrapper;

export {
  include_default
};
