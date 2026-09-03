const SESSION_LINKS = {};
function _initLinks(keys, years) {
  keys.forEach(k => years.forEach(y => { SESSION_LINKS[`${k}_${y}`] = { pdf:'', image:'' }; }));
}
const _STANDARD_KEYS = [
  'IOQM','NSEP','INPHO','NSEC','INCHO','ZIO','ZCO','INOI',
  'JEEMAINS','JEEADV','NEET','GAOKAO','ZHONGKAO','SAT','SSAT','ACT',
  'IMOINTL','IOIINTL','IPHOINTL','ICHOINTL','PUTNAM','SIMON'
];
_initLinks(_STANDARD_KEYS, [2021,2022,2023,2024,2025,2026,2027]);
const PRMO_YEARS = [2012,2013,2014,2015,2016,2017,2018,2019];
_initLinks(['PRMO'], PRMO_YEARS);
const RMO_INMO_YEARS = Array.from({length:27},(_,i)=>2000+i);
_initLinks(['RMO','INMO'], RMO_INMO_YEARS);
// ── Add your links below ──
// SESSION_LINKS["IOQM_2023"] = { pdf: "", image: "" };

