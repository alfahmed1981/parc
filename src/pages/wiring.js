// =============================================
// Wiring Topology — MikroTik Port Mapping
// =============================================

const portMapping = [
  // Gigabit Ports (1-5)
  { port: 1, speed: 'gig', label: 'LAN Switch', labelAr: 'شبكة النزلاء — للسويتش الرئيسي', ip: '', color: 'green' },
  { port: 2, speed: 'gig', label: 'Huawei WAN 40', labelAr: 'موجه فايبر رقم 4', ip: '192.168.40.1', color: 'blue' },
  { port: 3, speed: 'gig', label: 'Huawei WAN 50', labelAr: 'موجه فايبر رقم 5', ip: '192.168.50.1', color: 'blue' },
  { port: 4, speed: 'gig', label: 'Huawei WAN 60', labelAr: 'موجه فايبر رقم 6', ip: '192.168.60.1', color: 'blue' },
  { port: 5, speed: 'gig', label: 'Huawei WAN 70', labelAr: 'موجه فايبر رقم 7', ip: '192.168.70.1', color: 'blue' },
  // Fast Ethernet Ports (6-10)
  { port: 6, speed: 'fast', label: 'Huawei WAN 10', labelAr: 'موجه فايبر رقم 1', ip: '192.168.10.1', color: 'orange' },
  { port: 7, speed: 'fast', label: 'Huawei WAN 20', labelAr: 'موجه فايبر رقم 2', ip: '192.168.20.1', color: 'orange' },
  { port: 8, speed: 'fast', label: 'Huawei WAN 30', labelAr: 'موجه فايبر رقم 3', ip: '192.168.30.1', color: 'orange' },
  { port: 9, speed: 'fast', label: 'Empty', labelAr: 'احتياطي — غير مستخدم', ip: '', color: 'dim' },
  { port: 10, speed: 'fast', label: 'Empty', labelAr: 'احتياطي — غير مستخدم', ip: '', color: 'dim' },
];

const gigPorts  = portMapping.filter(p => p.speed === 'gig');
const fastPorts = portMapping.filter(p => p.speed === 'fast');

function renderPort(p) {
  const isEmpty = p.color === 'dim';
  return `
    <div class="wiring-port ${p.speed} ${p.color} ${isEmpty ? 'empty' : ''}">
      <div class="port-number">${p.port}</div>
      <div class="port-body">
        <div class="port-label">${p.label}</div>
        <div class="port-label-ar">${p.labelAr}</div>
        ${p.ip ? `<a href="http://${p.ip}" target="_blank" rel="noopener" class="port-ip ip-link mono">${p.ip}</a>` : ''}
      </div>
      <div class="port-speed-tag">${p.speed === 'gig' ? '1000M' : '100M'}</div>
    </div>
  `;
}

export function renderWiring() {
  return `
    <div class="page-header">
      <h2>خريطة الربط المادي</h2>
      <p>Physical Wiring Topology — التوزيع الهندسي لمنافذ الميكروتيك (MikroTik Port Mapping)</p>
    </div>

    <!-- Router Visual -->
    <div class="glass-card wiring-router-card">
      <div class="router-visual">
        <div class="router-brand">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          <span>MikroTik RB2011iLS</span>
        </div>
        <div class="router-ports-visual">
          <div class="ports-row">
            ${portMapping.slice(0, 5).map(p => `
              <div class="port-slot ${p.speed} ${p.color} ${p.color === 'dim' ? 'empty' : ''}">
                <span class="slot-num">${p.port}</span>
              </div>
            `).join('')}
          </div>
          <div class="ports-row">
            ${portMapping.slice(5, 10).map(p => `
              <div class="port-slot ${p.speed} ${p.color} ${p.color === 'dim' ? 'empty' : ''}">
                <span class="slot-num">${p.port}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="router-legend">
          <span class="legend-item gig"><span class="legend-dot gig"></span> Gigabit (1-5)</span>
          <span class="legend-item fast"><span class="legend-dot fast"></span> Fast Ethernet (6-10)</span>
          <span class="legend-item dim"><span class="legend-dot dim"></span> احتياطي</span>
        </div>
      </div>
    </div>

    <!-- Group 1: Gigabit -->
    <div class="glass-card wiring-group-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-blue-dim); color: var(--accent-blue);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </span>
          منافذ السرعة القصوى
        </h3>
        <span class="badge badge-active">Gigabit 1000M</span>
      </div>
      <p class="wiring-group-note">⚡ هذه المنافذ مخصصة لخطوط الإنترنت الأسرع وللسويتش الرئيسي</p>
      <div class="wiring-ports-list">
        ${gigPorts.map(renderPort).join('')}
      </div>
    </div>

    <!-- Group 2: Fast Ethernet -->
    <div class="glass-card wiring-group-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-orange-dim); color: var(--accent-orange);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </span>
          منافذ السرعة العادية
        </h3>
        <span class="badge badge-warning">Fast Ethernet 100M</span>
      </div>
      <p class="wiring-group-note">🐢 هذه المنافذ للخطوط الأقل سرعة أو الاحتياطية</p>
      <div class="wiring-ports-list">
        ${fastPorts.map(renderPort).join('')}
      </div>
    </div>

    <!-- Engineering Warning -->
    <div class="wiring-warning-card">
      <div class="wiring-warning-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </div>
      <div class="wiring-warning-body">
        <div class="wiring-warning-title">تحذير هندسي</div>
        <p>يرجى الالتزام الصارم بهذا التوزيع. ربط موجهات السرعة العالية في منافذ <strong>(6-10)</strong> سيؤدي إلى <strong style="color: var(--accent-red);">خنق سرعة الإنترنت (Bottleneck)</strong>.</p>
      </div>
    </div>
  `;
}

export function initWiringEvents() {
  // No interactive events needed for this read-only page
}
