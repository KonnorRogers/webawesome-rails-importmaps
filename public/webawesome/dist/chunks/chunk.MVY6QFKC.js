import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaDialog
} from "./chunk.FZ2DNQNN.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/dialog/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-dialog";
var reactWrapper = o({
  tagName,
  elementClass: WaDialog,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaDialog"
});
var dialog_default = reactWrapper;

export {
  dialog_default
};
