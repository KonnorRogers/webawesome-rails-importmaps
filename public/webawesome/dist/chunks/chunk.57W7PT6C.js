import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaTooltip
} from "./chunk.YJKK64TL.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/tooltip/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-tooltip";
var reactWrapper = o({
  tagName,
  elementClass: WaTooltip,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaTooltip"
});
var tooltip_default = reactWrapper;

export {
  tooltip_default
};
