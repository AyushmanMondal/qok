/**
 * posts-render.js
 * ──────────────────────────────────────────────────────────────────────────────
 * Renders the Posts tab: feed list view and single-post detail view.
 *
 * Depends on: posts.js (POSTS array)
 * Called by:  app.js
 */

const PostsRender = (() => {

  const $el = () => document.getElementById('postsContent');

  /* ── Date formatter ── */
  function fmtDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${d} ${months[m - 1]} ${y}`;
  }

  /* ── Embed URL converters ── */
  function toEmbedUrl(raw) {
    // YouTube long form
    let m = raw.match(/youtube\.com\/watch\?v=([\w-]+)/);
    if (m) return `https://www.youtube.com/embed/${m[1]}`;
    // YouTube short
    m = raw.match(/youtu\.be\/([\w-]+)/);
    if (m) return `https://www.youtube.com/embed/${m[1]}`;
    // Vimeo
    m = raw.match(/vimeo\.com\/(\d+)/);
    if (m) return `https://player.vimeo.com/video/${m[1]}`;
    return null; // unsupported platform — show a fallback link
  }

  /* ── Render a single body block ── */
  function renderBlock(block) {
    switch (block.type) {

      case 'text': {
        const p = document.createElement('p');
        p.className = 'post-body-text';
        p.textContent = block.value;
        return p;
      }

      case 'heading': {
        const h = document.createElement('h3');
        h.className = 'post-body-heading';
        h.textContent = block.value;
        return h;
      }

      case 'divider': {
        const hr = document.createElement('hr');
        hr.className = 'post-divider';
        return hr;
      }

      case 'image': {
        const wrap = document.createElement('figure');
        wrap.className = 'post-figure';
        const img = document.createElement('img');
        img.src = block.url;
        img.alt = block.caption || '';
        img.className = 'post-image';
        img.loading = 'lazy';
        wrap.appendChild(img);
        if (block.caption) {
          const cap = document.createElement('figcaption');
          cap.className = 'post-caption';
          cap.textContent = block.caption;
          wrap.appendChild(cap);
        }
        return wrap;
      }

      case 'video': {
        const embedUrl = toEmbedUrl(block.url);
        const wrap = document.createElement('div');
        wrap.className = 'post-video-wrap';
        if (embedUrl) {
          const iframe = document.createElement('iframe');
          iframe.src = embedUrl;
          iframe.setAttribute('allowfullscreen', '');
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
          iframe.setAttribute('frameborder', '0');
          iframe.className = 'post-video';
          wrap.appendChild(iframe);
        } else {
          // Unsupported platform: show a plain link button
          const a = document.createElement('a');
          a.href = block.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'post-link-btn';
          a.textContent = '▶ Watch Video';
          wrap.appendChild(a);
        }
        return wrap;
      }

      case 'link': {
        const wrap = document.createElement('div');
        wrap.className = 'post-link-wrap';
        const a = document.createElement('a');
        a.href = block.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'post-link-btn';
        a.textContent = block.label || block.url;
        wrap.appendChild(a);
        return wrap;
      }

      default:
        return null;
    }
  }

  /* ── Feed (list of posts) ── */
  function renderFeed() {
    const el = $el();
    el.innerHTML = '';

    if (!POSTS || POSTS.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'posts-empty';
      empty.textContent = 'No posts yet.';
      el.appendChild(empty);
      return;
    }

    const feed = document.createElement('div');
    feed.className = 'posts-feed';

    POSTS.forEach(post => {
      const card = document.createElement('div');
      card.className = 'post-card';
      card.onclick = () => renderPost(post);

      card.innerHTML = `
        <div class="post-card-meta">
          <span class="post-date">${fmtDate(post.date)}</span>
          ${post.tag ? `<span class="post-tag">${post.tag}</span>` : ''}
        </div>
        <div class="post-card-title">${post.title}</div>
        ${post.summary ? `<div class="post-card-summary">${post.summary}</div>` : ''}
        <div class="post-card-arrow">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      `;

      feed.appendChild(card);
    });

    el.appendChild(feed);
  }

  /* ── Single post detail ── */
  function renderPost(post) {
    const el = $el();
    el.innerHTML = '';

    const article = document.createElement('article');
    article.className = 'post-detail';

    // Back to feed button
    const backRow = document.createElement('div');
    backRow.className = 'post-back-row';
    const backBtn = document.createElement('button');
    backBtn.className = 'post-back-btn';
    backBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      All Posts
    `;
    backBtn.onclick = renderFeed;
    backRow.appendChild(backBtn);
    article.appendChild(backRow);

    // Header
    const header = document.createElement('header');
    header.className = 'post-header';
    header.innerHTML = `
      <div class="post-detail-meta">
        <span class="post-date">${fmtDate(post.date)}</span>
        ${post.tag ? `<span class="post-tag">${post.tag}</span>` : ''}
      </div>
      <h2 class="post-detail-title">${post.title}</h2>
    `;
    article.appendChild(header);

    // Body blocks
    const body = document.createElement('div');
    body.className = 'post-body';
    (post.body || []).forEach(block => {
      const el = renderBlock(block);
      if (el) body.appendChild(el);
    });
    article.appendChild(body);

    el.appendChild(article);
  }

  return { renderFeed, renderPost };

})();
      
