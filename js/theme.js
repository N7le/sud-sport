// =====================================================================
// SUD SPORT — LIGHT / DARK THEME TOGGLE
// Loaded in <head> right after the theme stylesheet so the saved theme
// applies before the page paints (no flash of the wrong theme).
// Light = css/theme-light.css enabled; dark = it is disabled.
// =====================================================================

(function () {
  const STORAGE_KEY = 'sud-sport-theme';
  const DEFAULT_THEME = 'light';

  function readSaved() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage blocked (private mode etc.): the toggle still works for this page view
    }
  }

  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    const sheet = document.getElementById('themeLight');
    if (sheet) sheet.disabled = theme !== 'light';

    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
      btn.setAttribute('aria-label', label);
      btn.title = label;
    });
  }

  apply(readSaved() || DEFAULT_THEME);

  document.addEventListener('DOMContentLoaded', () => {
    apply(document.documentElement.dataset.theme);

    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        apply(next);
        save(next);
      });
    });
  });
})();
