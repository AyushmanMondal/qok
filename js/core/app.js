/**
 * app.js
 * ──────────────────────────────────────────────────────────────────────────────
 * Navigation state machine. Owns the stack, exposes the global App object,
 * and bootstraps the first render.
 *
 * Depends on: tree.js (ROOT), render.js (Render)
 */

const App = (() => {

  let stack = [ROOT];

  function _render() {
    Render.render(stack, goBack, openNode, jumpTo);
  }

  function goBack() {
    if (stack.length > 1) { stack.pop(); _render(); }
  }

  function openNode(node) {
    if (node.disabled) return;
    stack.push(node);
    _render();
  }

  function jumpTo(idx) {
    stack = stack.slice(0, idx + 1);
    _render();
  }

  /* Boot */
  _render();

  return { goBack, openNode, jumpTo };

})();
