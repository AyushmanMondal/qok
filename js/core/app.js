const App = (() => {
  let stack = [ROOT];

  function switchTab(tab) {
    document.getElementById('panelPosts').style.display = tab==='posts' ? '' : 'none';
    document.getElementById('panelNotes').style.display = tab==='notes' ? '' : 'none';
    document.getElementById('tabPosts').classList.toggle('active', tab==='posts');
    document.getElementById('tabNotes').classList.toggle('active', tab==='notes');
    if (tab==='posts') PostsRender.renderFeed(); else _renderNotes();
  }

  function _renderNotes() { Render.render(stack, goBack, openNode, jumpTo, 'notesContent'); }

  function goBack() { if(stack.length>1){stack.pop();_renderNotes();} }
  function openNode(node) { if(node.disabled)return; stack.push(node); _renderNotes(); }
  function jumpTo(idx) { stack=stack.slice(0,idx+1); _renderNotes(); }

  switchTab('posts');
  return { switchTab, goBack, openNode, jumpTo };
})();
