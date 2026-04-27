/*!
 * Overland Dashboard — overland.js v1.0.0
 * Handles: theme switching, sidebar collapse, mobile nav, active nav state
 * No external dependencies — vanilla JS only.
 */

(function () {
  'use strict';

  /* ── Constants ──────────────────────────────────────────────────────────── */
  var THEME_KEY   = 'overland-theme';
  var SIDEBAR_KEY = 'overland-sidebar';
  var LIGHT       = 'light';
  var DARK        = 'dark';

  /* ── Shorthand helpers ──────────────────────────────────────────────────── */
  function $  (sel) { return document.querySelector(sel); }
  function $$ (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* =========================================================================
     THEME
     ========================================================================= */

  /**
   * Returns the persisted theme, falling back to the OS preference, then light.
   */
  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? DARK : LIGHT;
  }

  /**
   * Applies a theme to the document and syncs the toggle button icon.
   * @param {string} theme  'light' | 'dark'
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    syncThemeButton(theme);
  }

  /**
   * Updates the theme toggle button icon and aria-label.
   * @param {string} theme
   */
  function syncThemeButton(theme) {
    var btn = $('#ol-theme-toggle');
    if (!btn) return;
    var icon = btn.querySelector('i');
    if (icon) {
      icon.className = (theme === DARK) ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
    btn.setAttribute('aria-label', (theme === DARK) ? 'Switch to light mode' : 'Switch to dark mode');
  }

  /** Toggles between light and dark. */
  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-bs-theme') || LIGHT;
    applyTheme(current === DARK ? LIGHT : DARK);
  }

  /* =========================================================================
     SIDEBAR — DESKTOP COLLAPSE
     ========================================================================= */

  /**
   * Collapses or expands the sidebar (desktop only).
   * @param {boolean} collapsed
   */
  function applySidebarState(collapsed) {
    var sidebar  = $('#ol-sidebar');
    var wrapper  = $('#ol-main-wrapper');
    if (!sidebar) return;

    if (collapsed) {
      sidebar.classList.add('collapsed');
      if (wrapper) wrapper.classList.add('sidebar-collapsed');
      localStorage.setItem(SIDEBAR_KEY, 'collapsed');
    } else {
      sidebar.classList.remove('collapsed');
      if (wrapper) wrapper.classList.remove('sidebar-collapsed');
      localStorage.setItem(SIDEBAR_KEY, 'open');
    }
  }

  /** Reads the persisted sidebar state (desktop). */
  function getSidebarCollapsed() {
    return localStorage.getItem(SIDEBAR_KEY) === 'collapsed';
  }

  /** Toggles sidebar collapsed state. */
  function toggleSidebar() {
    var sidebar = $('#ol-sidebar');
    if (!sidebar) return;
    applySidebarState(!sidebar.classList.contains('collapsed'));
  }

  /* =========================================================================
     SIDEBAR — MOBILE OFFCANVAS
     ========================================================================= */

  function openMobileSidebar() {
    var sidebar  = $('#ol-sidebar');
    var backdrop = $('#ol-sidebar-backdrop');
    if (!sidebar) return;
    sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    var sidebar  = $('#ol-sidebar');
    var backdrop = $('#ol-sidebar-backdrop');
    if (!sidebar) return;
    sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = '';
  }

  /* =========================================================================
     ACTIVE NAV LINK
     ========================================================================= */

  /**
   * Marks the sidebar link whose `href` filename matches the current page.
   */
  function markActiveNavLink() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    $$('.ol-nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var linkPage = href.split('/').pop();
      link.classList.toggle('active', linkPage === page);
    });
  }

  /* =========================================================================
     SORT TABLE
     ========================================================================= */

  /**
   * Attaches client-side sort behaviour to any .ol-table with data-sortable.
   */
  function initSortableTables() {
    $$('.ol-table[data-sortable] thead th[data-col]').forEach(function (th) {
      th.addEventListener('click', function () {
        var table   = th.closest('table');
        var tbody   = table.querySelector('tbody');
        var col     = parseInt(th.getAttribute('data-col'), 10);
        var dir     = th.getAttribute('data-dir') === 'asc' ? 'desc' : 'asc';

        // Reset all headers
        table.querySelectorAll('thead th').forEach(function (h) {
          h.removeAttribute('data-dir');
          h.classList.remove('sorted-asc', 'sorted-desc');
        });

        th.setAttribute('data-dir', dir);
        th.classList.add(dir === 'asc' ? 'sorted-asc' : 'sorted-desc');

        var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
        rows.sort(function (a, b) {
          var aVal = (a.cells[col] ? a.cells[col].textContent : '').trim();
          var bVal = (b.cells[col] ? b.cells[col].textContent : '').trim();
          var cmp  = aVal.localeCompare(bVal, undefined, { numeric: true, sensitivity: 'base' });
          return dir === 'asc' ? cmp : -cmp;
        });
        rows.forEach(function (row) { tbody.appendChild(row); });
      });
    });
  }

  /* =========================================================================
     TABLE SEARCH (client-side filter)
     ========================================================================= */

  function initTableSearch() {
    $$('[data-table-search]').forEach(function (input) {
      var targetId = input.getAttribute('data-table-search');
      var table    = document.getElementById(targetId);
      if (!table) return;

      input.addEventListener('input', function () {
        var term = input.value.toLowerCase().trim();
        table.querySelectorAll('tbody tr').forEach(function (row) {
          row.style.display = row.textContent.toLowerCase().includes(term) ? '' : 'none';
        });
      });
    });
  }

  /* =========================================================================
     INITIALISE
     ========================================================================= */

  // Apply theme immediately (before DOMContentLoaded) to prevent FOUC
  (function () {
    var theme = localStorage.getItem(THEME_KEY);
    if (!theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = DARK;
    }
    if (theme) {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }());

  document.addEventListener('DOMContentLoaded', function () {

    /* Theme */
    applyTheme(getPreferredTheme());
    var themeBtn = $('#ol-theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    /* Desktop sidebar */
    if (window.innerWidth >= 992) {
      applySidebarState(getSidebarCollapsed());
    }
    var collapseBtn = $('#ol-sidebar-collapse-btn');
    if (collapseBtn) collapseBtn.addEventListener('click', toggleSidebar);

    /* Mobile sidebar */
    var mobileToggle = $('#ol-mobile-toggle');
    if (mobileToggle) mobileToggle.addEventListener('click', openMobileSidebar);

    var backdrop = $('#ol-sidebar-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeMobileSidebar);

    /* Close mobile sidebar on nav link click */
    $$('.ol-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) closeMobileSidebar();
      });
    });

    /* Active nav link */
    markActiveNavLink();

    /* Tables */
    initSortableTables();
    initTableSearch();

    /* Responsive resize */
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 992) closeMobileSidebar();
    });
  });

}());
