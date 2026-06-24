// Переиспользуемые секции: app sidebar / app header / bottom nav / admin sidebar.
// Используется через <div data-partial="app-sidebar" data-active="home"></div>.

const PARTIALS = {
  'app-sidebar': (active) => `
    <aside class="sidebar">
      <a href="05-home.html" class="brand">
        <span class="brand-mark"></span>
        <span>Особое<br>семейное положение</span>
      </a>
      <a href="05-home.html" class="nav-item ${active==='home'?'active':''}"><i data-icon="home"></i> Главная</a>
      <a href="06-chat.html" class="nav-item ${active==='chat'?'active':''}"><i data-icon="message"></i> Чат с навигатором</a>
      <a href="09-recommendations.html" class="nav-item ${active==='recommendations'?'active':''}"><i data-icon="sparkles"></i> Рекомендации</a>
      <a href="07-documents-upload.html" class="nav-item ${active==='documents'?'active':''}"><i data-icon="file"></i> Документы</a>
      <a href="11-places.html" class="nav-item ${active==='places'?'active':''}"><i data-icon="map"></i> Организации</a>
      <a href="13-profile.html" class="nav-item ${active==='profile'?'active':''}"><i data-icon="user"></i> Профиль</a>
      <div style="flex:1"></div>
      <a href="15-settings.html" class="nav-item ${active==='settings'?'active':''}"><i data-icon="settings"></i> Настройки</a>
      <a href="#" class="nav-item"><i data-icon="help"></i> Помощь</a>
      <a href="02-login.html" class="nav-item"><i data-icon="exit"></i> Выйти</a>
    </aside>
  `,
  'admin-sidebar': (active) => `
    <aside class="sidebar admin">
      <a href="16-admin-dashboard.html" class="brand">
        <span class="brand-mark" style="background: var(--brand-blue-600);"></span>
        <span>Особое семейное положение<br><span style="color: var(--brand-blue-600); font-size: 12px;">админ-панель</span></span>
      </a>
      <a href="16-admin-dashboard.html" class="nav-item ${active==='dashboard'?'active':''}"><i data-icon="chart"></i> Дашборд</a>
      <a href="17-admin-knowledge.html" class="nav-item ${active==='knowledge'?'active':''}"><i data-icon="database"></i> База знаний</a>
      <a href="18-admin-stats.html" class="nav-item ${active==='stats'?'active':''}"><i data-icon="chart"></i> Статистика</a>
      <a href="18-admin-stats.html#exports" class="nav-item ${active==='exports'?'active':''}"><i data-icon="download"></i> Выгрузки</a>
      <div style="flex:1"></div>
      <a href="#" class="nav-item"><i data-icon="settings"></i> Настройки</a>
      <a href="02-login.html" class="nav-item"><i data-icon="exit"></i> Выйти</a>
    </aside>
  `,
  'app-header': (title) => `
    <header class="app-header">
      <div class="left">
        <h2 style="font-size: 18px;">${title || ''}</h2>
      </div>
      <div class="right">
        <div class="font-switch" role="group" aria-label="Размер шрифта">
          <button aria-label="Маленький">А</button>
          <button class="active" aria-label="Средний">А</button>
          <button aria-label="Большой">А</button>
        </div>
        <div class="family-id" title="Ваш family_id">
          <span>family_id:</span><span style="color: var(--ink-900);">f7a-9k2-mlv</span>
          <button aria-label="Скопировать"><i data-icon="copy" data-size="16"></i></button>
        </div>
      </div>
    </header>
  `,
  'admin-header': (title) => `
    <header class="app-header">
      <div class="left">
        <h2 style="font-size: 18px;">${title || ''}</h2>
      </div>
      <div class="right">
        <span class="chip chip-outline"><i data-icon="user" data-size="14"></i> admin@osfp.ru</span>
      </div>
    </header>
  `,
  'bottom-nav': (active) => `
    <nav class="bottom-nav" aria-label="Основная навигация">
      <a href="05-home.html" class="${active==='home'?'active':''}"><i data-icon="home" data-size="22"></i> Главная</a>
      <a href="06-chat.html" class="${active==='chat'?'active':''}"><i data-icon="message" data-size="22"></i> Чат</a>
      <a href="09-recommendations.html" class="${active==='recommendations'?'active':''}"><i data-icon="sparkles" data-size="22"></i> Меры</a>
      <a href="07-documents-upload.html" class="${active==='documents'?'active':''}"><i data-icon="file" data-size="22"></i> Документы</a>
      <a href="13-profile.html" class="${active==='profile'?'active':''}"><i data-icon="user" data-size="22"></i> Профиль</a>
    </nav>
  `,
  'public-header': () => `
    <header class="public-header">
      <a href="01-landing.html" class="brand">
        <span class="brand-mark"></span>
        <span>Особое семейное положение</span>
      </a>
      <nav class="flex gap-6 items-center" style="font-size: 15px;">
        <a href="01-landing.html#how" style="color: var(--ink-700);">Как это работает</a>
        <a href="01-landing.html#audience" style="color: var(--ink-700);">Кому подходит</a>
        <a href="#" style="color: var(--ink-700);">О проекте</a>
        <a href="02-login.html" class="btn btn-secondary btn-sm" style="height: 40px;">Войти</a>
        <a href="03-register.html" class="btn btn-primary btn-sm" style="height: 40px;">Начать</a>
      </nav>
    </header>
  `,
  'public-footer': () => `
    <footer class="public-footer">
      <div>
        <div style="color: var(--ink-700); font-weight: 500;">Особое семейное положение</div>
        <div class="mt-2">AI-навигатор поддержки для семей с детьми с ОВЗ, инвалидов, опекунов и попечителей. Иркутская область.</div>
      </div>
      <nav>
        <a href="#" style="color: var(--ink-500);">Политика обработки данных</a>
        <a href="#" style="color: var(--ink-500);">Соглашение</a>
        <a href="#" style="color: var(--ink-500);">Доступность</a>
        <a href="#" style="color: var(--ink-500);">Контакты</a>
      </nav>
    </footer>
  `,
};

function mountPartials() {
  document.querySelectorAll('[data-partial]').forEach(el => {
    const name = el.getAttribute('data-partial');
    const active = el.getAttribute('data-active') || '';
    const title = el.getAttribute('data-title') || '';
    const fn = PARTIALS[name];
    if (!fn) return;
    const arg = name.endsWith('header') ? title : active;
    el.outerHTML = fn(arg);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  mountPartials();
  if (typeof mountIcons === 'function') mountIcons();
});
