import { networkOverview, wanRouters, accessPoints, upgradeTasks, getConversionStatus } from '../data.js';

export function renderDashboard() {
  const conversionStatus = getConversionStatus();
  const completedAPs = Object.values(conversionStatus).filter(s => s.completedAt).length;
  const totalAPs = accessPoints.length;
  const problemWANs = wanRouters.filter(w => w.status === 'error').length;
  const activeWANs = wanRouters.filter(w => w.status === 'active').length;

  return `
    <div class="page-header">
      <h2>Network Dashboard</h2>
      <p>Hotel Parc — Network infrastructure overview & upgrade status</p>
    </div>

    <!-- Stat Cards -->
    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon">📡</div>
        <div class="stat-value">${wanRouters.length}</div>
        <div class="stat-label">WAN Lines</div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon">📶</div>
        <div class="stat-value">${accessPoints.length}</div>
        <div class="stat-label">Access Points</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon">🏨</div>
        <div class="stat-value">1022</div>
        <div class="stat-label">Max Guests</div>
      </div>
      <div class="stat-card orange">
        <div class="stat-icon">⚙️</div>
        <div class="stat-value">${completedAPs}/${totalAPs}</div>
        <div class="stat-label">APs Converted</div>
      </div>
      <div class="stat-card red">
        <div class="stat-icon">⚠️</div>
        <div class="stat-value">${problemWANs}</div>
        <div class="stat-label">WAN Issues</div>
      </div>
    </div>

    <!-- Network Topology -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">🔀</span> Target Network Topology</h3>
      </div>
      <div class="topology">
        <div class="topo-row">
          ${wanRouters.map(w => `
            <div class="topo-node wan-group" title="${w.wan}: ${w.targetIp}">
              ${w.wan}
              <small>${w.targetIp}</small>
            </div>
          `).join('')}
        </div>
        <div class="topo-line" style="height: 24px;"></div>
        <div class="topo-node mikrotik">
          MikroTik RB2011
          <small>PCC Load Balancing • DHCP Server • NAT</small>
        </div>
        <div class="topo-line" style="height: 24px;"></div>
        <div class="topo-node ap-group">
          ${totalAPs} Altai Access Points
          <small>Bridge Mode • 172.16.0.0/22</small>
        </div>
        <div class="topo-line" style="height: 24px;"></div>
        <div class="topo-node guests">
          Hotel Guests
          <small>Up to 1022 devices • Seamless Roaming</small>
        </div>
      </div>
    </div>

    <!-- Current vs Target Comparison -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">⚡</span> Architecture: Current vs Target</h3>
      </div>
      ${networkOverview.map(item => `
        <div class="comparison-row">
          <div class="comp-label">
            <span class="comp-icon">${getArchIcon(item.icon)}</span>
            ${item.component}
          </div>
          <div class="comp-current">
            <span class="comp-tag">❌ Current State</span>
            ${item.currentState}
          </div>
          <div class="comp-target">
            <span class="comp-tag">✅ Target State</span>
            ${item.targetState}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function getArchIcon(icon) {
  const icons = {
    router: '🖧',
    dhcp: '📋',
    lan: '🌐',
    wan: '🔌',
    stability: '🛡️'
  };
  return icons[icon] || '📦';
}
