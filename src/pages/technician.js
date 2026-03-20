import { accessPoints, getConversionStatus, updateConversionStatus, resetConversionStatus } from '../data.js';

let openCardId = null;

export function renderTechnician() {
  const status = getConversionStatus();
  const completedCount = Object.values(status).filter(s => s.completedAt).length;
  const inProgressCount = Object.values(status).filter(s => {
    const checks = ['bridgeMode', 'dhcpDisabled', 'powerReduced', 'channelFixed', 'ssidUnified'];
    const done = checks.filter(c => s[c]).length;
    return done > 0 && !s.completedAt;
  }).length;
  const pendingCount = accessPoints.length - completedCount - inProgressCount;

  return `
    <div class="page-header">
      <h2>Technician Interface</h2>
      <p>Track and confirm AP conversion from Gateway Mode to Bridge Mode</p>
    </div>

    <!-- Status Summary -->
    <div class="stats-grid">
      <div class="stat-card green">
        <div class="stat-icon">✅</div>
        <div class="stat-value">${completedCount}</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-icon">🔄</div>
        <div class="stat-value">${inProgressCount}</div>
        <div class="stat-label">In Progress</div>
      </div>
      <div class="stat-card orange">
        <div class="stat-icon">⏳</div>
        <div class="stat-value">${pendingCount}</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon">📶</div>
        <div class="stat-value">${accessPoints.length}</div>
        <div class="stat-label">Total APs</div>
      </div>
    </div>

    <!-- Progress -->
    <div class="glass-card">
      <div class="progress-bar-wrapper">
        <div class="progress-info">
          <span class="progress-label">AP Conversion Progress</span>
          <span class="progress-pct">${Math.round((completedCount / accessPoints.length) * 100)}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(completedCount / accessPoints.length) * 100}%"></div>
        </div>
      </div>
    </div>

    <!-- AP Cards -->
    <div id="apCards">
      ${accessPoints.map(ap => renderAPCard(ap, status[ap.id])).join('')}
    </div>
  `;
}

function renderAPCard(ap, convStatus) {
  const checks = ['bridgeMode', 'dhcpDisabled', 'powerReduced', 'channelFixed', 'ssidUnified'];
  const doneCount = checks.filter(c => convStatus[c]).length;
  const isComplete = convStatus.completedAt !== null;
  const isOpen = openCardId === ap.id;
  
  let statusBadge = '';
  if (isComplete) {
    statusBadge = '<span class="badge badge-complete">Completed</span>';
  } else if (doneCount > 0) {
    statusBadge = `<span class="badge badge-progress">${doneCount}/5</span>`;
  } else {
    statusBadge = '<span class="badge badge-pending">Pending</span>';
  }

  return `
    <div class="ap-card ${isComplete ? 'completed' : ''} ${isOpen ? 'open' : ''}" data-ap-id="${ap.id}">
      <div class="ap-card-header" data-toggle="${ap.id}">
        <div class="ap-card-info">
          <div class="ap-avatar">${ap.wing}${ap.floor}</div>
          <div>
            <div class="ap-name">${ap.name}</div>
            <div class="ap-location">${ap.location}</div>
          </div>
        </div>
        <div class="gap-row" style="align-items: center;">
          ${statusBadge}
          <span class="ap-card-expand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </div>
      </div>

      <div class="ap-checklist">
        <!-- Meta -->
        <div class="ap-meta-row">
          <span>IP: <span class="mono">${ap.ip}</span></span>
          <span>MAC: <span class="mono">${ap.mac}</span></span>
          <span>Floor: ${ap.floor === 0 ? 'Ground' : ap.floor}</span>
          <span>Wing: ${ap.wing}</span>
        </div>

        <!-- Checklist -->
        <div class="mt-2">
          <div class="check-item">
            <input type="checkbox" ${convStatus.bridgeMode ? 'checked' : ''} data-ap="${ap.id}" data-field="bridgeMode" />
            <div class="check-label">
              <div class="check-label-title">🔀 Switch to Bridge Mode</div>
              <div class="check-label-desc">Change from Gateway Mode to Bridge Mode for seamless roaming</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${convStatus.dhcpDisabled ? 'checked' : ''} data-ap="${ap.id}" data-field="dhcpDisabled" />
            <div class="check-label">
              <div class="check-label-title">🚫 Disable DHCP</div>
              <div class="check-label-desc">Turn off DHCP server — MikroTik will handle address distribution</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${convStatus.powerReduced ? 'checked' : ''} data-ap="${ap.id}" data-field="powerReduced" />
            <div class="check-label">
              <div class="check-label-title">📶 Reduce Transmit Power</div>
              <div class="check-label-desc">Lower from 29 dBm to 15-18 dBm for precise coverage</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${convStatus.channelFixed ? 'checked' : ''} data-ap="${ap.id}" data-field="channelFixed" />
            <div class="check-label">
              <div class="check-label-title">📻 Fix Channel Selection</div>
              <div class="check-label-desc">Set to fixed channel (1, 6, or 11) — disable Auto</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${convStatus.ssidUnified ? 'checked' : ''} data-ap="${ap.id}" data-field="ssidUnified" />
            <div class="check-label">
              <div class="check-label-title">📡 Unify SSID</div>
              <div class="check-label-desc">Single unified network (open or single-password protected)</div>
            </div>
          </div>
        </div>

        <!-- Completed stamp -->
        <div class="ap-completed-stamp">
          ✅ All checks completed ${convStatus.completedAt ? '— ' + new Date(convStatus.completedAt).toLocaleString() : ''}
        </div>

        <!-- Reset button -->
        ${isComplete ? `
          <div class="mt-2 text-center">
            <button class="btn" data-reset="${ap.id}">
              🔄 Reset Checklist
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function initTechnicianEvents() {
  const container = document.getElementById('apCards');
  if (!container) return;

  // Toggle expand
  container.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-toggle]');
    if (toggle) {
      const apId = parseInt(toggle.dataset.toggle);
      openCardId = openCardId === apId ? null : apId;
      rerenderTechnician();
      return;
    }

    // Reset button
    const resetBtn = e.target.closest('[data-reset]');
    if (resetBtn) {
      const apId = parseInt(resetBtn.dataset.reset);
      resetConversionStatus(apId);
      rerenderTechnician();
      return;
    }
  });

  // Checkbox changes
  container.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.dataset.ap) {
      const apId = parseInt(e.target.dataset.ap);
      const field = e.target.dataset.field;
      updateConversionStatus(apId, field, e.target.checked);
      // Re-render to update badges and progress
      rerenderTechnician();
    }
  });
}

function rerenderTechnician() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = renderTechnician();
    initTechnicianEvents();
  }
}
