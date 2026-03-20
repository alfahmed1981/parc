// =============================================
// Hotel Parc Network Manager — Main Router
// =============================================

import './style.css';
import { renderDashboard } from './pages/dashboard.js';
import { renderDevices, initDevicesEvents } from './pages/devices.js';
import { renderUpgrade } from './pages/upgrade.js';
import { renderTechnician, initTechnicianEvents } from './pages/technician.js';
import { renderMission, initMissionEvents } from './pages/mission.js';
import { renderSetup, initSetupEvents } from './pages/setup.js';

// --- Hash-Based Router ---
const routes = {
  '/':           { render: renderDashboard,   init: null,                 title: 'Dashboard' },
  '/devices':    { render: renderDevices,      init: initDevicesEvents,    title: 'Devices' },
  '/upgrade':    { render: renderUpgrade,      init: null,                 title: 'Upgrade Plan' },
  '/technician': { render: renderTechnician,   init: initTechnicianEvents, title: 'Technician' },
  '/mission':    { render: renderMission,      init: initMissionEvents,    title: 'Mission Brief' },
  '/setup':      { render: renderSetup,        init: initSetupEvents,      title: 'Field Setup' },
};

function getRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

function navigate() {
  const path = getRoute();
  const route = routes[path] || routes['/'];
  
  // Render page content
  const pageContent = document.getElementById('pageContent');
  if (pageContent) {
    pageContent.innerHTML = route.render();
    // Re-trigger entrance animation
    pageContent.style.animation = 'none';
    pageContent.offsetHeight; // force reflow
    pageContent.style.animation = '';
  }

  // Init events
  if (route.init) route.init();

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.dataset.page;
    const isActive = (path === '/' && linkPage === 'dashboard') ||
                     (path === '/' + linkPage);
    link.classList.toggle('active', isActive);
  });

  // Update page title
  document.title = `Hotel Parc — ${route.title}`;

  // Close mobile sidebar
  closeMobileSidebar();
}

// --- Mobile Sidebar ---
function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebarOverlay')?.classList.remove('active');
}

function initMobile() {
  const menuToggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('sidebarOverlay');
  
  menuToggle?.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.toggle('open');
    overlay?.classList.toggle('active');
  });

  overlay?.addEventListener('click', closeMobileSidebar);
}

// --- Init ---
window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', () => {
  initMobile();
  navigate();
});
