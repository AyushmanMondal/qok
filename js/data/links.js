/**
 * links.js
 * ──────────────────────────────────────────────────────────────────────────────
 * All resource URLs keyed by "EXAMKEY_YEAR".
 *
 * HOW TO ADD A LINK
 * -----------------
 * Find the exam key (e.g. "IOQM") and the year, then set pdf and/or image:
 *
 *   SESSION_LINKS["IOQM_2023"] = {
 *     pdf:   "https://example.com/ioqm-2023.pdf",
 *     image: "https://example.com/ioqm-2023.jpg"
 *   };
 *
 * Keys for exams with standard year range (2021-2027):
 *   IOQM, NSEP, INPHO, NSEC, INCHO, ZIO, ZCO, INOI,
 *   JEEMAINS, JEEADV, NEET, GAOKAO, ZHONGKAO, SAT, SSAT, ACT,
 *   IMOINTL, IOIINTL, IPHOINTL, ICHOINTL, PUTNAM, SIMON
 *
 * Keys for exams with custom year ranges:
 *   PRMO  → 2012-2019
 *   RMO   → 2000-2026
 *   INMO  → 2000-2026
 */

const SESSION_LINKS = {};

/* Helper — bulk-initialise a key list × year list with empty slots */
function _initLinks(keys, years) {
  keys.forEach(k => {
    years.forEach(y => {
      SESSION_LINKS[`${k}_${y}`] = { pdf: '', image: '' };
    });
  });
}

/* Standard exams */
const _STANDARD_KEYS = [
  'IOQM','NSEP','INPHO','NSEC','INCHO','ZIO','ZCO','INOI',
  'JEEMAINS','JEEADV','NEET','GAOKAO','ZHONGKAO','SAT','SSAT','ACT',
  'IMOINTL','IOIINTL','IPHOINTL','ICHOINTL','PUTNAM','SIMON'
];
const _STANDARD_YEARS = [2021,2022,2023,2024,2025,2026,2027];
_initLinks(_STANDARD_KEYS, _STANDARD_YEARS);

/* PRMO — 2012 to 2019 */
const PRMO_YEARS = [2012,2013,2014,2015,2016,2017,2018,2019];
_initLinks(['PRMO'], PRMO_YEARS);

/* RMO / INMO — 2000 to 2026 */
const RMO_INMO_YEARS = Array.from({ length: 27 }, (_, i) => 2000 + i);
_initLinks(['RMO','INMO'], RMO_INMO_YEARS);

/* ── Add your links below this line ── */
// SESSION_LINKS["IOQM_2023"] = { pdf: "", image: "" };
