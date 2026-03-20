import { networkOverview, upgradeTasks, accessPoints, getConversionStatus } from '../data.js';

export function renderUpgrade() {
  const conversionStatus = getConversionStatus();
  const totalChecks = accessPoints.length * 5; // 5 checks per AP
  let completedChecks = 0;
  
  Object.values(conversionStatus).forEach(status => {
    ['bridgeMode', 'dhcpDisabled', 'powerReduced', 'channelFixed', 'ssidUnified'].forEach(key => {
      if (status[key]) completedChecks++;
    });
  });

  const completedAPs = Object.values(conversionStatus).filter(s => s.completedAt).length;
  const progressPct = Math.round((completedChecks / totalChecks) * 100);

  return `
    <div class="page-header">
      <h2>Upgrade Plan</h2>
      <p>Network migration from current architecture to MikroTik-based infrastructure</p>
    </div>

    <!-- Overall Progress -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">📊</span> Overall Upgrade Progress</h3>
        <span class="badge ${progressPct === 100 ? 'badge-complete' : 'badge-progress'}">
          ${progressPct === 100 ? 'Complete' : 'In Progress'}
        </span>
      </div>
      <div class="stats-grid" style="margin-bottom: 20px;">
        <div class="stat-card blue">
          <div class="stat-icon">✅</div>
          <div class="stat-value">${completedChecks}</div>
          <div class="stat-label">Checks Done</div>
        </div>
        <div class="stat-card purple">
          <div class="stat-icon">📋</div>
          <div class="stat-value">${totalChecks}</div>
          <div class="stat-label">Total Checks</div>
        </div>
        <div class="stat-card green">
          <div class="stat-icon">📶</div>
          <div class="stat-value">${completedAPs}</div>
          <div class="stat-label">APs Completed</div>
        </div>
        <div class="stat-card orange">
          <div class="stat-icon">🔧</div>
          <div class="stat-value">${upgradeTasks.length}</div>
          <div class="stat-label">Task Categories</div>
        </div>
      </div>
      <div class="progress-bar-wrapper">
        <div class="progress-info">
          <span class="progress-label">Overall completion</span>
          <span class="progress-pct">${progressPct}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPct}%"></div>
        </div>
      </div>
    </div>

    <!-- Architecture Changes (from Table 1) -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">🏗️</span> Architecture Changes Required</h3>
      </div>
      ${networkOverview.map(item => `
        <div class="comparison-row">
          <div class="comp-label">
            <span class="comp-icon">${getIcon(item.icon)}</span>
            ${item.component}
          </div>
          <div class="comp-current">
            <span class="comp-tag">❌ Current Problem</span>
            ${item.currentState}
          </div>
          <div class="comp-target">
            <span class="comp-tag">✅ Required Change</span>
            ${item.targetState}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Intervention Checklist (from Table 4) -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">🔧</span> Intervention Checklist — Altai AP Settings</h3>
      </div>
      ${upgradeTasks.map(task => `
        <div class="task-card ${task.critical ? 'critical' : ''}">
          <div class="task-card-header">
            <div class="task-title">
              <span class="task-icon" style="background: ${task.critical ? 'var(--accent-red-dim)' : 'var(--accent-blue-dim)'}; color: ${task.critical ? 'var(--accent-red)' : 'var(--accent-blue)'};">
                ${getTaskIcon(task.icon)}
              </span>
              ${task.setting}
            </div>
            ${task.critical ? '<span class="badge badge-error">Critical</span>' : '<span class="badge badge-warning">Important</span>'}
          </div>
          <div class="task-body">
            <div class="task-error">
              <div class="task-sub-label">Current Error</div>
              ${task.currentError}
            </div>
            <div class="task-fix">
              <div class="task-sub-label">Required Fix</div>
              ${task.requiredFix}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Huawei Router WiFi Disable Note -->
    <div class="glass-card" style="border-left: 3px solid var(--accent-orange);">
      <div class="card-header">
        <h3><span class="header-icon" style="background: var(--accent-orange-dim); color: var(--accent-orange);">⚠️</span> Important: Disable WiFi on Huawei Routers</h3>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.7;">
        All <strong>7 Huawei fiber routers</strong> are currently broadcasting their own WiFi networks, which causes interference with the Altai access points.
        <strong>Action required:</strong> Log into each Huawei router admin panel and disable the WLAN broadcast. This is essential for clean signal coverage from the Altai APs.
      </p>
    </div>
  `;
}

function getIcon(icon) {
  const icons = { router: '🖧', dhcp: '📋', lan: '🌐', wan: '🔌', stability: '🛡️' };
  return icons[icon] || '📦';
}

function getTaskIcon(icon) {
  const icons = {
    bridge: '🔀',
    dhcp_off: '🚫',
    signal: '📶',
    channel: '📻',
    wifi: '📡',
    wifi_off: '🔇'
  };
  return icons[icon] || '⚙️';
}
