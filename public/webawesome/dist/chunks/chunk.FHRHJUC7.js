// src/internal/event.ts
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}
function getTargetElement(event) {
  if (event.target instanceof Node) {
    switch (event.target.nodeType) {
      case Node.TEXT_NODE:
      case Node.COMMENT_NODE:
        return event.target.parentNode;
      case Node.ELEMENT_NODE:
        return event.target;
    }
  }
  return null;
}

export {
  waitForEvent,
  getTargetElement
};
