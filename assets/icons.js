// Lucide-style outline SVG icons. Заменяет <i data-icon="name"></i> на inline SVG.
const ICONS = {
  home: '<path d="M3 9.5 12 3l9 6.5V21h-6v-6h-6v6H3z"/>',
  message: '<path d="M21 12c0 4.4-4 8-9 8-1.6 0-3.1-.4-4.4-1L3 20l1-4.4C3.4 14.4 3 13.2 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/>',
  sparkles: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  map: '<path d="M3 6 9 4l6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v16M15 6v16"/>',
  pin: '<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.2-1.7l2-1.6-2-3.4-2.3 1a7 7 0 0 0-3-1.7L13 2h-2l-.5 2.6a7 7 0 0 0-3 1.7l-2.3-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .6.1 1.1.2 1.7l-2 1.6 2 3.4 2.3-1a7 7 0 0 0 3 1.7L11 22h2l.5-2.6a7 7 0 0 0 3-1.7l2.3 1 2-3.4-2-1.6c.1-.6.2-1.1.2-1.7z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 4"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/>',
  exit: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  filter: '<path d="M3 5h18l-7 9v6l-4-2v-4z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6l-12 12"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 8v.5"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  edit: '<path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l4-4a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-4 4a5 5 0 0 0 7 7l1-1"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  paperclip: '<path d="M21 11.5 12.5 20a5 5 0 1 1-7-7L14 4.5a3.5 3.5 0 1 1 5 5L10.5 18a2 2 0 1 1-3-3L15 7.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  phone: '<path d="M22 16.9V20a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2L7.6 9.6a16 16 0 0 0 6.8 6.8l1.6-1.6a2 2 0 0 1 2-.5c.7.3 1.5.5 2.3.6.9.1 1.7.9 1.7 2z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  bookOpen: '<path d="M2 4h7a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-7a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h8z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  thumbsUp: '<path d="M7 10v11h11a2 2 0 0 0 2-1.7l1.3-7A2 2 0 0 0 19.3 10H14V5a3 3 0 0 0-3-3l-4 8z"/><path d="M3 10h4v11H3z"/>',
  thumbsDown: '<path d="M17 14V3H6a2 2 0 0 0-2 1.7L2.7 11.7A2 2 0 0 0 4.7 14H10v5a3 3 0 0 0 3 3l4-8z"/><path d="M21 14h-4V3h4z"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"/>',
  arrowLeft: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  external: '<path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
};

function mountIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    const path = ICONS[name];
    if (!path) { el.textContent = '?'; return; }
    const size = el.getAttribute('data-size') || '20';
    const stroke = el.getAttribute('data-stroke') || '1.75';
    el.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" class="ico" aria-hidden="true">${path}</svg>`;
  });
}
document.addEventListener('DOMContentLoaded', mountIcons);
