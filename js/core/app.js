/**
 * app.js
 * ──────────────────────────────────────────────────────────────────────────────
 * Tab manager + notes navigation state machine.
 *
 * Tabs: 'posts' | 'notes'
 * Within notes: stack-based folder navigation (unchanged from before).
 *
 * Depends on: tree.js (ROOT), render.js (Render), posts-render.js (PostsRender)
 */

const App = (() => {

  let activeTab = 'posts';
  let stack = [ROOT];

  /* ── Tab switching ── */
  function switchTab(tab) {
    activeTab = tab;

    document.getElementById('panelPosts').style.display = tab === 'posts' ? '' : 'none';
    document.getElementById('panelNotes').style.display = tab === 'notes' ? '' : 'none';

    document.getElementById('tabPosts').classList.toggle('active', tab === 'posts');
    document.getElementById('tabNotes').classList.toggle('active', tab === 'notes');

    if (tab === 'posts') {
      PostsRender.renderFeed();
    } else {
      _renderNotes();
    }
  }

  /* ── Notes navigation ── */
  function _renderNotes() {
    Render.render(
      stack,
      goBack,
      openNode,
      jumpTo,
      'notesContent'   // pass the correct content container id
    );
  }

  function goBack() {
    if (stack.length > 1) { stack.pop(); _renderNotes(); }
  }

  function openNode(node) {
    if (node.disabled) return;
    stack.push(node);
    _renderNotes();
  }

  function jumpTo(idx) {
    stack = stack.slice(0, idx + 1);
    _renderNotes();
  }

  /* ── Boot: start on Posts tab ── */
  switchTab('posts');

  return { switchTab, goBack, openNode, jumpTo };

})();
      
