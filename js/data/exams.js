/**
 * exams.js
 * ──────────────────────────────────────────────────────────────────────────────
 * Pure factory functions that build the repeating session/year sub-tree
 * shared by every exam node. Nothing in here is exam-specific; it just
 * knows the shape of a year folder.
 *
 * Depends on: links.js (SESSION_LINKS, PRMO_YEARS, RMO_INMO_YEARS)
 */

/**
 * Build a single year node.
 * @param {string} examKey  - e.g. "IOQM"
 * @param {number} year     - e.g. 2023
 * @returns {object} folder node
 */
function sessionYearNode(examKey, year) {
  return {
    name: String(year),
    type: 'folder',
    children: [{
      name: 'Types of Notes',
      type: 'folder',
      children: [{
        name: 'Official Exam Assessment Content Notes',
        type: 'folder',
        children: [{
          name: "Official Problems' Analysis",
          type: 'blank',
          linksKey: `${examKey}_${year}`
        }]
      }]
    }]
  };
}

/**
 * Build a Sessions folder for a given exam and year list.
 * @param {string}   examKey   - e.g. "IOQM"
 * @param {string}   label     - display name, e.g. "I.O.Q.M."
 * @param {number[]} yearList  - array of years
 * @returns {object} folder node
 */
function sessionsFolder(examKey, label, yearList) {
  return {
    name: `${label} Sessions`,
    type: 'folder',
    children: yearList.map(y => sessionYearNode(examKey, y))
  };
}

/* Convenience wrappers for the two most-used year ranges */
const _STD_YEARS  = [2021,2022,2023,2024,2025,2026,2027];

function stdSessions(examKey, label) {
  return sessionsFolder(examKey, label, _STD_YEARS);
}
function prmoSessions(label) {
  return sessionsFolder('PRMO', label, PRMO_YEARS);
}
function rmoSessions(examKey, label) {
  return sessionsFolder(examKey, label, RMO_INMO_YEARS);
}

/**
 * Build the standard children for an international olympiad folder.
 * @param {string} examKey    - international stage key, e.g. "IPHOINTL"
 * @param {object} indiaNode  - pre-built India subtree
 * @returns {object[]}
 */
function olympiadChildren(examKey, indiaNode) {
  return [
    {
      name: 'International Stage',
      type: 'folder',
      children: [stdSessions(examKey, 'International Stage')]
    },
    {
      name: 'Previous Stage',
      type: 'folder',
      children: [{
        name: 'Nation Lists',
        type: 'folder',
        children: [{ name: 'U.S.', type: 'blank' }, indiaNode, { name: 'China', type: 'blank' }]
      }]
    }
  ];
}
