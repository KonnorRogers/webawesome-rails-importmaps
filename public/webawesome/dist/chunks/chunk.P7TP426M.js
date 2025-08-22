import {
  o,
  require_react
} from "./chunk.JTWJFQSS.js";
import {
  WaTreeItem
} from "./chunk.F4WPRDCU.js";
import {
  __toESM
} from "./chunk.CLOX737Y.js";

// src/react/tree-item/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-tree-item";
var reactWrapper = o({
  tagName,
  elementClass: WaTreeItem,
  react: React,
  events: {
    onWaExpand: "wa-expand",
    onWaAfterExpand: "wa-after-expand",
    onWaCollapse: "wa-collapse",
    onWaAfterCollapse: "wa-after-collapse",
    onWaLazyChange: "wa-lazy-change",
    onWaLazyLoad: "wa-lazy-load"
  },
  displayName: "WaTreeItem"
});
var tree_item_default = reactWrapper;

export {
  tree_item_default
};
