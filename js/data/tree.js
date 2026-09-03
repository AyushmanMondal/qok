/**
 * tree.js
 * ──────────────────────────────────────────────────────────────────────────────
 * The full navigation tree. Every folder and leaf node lives here.
 *
 * Node shape:
 *   { name, type, fullForm?, disabled?, children?, linksKey? }
 *
 *   type: 'folder' | 'blank'
 *   fullForm:  shown as subtitle beneath the name
 *   disabled:  greyed out, not clickable
 *   linksKey:  key into SESSION_LINKS for leaf nodes
 *
 * Depends on: exams.js (stdSessions, prmoSessions, rmoSessions, olympiadChildren)
 *
 * ── HOW TO ADD A NEW EXAM ────────────────────────────────────────────────────
 * 1. Add its key + year range to links.js (SESSION_LINKS initialisation).
 * 2. Add the node below in the right section.
 * 3. If it uses a custom year range, add a helper in exams.js or call
 *    sessionsFolder(key, label, yearArray) directly here.
 * ────────────────────────────────────────────────────────────────────────────
 */

/* ══════════════════════════════════════════════════════════════════════════════
   INDIA — Mathematics Olympiad track
   ══════════════════════════════════════════════════════════════════════════════ */

const mathIndiaNode = {
  name: 'India', type: 'folder',
  children: [
    { name: 'I.O.Q.M.', fullForm: 'Indian Olympiad Qualifier in Mathematics', type: 'folder',
      children: [stdSessions('IOQM', 'I.O.Q.M.')] },
    { name: 'P.R.M.O.', fullForm: 'Pre-Regional Mathematical Olympiad', type: 'folder',
      children: [prmoSessions('P.R.M.O.')] },
    { name: 'R.M.O.', fullForm: 'Regional Mathematical Olympiad', type: 'folder',
      children: [rmoSessions('RMO', 'R.M.O.')] },
    { name: 'I.N.M.O.', fullForm: 'Indian National Mathematical Olympiad', type: 'folder',
      children: [rmoSessions('INMO', 'I.N.M.O.')] }
  ]
};

/* ══════════════════════════════════════════════════════════════════════════════
   INDIA — Informatics Olympiad track
   ══════════════════════════════════════════════════════════════════════════════ */

const informaticsIndiaNode = {
  name: 'India', type: 'folder',
  children: [
    { name: 'Z.I.O.', fullForm: 'Zonal Informatics Olympiad', type: 'folder',
      children: [stdSessions('ZIO', 'Z.I.O.')] },
    { name: 'Z.C.O.', fullForm: 'Zonal Computing Olympiad', type: 'folder',
      children: [stdSessions('ZCO', 'Z.C.O.')] },
    { name: 'I.N.O.I.', fullForm: 'Indian National Olympiad in Informatics', type: 'folder',
      children: [stdSessions('INOI', 'I.N.O.I.')] }
  ]
};

/* ══════════════════════════════════════════════════════════════════════════════
   INDIA — Physics Olympiad track
   ══════════════════════════════════════════════════════════════════════════════ */

const physicsIndiaNode = {
  name: 'India', type: 'folder',
  children: [
    { name: 'N.S.E.P.', fullForm: 'National Standard Examination in Physics', type: 'folder',
      children: [stdSessions('NSEP', 'N.S.E.P.')] },
    { name: 'I.N.Ph.O.', fullForm: 'Indian National Physics Olympiad', type: 'folder',
      children: [stdSessions('INPHO', 'I.N.Ph.O.')] }
  ]
};

/* ══════════════════════════════════════════════════════════════════════════════
   INDIA — Chemistry Olympiad track
   ══════════════════════════════════════════════════════════════════════════════ */

const chemistryIndiaNode = {
  name: 'India', type: 'folder',
  children: [
    { name: 'N.S.E.C.', fullForm: 'National Standard Examination in Chemistry', type: 'folder',
      children: [stdSessions('NSEC', 'N.S.E.C.')] },
    { name: 'I.N.Ch.O.', fullForm: 'Indian National Chemistry Olympiad', type: 'folder',
      children: [stdSessions('INCHO', 'I.N.Ch.O.')] }
  ]
};

/* ══════════════════════════════════════════════════════════════════════════════
   ACADEMIC COMPETITIONS
   ══════════════════════════════════════════════════════════════════════════════ */

