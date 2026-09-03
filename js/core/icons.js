function folderIcon(disabled=false) {
  const fill  = disabled ? '#2a2a2a' : '#2f6fed';
  const fillD = disabled ? '#222222' : '#1a46bb';
  return `<svg width="38" height="28" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5.5 C2 4.1 3.1 3 4.5 3 H13 L15.5 5.5 H33.5 C34.9 5.5 36 6.6 36 8 V23 C36 24.4 34.9 25.5 33.5 25.5 H4.5 C3.1 25.5 2 24.4 2 23 Z" fill="${fill}"/>
    <path d="M2 10 H36 V23 C36 24.4 34.9 25.5 33.5 25.5 H4.5 C3.1 25.5 2 24.4 2 23 Z" fill="${fillD}"/>
  </svg>`;
}
