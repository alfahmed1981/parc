import { wanRouters, accessPoints } from '../data.js';

let currentTab = 'wan';
let apFilter = 'all';

export function renderDevices() {
  return `
    <div class="page-header">
      <h2>Device Management</h2>
      <p>Inventory of WAN routers (Huawei GPON) and Altai access points</p>
    </div>

    <!-- Tabs -->
    <div class="tabs" id="deviceTabs">
      <button class="tab-btn ${currentTab === 'wan' ? 'active' : ''}" data-tab="wan">
        📡 WAN Routers (${wanRouters.length})
      </button>
      <button class="tab-btn ${currentTab === 'ap' ? 'active' : ''}" data-tab="ap">
        📶 Access Points (${accessPoints.length})
      </button>
    </div>

    <!-- WAN Routers Table -->
    <div id="wanPanel" class="${currentTab !== 'wan' ? 'hidden' : ''}">
      <div class="glass-card">
        <div class="card-header">
          <h3><span class="header-icon">📡</span> Huawei GPON Fiber Routers</h3>
        </div>
        <div class="data-table-wrapper">
          <table class="data-table" id="wanTable">
            <thead>
              <tr>
                <th>WAN</th>
                <th>Current IP</th>
                <th>MAC Address</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Target IP</th>
              </tr>
            </thead>
            <tbody>
              ${wanRouters.map(r => `
                <tr>
                  <td><strong>${r.wan}</strong></td>
                  <td><span class="mono">${r.currentIp}</span></td>
                  <td><span class="mono">${r.mac}</span></td>
                  <td>${getStatusBadge(r.status)}</td>
                  <td>${r.statusNote}</td>
                  <td><span class="mono">${r.targetIp}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Access Points Table -->
    <div id="apPanel" class="${currentTab !== 'ap' ? 'hidden' : ''}">
      <div class="glass-card">
        <div class="card-header">
          <h3><span class="header-icon">📶</span> Altai Access Points</h3>
        </div>
        
        <!-- Floor Filters -->
        <div class="filter-bar" id="apFilters">
          <button class="filter-chip ${apFilter === 'all' ? 'active' : ''}" data-filter="all">All (${accessPoints.length})</button>
          ${getFloorFilters()}
        </div>

        <div class="data-table-wrapper">
          <table class="data-table" id="apTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Floor</th>
                <th>Wing</th>
                <th>Management IP</th>
                <th>MAC Address</th>
              </tr>
            </thead>
            <tbody>
              ${getFilteredAPs().map(ap => `
                <tr>
                  <td><strong>${ap.name}</strong></td>
                  <td>${ap.location}</td>
                  <td>${ap.floor === 0 ? 'Ground' : 'Floor ' + ap.floor}</td>
                  <td><span class="badge badge-progress">${ap.wing}</span></td>
                  <td><span class="mono">${ap.ip}</span></td>
                  <td><span class="mono">${ap.mac}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function getFilteredAPs() {
  if (apFilter === 'all') return accessPoints;
  return accessPoints.filter(ap => String(ap.floor) === apFilter);
}

function getFloorFilters() {
  const floors = [...new Set(accessPoints.map(ap => ap.floor))].sort((a, b) => a - b);
  return floors.map(f => {
    const label = f === 0 ? 'Ground' : `Floor ${f}`;
    const count = accessPoints.filter(ap => ap.floor === f).length;
    return `<button class="filter-chip ${apFilter === String(f) ? 'active' : ''}" data-filter="${f}">${label} (${count})</button>`;
  }).join('');
}

function getStatusBadge(status) {
  const map = {
    active:  '<span class="badge badge-active">Active</span>',
    warning: '<span class="badge badge-warning">Warning</span>',
    error:   '<span class="badge badge-error">Problem</span>'
  };
  return map[status] || status;
}

export function initDevicesEvents() {
  // Tab switching
  document.getElementById('deviceTabs')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    currentTab = btn.dataset.tab;
    rerenderDevices();
  });

  // AP filter
  document.getElementById('apFilters')?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    apFilter = chip.dataset.filter;
    rerenderDevices();
  });

  // Table sorting
  document.querySelectorAll('.data-table thead th').forEach(th => {
    th.addEventListener('click', () => {
      // Simple visual feedback
      th.style.color = 'var(--accent-blue)';
      setTimeout(() => { th.style.color = ''; }, 300);
    });
  });
}

function rerenderDevices() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = renderDevices();
    initDevicesEvents();
  }
}
