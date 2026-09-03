const Render = (() => {
  const $backBtn    = () => document.getElementById('backBtn');
  const $levelTitle = () => document.getElementById('levelTitle');
  const $breadcrumb = () => document.getElementById('breadcrumb');

  function renderBreadcrumb(stack, onJump) {
    const el = $breadcrumb(); el.innerHTML = '';
    stack.forEach((node, idx) => {
      if (idx === 0) return;
      if (idx > 1) { const sep=document.createElement('span'); sep.className='sep'; sep.textContent='/'; el.appendChild(sep); }
      const crumb = document.createElement('span');
      crumb.className = 'crumb' + (idx===stack.length-1 ? ' current' : '');
      crumb.textContent = node.name;
      if (idx !== stack.length-1) crumb.onclick = () => onJump(idx);
      el.appendChild(crumb);
    });
  }

  function renderBlank(node, content) {
    const links = node.linksKey ? SESSION_LINKS[node.linksKey] : null;
    const hasLinks = links && (links.pdf || links.image);
    if (hasLinks) {
      const panel = document.createElement('div'); panel.className='link-panel';
      if (links.pdf) { const a=document.createElement('a'); a.className='link-btn'; a.href=links.pdf; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='View PDF'; panel.appendChild(a); }
      if (links.image) { const a=document.createElement('a'); a.className='link-btn'; a.href=links.image; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='View Image'; panel.appendChild(a); }
      content.appendChild(panel);
    } else {
      const e=document.createElement('div'); e.className='empty-state'; content.appendChild(e);
    }
  }

  function renderGrid(children, onOpen, content) {
    if (children.length===0) { const e=document.createElement('div'); e.className='empty-state'; content.appendChild(e); return; }
    const grid=document.createElement('div'); grid.className='grid';
    children.forEach(node => {
      const item=document.createElement('div');
      item.className='item'+(node.disabled?' disabled':'');
      item.innerHTML=`<div class="item-icon">${folderIcon(node.disabled)}</div><div class="item-text"><div class="name">${node.name}</div>${node.fullForm?`<div class="subtitle">${node.fullForm}</div>`:''}</div>`;
      if (!node.disabled) item.onclick=()=>onOpen(node); else item.setAttribute('aria-disabled','true');
      grid.appendChild(item);
    });
    content.appendChild(grid);
  }

  function render(stack, onBack, onOpen, onJump, contentId='notesContent') {
    const current=stack[stack.length-1]; const isRoot=stack.length===1;
    $backBtn().disabled=isRoot;
    $levelTitle().textContent=isRoot?'':current.name;
    renderBreadcrumb(stack, onJump);
    const content=document.getElementById(contentId); content.innerHTML='';
    if (current.type==='blank') renderBlank(current,content); else renderGrid(current.children||[],onOpen,content);
  }

  return { render };
})();

      
