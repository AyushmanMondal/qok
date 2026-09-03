/**
 * posts.js
 * ──────────────────────────────────────────────────────────────────────────────
 * THIS IS THE ONLY FILE YOU EDIT TO PUBLISH A NEW POST.
 *
 * Each post is an object in the POSTS array. The most recent post should be
 * first (the array is displayed top-to-bottom, no automatic sorting).
 *
 * ── POST SHAPE ───────────────────────────────────────────────────────────────
 *
 *   {
 *     id:       'unique-slug',          // URL-safe, no spaces, used for linking
 *     title:    'My Post Title',
 *     date:     '2025-09-03',           // ISO date, displayed as "3 Sep 2025"
 *     tag:      'Update',               // Short label shown as a badge (optional)
 *     summary:  'One sentence shown on the feed card.',
 *     body: [                           // Array of content blocks (in order)
 *       { type: 'text',    value: 'Paragraph of text here.' },
 *       { type: 'image',   url: 'https://...', caption: 'Optional caption' },
 *       { type: 'video',   url: 'https://www.youtube.com/watch?v=...' },
 *       { type: 'link',    url: 'https://...', label: 'Link button label' },
 *       { type: 'heading', value: 'A subheading inside the post' },
 *       { type: 'divider' },
 *     ]
 *   }
 *
 * ── SUPPORTED VIDEO PLATFORMS ────────────────────────────────────────────────
 *   YouTube  → https://www.youtube.com/watch?v=VIDEO_ID
 *              https://youtu.be/VIDEO_ID
 *   Vimeo    → https://vimeo.com/VIDEO_ID
 *
 * ── HOW TO PUBLISH ───────────────────────────────────────────────────────────
 *   1. Copy the template below.
 *   2. Fill in the fields.
 *   3. Add it to the top of the POSTS array (newest first).
 *   4. git commit & push. Done.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const POSTS = [

  /* ── TEMPLATE (copy this to create a new post) ────────────────────────────
  {
    id:      'post-slug-here',
    title:   'Post Title Here',
    date:    '2025-09-03',
    tag:     'Update',
    summary: 'One sentence describing this post for the feed card.',
    body: [
      { type: 'text',    value: 'Your first paragraph.' },
      { type: 'heading', value: 'A Subheading' },
      { type: 'text',    value: 'Another paragraph.' },
      { type: 'image',   url: 'https://...', caption: 'Optional caption' },
      { type: 'video',   url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'link',    url: 'https://...', label: 'Read more' },
    ]
  },
  ── END TEMPLATE ─────────────────────────────────────────────────────────── */

  /* ── EXAMPLE POST — delete this once you have real posts ── */
  {
    id:      'site-launched',
    title:   'Site Launched',
    date:    '2025-09-03',
    tag:     'Announcement',
    summary: 'The academic notes site is now live. Notes and resources will be added progressively.',
    body: [
      { type: 'text', value: 'Welcome to the Academic Notes site. This is where I will publish updates, new resources, and announcements about the project.' },
      { type: 'text', value: 'Notes for various olympiad tracks and entrance examinations are being added progressively. Check back regularly.' },
      { type: 'divider' },
      { type: 'heading', value: 'What to expect' },
      { type: 'text', value: 'Session-wise papers, analysis notes, and curated resources for competitions including IMO, IPhO, IChO, JEE, and more.' },
    ]
  },

];