const imoNode = {
  name: 'International Mathematical Olympiad', type: 'folder',
  children: [
    { name: 'International Stage', type: 'folder',
      children: [stdSessions('IMOINTL', 'International Stage')] },
    { name: 'Previous Stages', type: 'folder',
      children: [{
        name: "Nation's Track", type: 'folder',
        children: [{
          name: 'Nation Lists', type: 'folder',
          children: [
            mathIndiaNode,
            { name: 'U.S.', type: 'folder', children: [
              { name: 'American Math Contest 8',  type: 'blank' },
              { name: 'American Math Contest 10', type: 'blank' },
              { name: 'American Math Contest 12', type: 'blank' }
            ]},
            { name: 'China', type: 'blank' }
          ]
        }]
      }]
    }
  ]
};

const academicCompetitions = {
  name: 'Academic Competitions', type: 'folder',
  children: [
    imoNode,
    { name: 'International Olympiad in Informatics', type: 'folder',
      children: olympiadChildren('IOIINTL', informaticsIndiaNode) },
    { name: 'International Physics Olympiad', type: 'folder',
      children: olympiadChildren('IPHOINTL', physicsIndiaNode) },
    { name: 'International Chemistry Olympiad', type: 'folder',
      children: olympiadChildren('ICHOINTL', chemistryIndiaNode) },
    { name: 'William Lowell Putnam Mathematical Competition', type: 'folder',
      children: [stdSessions('PUTNAM', 'William Lowell Putnam Mathematical Competition')] },
    { name: 'Simon Marais Mathematics Competition', type: 'folder',
      children: [stdSessions('SIMON', 'Simon Marais Mathematics Competition')] },
    { name: 'Stanford Math Tournament',                              type: 'folder', children: [] },
    { name: 'Harvard-MIT Mathematics Tournament',                   type: 'folder', children: [] },
    { name: 'Princeton University Mathematics',                     type: 'folder', children: [] },
    { name: 'Duke Math Meet',                                        type: 'folder', children: [] },
    { name: 'North American Mathematics Olympiad',                  type: 'folder', children: [] },
    { name: 'Carnegie Mellon Informatics and Mathematics Competition', type: 'folder', children: [] }
  ]
};

/* ══════════════════════════════════════════════════════════════════════════════
   ACADEMIC ENTRANCE TESTS
   ══════════════════════════════════════════════════════════════════════════════ */

const academicEntranceTests = {
  name: 'Academic Entrance Tests', type: 'folder',
  children: [
    { name: 'J.E.E. Exams', fullForm: 'Joint Entrance Examinations', type: 'folder',
      children: [
        { name: 'J.E.E. Mains',    type: 'folder', children: [stdSessions('JEEMAINS', 'J.E.E. Mains')] },
        { name: 'J.E.E. Advanced', type: 'folder', children: [stdSessions('JEEADV',   'J.E.E. Advanced')] }
      ]
    },
    { name: 'N.E.E.T.', fullForm: 'National Eligibility cum Entrance Test', type: 'blank' },
    { name: 'Gaokao',   type: 'folder', children: [stdSessions('GAOKAO',   'GAOKAO')] },
    { name: 'Zhongkao', type: 'folder', children: [stdSessions('ZHONGKAO', 'ZHONGKAO')] },
    { name: 'SAT',      type: 'folder', children: [stdSessions('SAT',  'SAT')] },
    { name: 'SSAT',     type: 'folder', children: [stdSessions('SSAT', 'SSAT')] },
    { name: 'ACT',      type: 'folder', children: [stdSessions('ACT',  'ACT')] }
  ]
};

/* ══════════════════════════════════════════════════════════════════════════════
   ACADEMIC SUBJECTS
   ══════════════════════════════════════════════════════════════════════════════ */

const academicSubjects = {
  name: 'Academic Subjects', type: 'folder',
  children: [{
    name: 'Lists', type: 'folder',
    children: [{
      name: '[1]', type: 'folder',
      children: [{
        name: 'Broad Subjects', type: 'folder',
        children: [
          { name: 'Mathematics', type: 'blank' },
          { name: 'C.S.', fullForm: 'Computer Science', type: 'blank' },
          { name: 'Physics',   type: 'blank' },
          { name: 'Chemistry', type: 'blank' },
          { name: 'Biology',   type: 'blank' }
        ]
      }]
    }]
  }]
};

/* ══════════════════════════════════════════════════════════════════════════════
   ROOT
   ══════════════════════════════════════════════════════════════════════════════ */

const notesNode = {
  name: 'Notes', type: 'folder',
  children: [
    academicCompetitions,
    academicEntranceTests,
    academicSubjects,
    { name: 'Academia', type: 'blank' }
  ]
};

const ROOT = {
  name: 'Home', type: 'folder',
  children: [
    { name: 'About The Project', type: 'blank' },
    notesNode
  ]
};
     
