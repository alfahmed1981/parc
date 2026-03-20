import { wanRouters as defaultWanRouters, accessPoints as defaultAccessPoints } from '../data.js';

// =============================================
// Device Management — CRUD with localStorage
// =============================================

const WAN_STORAGE_KEY  = 'parc_wan_routers';
const AP_STORAGE_KEY   = 'parc_access_points';

let currentTab = 'wan';
let apFilter   = 'all';

// --- Data Layer (localStorage overlay) ---
function getWanRouters() {
  const stored = localStorage.getItem(WAN_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(WAN_STORAGE_KEY, JSON.stringify(defaultWanRouters));
  return [...defaultWanRouters];
}

function saveWanRouters(data) {
  localStorage.setItem(WAN_STORAGE_KEY, JSON.stringify(data));
}

function getAccessPoints() {
  const stored = localStorage.getItem(AP_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(AP_STORAGE_KEY, JSON.stringify(defaultAccessPoints));
  return [...defaultAccessPoints];
}

function saveAccessPoints(data) {
  localStorage.setItem(AP_STORAGE_KEY, JSON.stringify(data));
}

function nextId(arr) {
  return arr.length === 0 ? 1 : Math.max(...arr.map(i => i.id)) + 1;
}

// --- Render ---
export function renderDevices() {
  const routers = getWanRouters();
  const aps     = getAccessPoints();

  return `
    <div class="page-header">
      <h2>Device Management</h2>
      <p>Inventory of WAN routers (Huawei GPON) and Altai access points</p>
    </div>

    <!-- Tabs -->
    <div class="tabs" id="deviceTabs">
      <button class="tab-btn ${currentTab === 'wan' ? 'active' : ''}" data-tab="wan">
        📡 WAN Routers (${routers.length})
      </button>
      <button class="tab-btn ${currentTab === 'ap' ? 'active' : ''}" data-tab="ap">
        📶 Access Points (${aps.length})
      </button>
    </div>

    <!-- WAN Routers Table -->
    <div id="wanPanel" class="${currentTab !== 'wan' ? 'hidden' : ''}">
      <div class="glass-card">
        <div class="card-header">
          <h3><span class="header-icon">📡</span> Huawei GPON Fiber Routers</h3>
          <button class="btn-add" id="addWanBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            إضافة
          </button>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${routers.map(r => `
                <tr>
                  <td><strong>${r.wan}</strong></td>
                  <td><a href="http://${r.currentIp}" target="_blank" rel="noopener" class="ip-link mono">${r.currentIp}</a></td>
                  <td><span class="mono">${r.mac}</span></td>
                  <td>${getStatusBadge(r.status)}</td>
                  <td>${r.statusNote}</td>
                  <td><a href="http://${r.targetIp}" target="_blank" rel="noopener" class="ip-link mono">${r.targetIp}</a></td>
                  <td class="row-actions">
                    <button class="btn-row-action edit" data-type="wan" data-id="${r.id}" title="تعديل">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="btn-row-action delete" data-type="wan" data-id="${r.id}" title="حذف">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </td>
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
          <button class="btn-add" id="addApBtn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            إضافة
          </button>
        </div>
        
        <!-- Floor Filters -->
        <div class="filter-bar" id="apFilters">
          <button class="filter-chip ${apFilter === 'all' ? 'active' : ''}" data-filter="all">All (${aps.length})</button>
          ${getFloorFilters(aps)}
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${getFilteredAPs(aps).map(ap => `
                <tr>
                  <td><strong>${ap.name}</strong></td>
                  <td>${ap.location}</td>
                  <td>${ap.floor === 0 ? 'Ground' : 'Floor ' + ap.floor}</td>
                  <td><span class="badge badge-progress">${ap.wing}</span></td>
                  <td><a href="http://${ap.ip}" target="_blank" rel="noopener" class="ip-link mono">${ap.ip}</a></td>
                  <td><span class="mono">${ap.mac}</span></td>
                  <td class="row-actions">
                    <button class="btn-row-action edit" data-type="ap" data-id="${ap.id}" title="تعديل">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="btn-row-action delete" data-type="ap" data-id="${ap.id}" title="حذف">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <div class="crud-modal-overlay hidden" id="crudModal">
      <div class="crud-modal">
        <div class="crud-modal-header">
          <h3 id="modalTitle"></h3>
          <button class="btn-modal-close" id="modalClose">✕</button>
        </div>
        <form id="crudForm" class="crud-form"></form>
      </div>
    </div>
  `;
}

// --- Helpers ---
function getFilteredAPs(aps) {
  if (apFilter === 'all') return aps;
  return aps.filter(ap => String(ap.floor) === apFilter);
}

function getFloorFilters(aps) {
  const floors = [...new Set(aps.map(ap => ap.floor))].sort((a, b) => a - b);
  return floors.map(f => {
    const label = f === 0 ? 'Ground' : `Floor ${f}`;
    const count = aps.filter(ap => ap.floor === f).length;
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

// --- Modal Forms ---
function openWanForm(existing) {
  const isEdit = !!existing;
  const modal  = document.getElementById('crudModal');
  const title  = document.getElementById('modalTitle');
  const form   = document.getElementById('crudForm');

  title.textContent = isEdit ? 'تعديل موجه WAN' : 'إضافة موجه WAN جديد';
  form.innerHTML = `
    <input type="hidden" name="id" value="${existing?.id || ''}" />
    <div class="form-row">
      <label>WAN Name</label>
      <input type="text" name="wan" value="${existing?.wan || ''}" placeholder="مثال: WAN 8" required />
    </div>
    <div class="form-row">
      <label>Current IP</label>
      <input type="text" name="currentIp" value="${existing?.currentIp || ''}" placeholder="192.168.1.x" required />
    </div>
    <div class="form-row">
      <label>MAC Address</label>
      <input type="text" name="mac" value="${existing?.mac || ''}" placeholder="AA:BB:CC:DD:EE:FF" required />
    </div>
    <div class="form-row">
      <label>Status</label>
      <select name="status">
        <option value="active"  ${existing?.status === 'active'  ? 'selected' : ''}>Active</option>
        <option value="warning" ${existing?.status === 'warning' ? 'selected' : ''}>Warning</option>
        <option value="error"   ${existing?.status === 'error'   ? 'selected' : ''}>Problem</option>
      </select>
    </div>
    <div class="form-row">
      <label>Notes</label>
      <input type="text" name="statusNote" value="${existing?.statusNote || ''}" placeholder="ملاحظات" />
    </div>
    <div class="form-row">
      <label>Target IP</label>
      <input type="text" name="targetIp" value="${existing?.targetIp || ''}" placeholder="192.168.x0.1" required />
    </div>
    <div class="form-actions">
      <button type="button" class="btn-cancel" id="formCancel">إلغاء</button>
      <button type="submit" class="btn-save">${isEdit ? 'حفظ التعديلات' : 'إضافة'}</button>
    </div>
  `;

  modal.classList.remove('hidden');
  form.onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const routers = getWanRouters();

    if (isEdit) {
      const idx = routers.findIndex(r => r.id === existing.id);
      if (idx !== -1) {
        routers[idx] = { ...routers[idx], wan: fd.get('wan'), currentIp: fd.get('currentIp'), mac: fd.get('mac'), status: fd.get('status'), statusNote: fd.get('statusNote'), targetIp: fd.get('targetIp') };
      }
    } else {
      routers.push({ id: nextId(routers), wan: fd.get('wan'), currentIp: fd.get('currentIp'), mac: fd.get('mac'), status: fd.get('status'), statusNote: fd.get('statusNote'), targetIp: fd.get('targetIp') });
    }
    saveWanRouters(routers);
    closeModal();
    rerenderDevices();
  };

  document.getElementById('formCancel').onclick = closeModal;
  document.getElementById('modalClose').onclick = closeModal;
}

function openApForm(existing) {
  const isEdit = !!existing;
  const modal  = document.getElementById('crudModal');
  const title  = document.getElementById('modalTitle');
  const form   = document.getElementById('crudForm');

  title.textContent = isEdit ? 'تعديل نقطة ولوج' : 'إضافة نقطة ولوج جديدة';
  form.innerHTML = `
    <input type="hidden" name="id" value="${existing?.id || ''}" />
    <div class="form-row">
      <label>Name</label>
      <input type="text" name="name" value="${existing?.name || ''}" placeholder="مثال: AC4120" required />
    </div>
    <div class="form-row">
      <label>Location</label>
      <input type="text" name="location" value="${existing?.location || ''}" placeholder="Floor 4, Wing A" required />
    </div>
    <div class="form-row two-col">
      <div class="form-row">
        <label>Floor</label>
        <input type="number" name="floor" value="${existing?.floor ?? ''}" min="0" max="10" required />
      </div>
      <div class="form-row">
        <label>Wing</label>
        <input type="text" name="wing" value="${existing?.wing || ''}" placeholder="A / B / C" required />
      </div>
    </div>
    <div class="form-row">
      <label>Management IP</label>
      <input type="text" name="ip" value="${existing?.ip || ''}" placeholder="192.168.1.x" required />
    </div>
    <div class="form-row">
      <label>MAC Address</label>
      <input type="text" name="mac" value="${existing?.mac || ''}" placeholder="00:19:BE:xx:xx:xx" required />
    </div>
    <div class="form-actions">
      <button type="button" class="btn-cancel" id="formCancel">إلغاء</button>
      <button type="submit" class="btn-save">${isEdit ? 'حفظ التعديلات' : 'إضافة'}</button>
    </div>
  `;

  modal.classList.remove('hidden');
  form.onsubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const aps = getAccessPoints();

    const entry = {
      name: fd.get('name'),
      location: fd.get('location'),
      locationAr: fd.get('location'),
      floor: parseInt(fd.get('floor')),
      wing: fd.get('wing').toUpperCase(),
      ip: fd.get('ip'),
      mac: fd.get('mac')
    };

    if (isEdit) {
      const idx = aps.findIndex(a => a.id === existing.id);
      if (idx !== -1) aps[idx] = { ...aps[idx], ...entry };
    } else {
      aps.push({ id: nextId(aps), ...entry });
    }
    saveAccessPoints(aps);
    closeModal();
    rerenderDevices();
  };

  document.getElementById('formCancel').onclick = closeModal;
  document.getElementById('modalClose').onclick = closeModal;
}

function closeModal() {
  document.getElementById('crudModal')?.classList.add('hidden');
}

function deleteItem(type, id) {
  const msg = type === 'wan' ? 'هل تريد حذف هذا الموجه؟' : 'هل تريد حذف نقطة الولوج هذه؟';
  if (!confirm(msg)) return;

  if (type === 'wan') {
    const routers = getWanRouters().filter(r => r.id !== id);
    saveWanRouters(routers);
  } else {
    const aps = getAccessPoints().filter(a => a.id !== id);
    saveAccessPoints(aps);
  }
  rerenderDevices();
}

// --- Events ---
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

  // Add buttons
  document.getElementById('addWanBtn')?.addEventListener('click', () => openWanForm(null));
  document.getElementById('addApBtn')?.addEventListener('click', () => openApForm(null));

  // Edit / Delete row buttons (event delegation)
  document.addEventListener('click', handleRowAction);

  // Close modal on overlay click
  document.getElementById('crudModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'crudModal') closeModal();
  });
}

function handleRowAction(e) {
  const btn = e.target.closest('.btn-row-action');
  if (!btn) return;

  const type = btn.dataset.type;
  const id   = parseInt(btn.dataset.id);

  if (btn.classList.contains('edit')) {
    if (type === 'wan') {
      const item = getWanRouters().find(r => r.id === id);
      if (item) openWanForm(item);
    } else {
      const item = getAccessPoints().find(a => a.id === id);
      if (item) openApForm(item);
    }
  } else if (btn.classList.contains('delete')) {
    deleteItem(type, id);
  }
}

function rerenderDevices() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = renderDevices();
    initDevicesEvents();
  }
}
