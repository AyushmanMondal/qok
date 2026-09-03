const _STD_YEARS = [2021,2022,2023,2024,2025,2026,2027];
function sessionYearNode(examKey, year) {
  return {
    name: String(year), type:'folder',
    children:[{ name:'Types of Notes', type:'folder', children:[{
      name:'Official Exam Assessment Content Notes', type:'folder',
      children:[{ name:"Official Problems' Analysis", type:'blank', linksKey:`${examKey}_${year}` }]
    }]}]
  };
}
function sessionsFolder(examKey, label, yearList) {
  return { name:`${label} Sessions`, type:'folder', children:yearList.map(y=>sessionYearNode(examKey,y)) };
}
function stdSessions(examKey, label) { return sessionsFolder(examKey, label, _STD_YEARS); }
function prmoSessions(label) { return sessionsFolder('PRMO', label, PRMO_YEARS); }
function rmoSessions(examKey, label) { return sessionsFolder(examKey, label, RMO_INMO_YEARS); }
function olympiadChildren(examKey, indiaNode) {
  return [
    { name:'International Stage', type:'folder', children:[stdSessions(examKey,'International Stage')] },
    { name:'Previous Stage', type:'folder', children:[{
      name:'Nation Lists', type:'folder',
      children:[{ name:'U.S.', type:'blank' }, indiaNode, { name:'China', type:'blank' }]
    }]}
  ];
}

