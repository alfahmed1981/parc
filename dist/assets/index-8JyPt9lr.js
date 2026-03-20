(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,component:`Core Router`,componentAr:`الموجه المركزي`,currentState:`Windows Server (IP: 192.168.1.91) via single router`,currentStateAr:`خادم Windows Server (IP: 192.168.1.91) يمر عبر موجه واحد`,targetState:`MikroTik RB2011 for PCC Load Balancing`,targetStateAr:`جهاز MikroTik RB2011 لدمج الخطوط (PCC Load Balancing)`,icon:`router`},{id:2,component:`DHCP Server`,componentAr:`خادم العناوين`,currentState:`APs (Altai) distribute addresses & act as NAT`,currentStateAr:`نقاط الولوج (Altai) هي من توزع العناوين وتعمل كـ NAT`,targetState:`MikroTik as sole central DHCP & NAT server`,targetStateAr:`MikroTik هو الموزع المركزي الوحيد للعناوين وللـ NAT`,icon:`dhcp`},{id:3,component:`Guest LAN Subnet`,componentAr:`نطاق شبكة النزلاء`,currentState:`Mixed/random, causing conflicts (narrow /24 range)`,currentStateAr:`مختلط وعشوائي ويسبب تضارباً (نطاق ضيق /24)`,targetState:`Unified wide range: 172.16.0.0/22 (1022 devices)`,targetStateAr:`نطاق واسع وموحد: 172.16.0.0/22 (يستوعب 1022 جهازاً)`,icon:`lan`},{id:4,component:`Fiber Router WANs`,componentAr:`نطاقات موجهات الفايبر`,currentState:`All 7 routers in same subnet (192.168.1.x)`,currentStateAr:`جميع الموجهات السبعة في نفس النطاق (192.168.1.x)`,targetState:`Each router isolated (192.168.10.x to 192.168.70.x)`,targetStateAr:`كل موجه في نطاق معزول (192.168.10.x إلى 192.168.70.x)`,icon:`wan`},{id:5,component:`Service Stability (600 guests)`,componentAr:`استقرار الخدمة (600 نزيل)`,currentState:`Severe bottleneck, AP crashes, roaming disconnects`,currentStateAr:`اختناق شديد، توقف نقاط الولوج، انقطاع عند التجول`,targetState:`Combined speed, high stability, seamless roaming`,targetStateAr:`سرعة مدمجة، استقرار عالٍ، انتقال سلس (Roaming) بين الطوابق`,icon:`stability`}],t=[{id:1,wan:`WAN 1`,currentIp:`192.168.1.100`,mac:`60:3D:29:BE:52:33`,status:`active`,statusNote:`dev.opt`,targetIp:`192.168.10.1`},{id:2,wan:`WAN 2`,currentIp:`192.168.1.101`,mac:`A4:16:E7:E5:33:8E`,status:`warning`,statusNote:`Connected to server — carries all network load`,targetIp:`192.168.20.1`},{id:3,wan:`WAN 3`,currentIp:`192.168.1.102`,mac:`A4:16:E7:E5:35:37`,status:`active`,statusNote:`Working normally`,targetIp:`192.168.30.1`},{id:4,wan:`WAN 4`,currentIp:`192.168.1.103`,mac:`A4:16:E7:E5:2D:B6`,status:`error`,statusNote:`Problem detected`,targetIp:`192.168.40.1`},{id:5,wan:`WAN 5`,currentIp:`192.168.1.104`,mac:`A4:16:E7:E5:37:13`,status:`active`,statusNote:`Working normally`,targetIp:`192.168.50.1`},{id:6,wan:`WAN 6`,currentIp:`192.168.1.105`,mac:`A4:16:E7:E5:17:DD`,status:`active`,statusNote:`Working normally`,targetIp:`192.168.60.1`},{id:7,wan:`WAN 7`,currentIp:`192.168.1.106`,mac:`A4:16:E7:E5:2D:D8`,status:`active`,statusNote:`Working normally`,targetIp:`192.168.70.1`}],n=[{id:1,name:`A5118_COULOIRE`,location:`Floor 5, Wing A, near Room 118`,locationAr:`الطابق 5، جناح A، قرب غرفة 118`,floor:5,wing:`A`,ip:`192.168.1.10`,mac:`00:19:BE:A1:22:C0`},{id:2,name:`AC3109`,location:`Floor 3, Wing A, near Room 109`,locationAr:`الطابق 3، جناح A، قرب غرفة 109`,floor:3,wing:`A`,ip:`192.168.1.14`,mac:`00:19:BE:A4:02:B2`},{id:3,name:`AC3115`,location:`Floor 3, Wing A, near Room 115`,locationAr:`الطابق 3، جناح A، قرب غرفة 115`,floor:3,wing:`A`,ip:`192.168.1.2`,mac:`00:19:BE:A4:FB:B9`},{id:4,name:`CC3147`,location:`Floor 3, Wing C, near Room 147`,locationAr:`الطابق 3، جناح C، قرب غرفة 147`,floor:3,wing:`C`,ip:`192.168.1.8`,mac:`00:19:BE:A4:FB:BC`},{id:5,name:`BC2132`,location:`Floor 2, Wing B, near Room 132`,locationAr:`الطابق 2، جناح B، قرب غرفة 132`,floor:2,wing:`B`,ip:`192.168.1.12`,mac:`00:19:BE:A5:26:B5`},{id:6,name:`EC2198`,location:`Floor 2, Wing E, near Room 198`,locationAr:`الطابق 2، جناح E، قرب غرفة 198`,floor:2,wing:`E`,ip:`192.168.1.11`,mac:`00:19:BE:A4:FB:BA`},{id:7,name:`RECEPTION_L`,location:`Reception (Left Side)`,locationAr:`الاستقبال (الجهة اليسرى)`,floor:0,wing:`R`,ip:`192.168.1.9`,mac:`00:19:BE:A4:02:B5`},{id:8,name:`RECEPTION_LR`,location:`Reception (Left Rear)`,locationAr:`الاستقبال (اليسار الخلفي)`,floor:0,wing:`R`,ip:`192.168.1.7`,mac:`00:19:BE:A4:02:B6`},{id:9,name:`RECEPTION_R`,location:`Reception (Right Side)`,locationAr:`الاستقبال (الجهة اليمنى)`,floor:0,wing:`R`,ip:`192.168.1.1`,mac:`00:19:BE:A4:02:B7`},{id:10,name:`HALL_V`,location:`Main Hall V`,locationAr:`القاعة الرئيسية V`,floor:0,wing:`H`,ip:`192.168.1.5`,mac:`00:19:BE:A1:22:3F`},{id:11,name:`PANCHO`,location:`Pancho Area`,locationAr:`منطقة بانشو (Pancho)`,floor:0,wing:`P`,ip:`192.168.1.15`,mac:`00:19:BE:A1:0D:B6`},{id:12,name:`BACK_E_106`,location:`Rear, Wing E, Room 106`,locationAr:`الخلف، جناح E، غرفة 106`,floor:1,wing:`E`,ip:`192.168.1.13`,mac:`00:19:BE:A4:02:B3`}],r=[{id:1,setting:`Network Mode`,settingAr:`وضع التشغيل`,currentError:`Gateway Mode (isolates guests, overloads CPU)`,currentErrorAr:`Gateway Mode (يفصل النزلاء ويرهق المعالج)`,requiredFix:`Switch to Bridge Mode (seamless roaming)`,requiredFixAr:`تحويله إلى Bridge Mode (انتقال سلس Roaming)`,icon:`bridge`,critical:!0},{id:2,setting:`DHCP Distribution`,settingAr:`توزيع العناوين`,currentError:`Enabled on every AP (causes conflicts)`,currentErrorAr:`مُفعّل في كل نقطة (يسبب تضارباً)`,requiredFix:`Disabled — MikroTik takes over`,requiredFixAr:`إيقاف (Disabled) - الميكروتيك سيتولى المهمة`,icon:`dhcp_off`,critical:!0},{id:3,setting:`Transmit Power`,settingAr:`قوة البث`,currentError:`29 dBm (max — causes severe interference)`,currentErrorAr:`29 dBm (الحد الأقصى - يسبب تداخلاً عنيفاً)`,requiredFix:`Reduce to 15-18 dBm for precise coverage`,requiredFixAr:`خفضها إلى 15 - 18 dBm لتغطية دقيقة`,icon:`signal`,critical:!1},{id:4,setting:`Channel Selection`,settingAr:`اختيار القناة`,currentError:`Auto (causes disconnections on channel change)`,currentErrorAr:`Auto (يسبب انقطاعات عند تغيير القناة)`,requiredFix:`Manually fix channels: 1, 6, or 11`,requiredFixAr:`تثبيت القنوات يدوياً بالتناوب (1، أو 6، أو 11)`,icon:`channel`,critical:!1},{id:5,setting:`SSID Names`,settingAr:`أسماء الشبكات`,currentError:`Duplicate "PARC WIFI" with and without password`,currentErrorAr:`تكرار اسم PARC WIFI بكلمة مرور وبدون كلمة مرور`,requiredFix:`Unify network (fully open or single password)`,requiredFixAr:`توحيد الشبكة (إما مفتوحة بالكامل أو محمية بكلمة مرور واحدة)`,icon:`wifi`,critical:!1},{id:6,setting:`Huawei WiFi Broadcast`,settingAr:`البث اللاسلكي لموجهات Huawei`,currentError:`Fiber routers broadcasting their own WiFi networks`,currentErrorAr:`موجهات الفايبر تبث شبكات وايفي خاصة بها`,requiredFix:`Disable WLAN on all 7 routers`,requiredFixAr:`إيقاف الوايفي (Disable WLAN) في الموجهات السبعة`,icon:`wifi_off`,critical:!0}],i=`parc_ap_conversion`;function a(){let e=localStorage.getItem(i);if(e)return JSON.parse(e);let t={};return n.forEach(e=>{t[e.id]={bridgeMode:!1,dhcpDisabled:!1,powerReduced:!1,channelFixed:!1,ssidUnified:!1,completedAt:null,technicianNote:``}}),localStorage.setItem(i,JSON.stringify(t)),t}function o(e,t,n){let r=a();if(!r[e])return;r[e][t]=n;let o=[`bridgeMode`,`dhcpDisabled`,`powerReduced`,`channelFixed`,`ssidUnified`].every(t=>r[e][t]);return r[e].completedAt=o?new Date().toISOString():null,localStorage.setItem(i,JSON.stringify(r)),r}function s(e){let t=a();return t[e]&&(t[e]={bridgeMode:!1,dhcpDisabled:!1,powerReduced:!1,channelFixed:!1,ssidUnified:!1,completedAt:null,technicianNote:``},localStorage.setItem(i,JSON.stringify(t))),t}function c(){let r=a(),i=Object.values(r).filter(e=>e.completedAt).length,o=n.length,s=t.filter(e=>e.status===`error`).length;return t.filter(e=>e.status===`active`).length,`
    <div class="page-header">
      <h2>Network Dashboard</h2>
      <p>Hotel Parc — Network infrastructure overview & upgrade status</p>
    </div>

    <!-- Stat Cards -->
    <div class="stats-grid">
      <div class="stat-card blue">
        <div class="stat-icon">📡</div>
        <div class="stat-value">${t.length}</div>
        <div class="stat-label">WAN Lines</div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon">📶</div>
        <div class="stat-value">${n.length}</div>
        <div class="stat-label">Access Points</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon">🏨</div>
        <div class="stat-value">1022</div>
        <div class="stat-label">Max Guests</div>
      </div>
      <div class="stat-card orange">
        <div class="stat-icon">⚙️</div>
        <div class="stat-value">${i}/${o}</div>
        <div class="stat-label">APs Converted</div>
      </div>
      <div class="stat-card red">
        <div class="stat-icon">⚠️</div>
        <div class="stat-value">${s}</div>
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
          ${t.map(e=>`
            <div class="topo-node wan-group" title="${e.wan}: ${e.targetIp}">
              ${e.wan}
              <small>${e.targetIp}</small>
            </div>
          `).join(``)}
        </div>
        <div class="topo-line" style="height: 24px;"></div>
        <div class="topo-node mikrotik">
          MikroTik RB2011
          <small>PCC Load Balancing • DHCP Server • NAT</small>
        </div>
        <div class="topo-line" style="height: 24px;"></div>
        <div class="topo-node ap-group">
          ${o} Altai Access Points
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
      ${e.map(e=>`
        <div class="comparison-row">
          <div class="comp-label">
            <span class="comp-icon">${l(e.icon)}</span>
            ${e.component}
          </div>
          <div class="comp-current">
            <span class="comp-tag">❌ Current State</span>
            ${e.currentState}
          </div>
          <div class="comp-target">
            <span class="comp-tag">✅ Target State</span>
            ${e.targetState}
          </div>
        </div>
      `).join(``)}
    </div>
  `}function l(e){return{router:`🖧`,dhcp:`📋`,lan:`🌐`,wan:`🔌`,stability:`🛡️`}[e]||`📦`}var u=`wan`,d=`all`;function f(){return`
    <div class="page-header">
      <h2>Device Management</h2>
      <p>Inventory of WAN routers (Huawei GPON) and Altai access points</p>
    </div>

    <!-- Tabs -->
    <div class="tabs" id="deviceTabs">
      <button class="tab-btn ${u===`wan`?`active`:``}" data-tab="wan">
        📡 WAN Routers (${t.length})
      </button>
      <button class="tab-btn ${u===`ap`?`active`:``}" data-tab="ap">
        📶 Access Points (${n.length})
      </button>
    </div>

    <!-- WAN Routers Table -->
    <div id="wanPanel" class="${u===`wan`?``:`hidden`}">
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
              ${t.map(e=>`
                <tr>
                  <td><strong>${e.wan}</strong></td>
                  <td><span class="mono">${e.currentIp}</span></td>
                  <td><span class="mono">${e.mac}</span></td>
                  <td>${h(e.status)}</td>
                  <td>${e.statusNote}</td>
                  <td><span class="mono">${e.targetIp}</span></td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Access Points Table -->
    <div id="apPanel" class="${u===`ap`?``:`hidden`}">
      <div class="glass-card">
        <div class="card-header">
          <h3><span class="header-icon">📶</span> Altai Access Points</h3>
        </div>
        
        <!-- Floor Filters -->
        <div class="filter-bar" id="apFilters">
          <button class="filter-chip ${d===`all`?`active`:``}" data-filter="all">All (${n.length})</button>
          ${m()}
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
              ${p().map(e=>`
                <tr>
                  <td><strong>${e.name}</strong></td>
                  <td>${e.location}</td>
                  <td>${e.floor===0?`Ground`:`Floor `+e.floor}</td>
                  <td><span class="badge badge-progress">${e.wing}</span></td>
                  <td><span class="mono">${e.ip}</span></td>
                  <td><span class="mono">${e.mac}</span></td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function p(){return d===`all`?n:n.filter(e=>String(e.floor)===d)}function m(){return[...new Set(n.map(e=>e.floor))].sort((e,t)=>e-t).map(e=>{let t=e===0?`Ground`:`Floor ${e}`,r=n.filter(t=>t.floor===e).length;return`<button class="filter-chip ${d===String(e)?`active`:``}" data-filter="${e}">${t} (${r})</button>`}).join(``)}function h(e){return{active:`<span class="badge badge-active">Active</span>`,warning:`<span class="badge badge-warning">Warning</span>`,error:`<span class="badge badge-error">Problem</span>`}[e]||e}function g(){document.getElementById(`deviceTabs`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.tab-btn`);t&&(u=t.dataset.tab,_())}),document.getElementById(`apFilters`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.filter-chip`);t&&(d=t.dataset.filter,_())}),document.querySelectorAll(`.data-table thead th`).forEach(e=>{e.addEventListener(`click`,()=>{e.style.color=`var(--accent-blue)`,setTimeout(()=>{e.style.color=``},300)})})}function _(){let e=document.getElementById(`pageContent`);e&&(e.innerHTML=f(),g())}function v(){let t=a(),i=n.length*5,o=0;Object.values(t).forEach(e=>{[`bridgeMode`,`dhcpDisabled`,`powerReduced`,`channelFixed`,`ssidUnified`].forEach(t=>{e[t]&&o++})});let s=Object.values(t).filter(e=>e.completedAt).length,c=Math.round(o/i*100);return`
    <div class="page-header">
      <h2>Upgrade Plan</h2>
      <p>Network migration from current architecture to MikroTik-based infrastructure</p>
    </div>

    <!-- Overall Progress -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">📊</span> Overall Upgrade Progress</h3>
        <span class="badge ${c===100?`badge-complete`:`badge-progress`}">
          ${c===100?`Complete`:`In Progress`}
        </span>
      </div>
      <div class="stats-grid" style="margin-bottom: 20px;">
        <div class="stat-card blue">
          <div class="stat-icon">✅</div>
          <div class="stat-value">${o}</div>
          <div class="stat-label">Checks Done</div>
        </div>
        <div class="stat-card purple">
          <div class="stat-icon">📋</div>
          <div class="stat-value">${i}</div>
          <div class="stat-label">Total Checks</div>
        </div>
        <div class="stat-card green">
          <div class="stat-icon">📶</div>
          <div class="stat-value">${s}</div>
          <div class="stat-label">APs Completed</div>
        </div>
        <div class="stat-card orange">
          <div class="stat-icon">🔧</div>
          <div class="stat-value">${r.length}</div>
          <div class="stat-label">Task Categories</div>
        </div>
      </div>
      <div class="progress-bar-wrapper">
        <div class="progress-info">
          <span class="progress-label">Overall completion</span>
          <span class="progress-pct">${c}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${c}%"></div>
        </div>
      </div>
    </div>

    <!-- Architecture Changes (from Table 1) -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">🏗️</span> Architecture Changes Required</h3>
      </div>
      ${e.map(e=>`
        <div class="comparison-row">
          <div class="comp-label">
            <span class="comp-icon">${y(e.icon)}</span>
            ${e.component}
          </div>
          <div class="comp-current">
            <span class="comp-tag">❌ Current Problem</span>
            ${e.currentState}
          </div>
          <div class="comp-target">
            <span class="comp-tag">✅ Required Change</span>
            ${e.targetState}
          </div>
        </div>
      `).join(``)}
    </div>

    <!-- Intervention Checklist (from Table 4) -->
    <div class="glass-card">
      <div class="card-header">
        <h3><span class="header-icon">🔧</span> Intervention Checklist — Altai AP Settings</h3>
      </div>
      ${r.map(e=>`
        <div class="task-card ${e.critical?`critical`:``}">
          <div class="task-card-header">
            <div class="task-title">
              <span class="task-icon" style="background: ${e.critical?`var(--accent-red-dim)`:`var(--accent-blue-dim)`}; color: ${e.critical?`var(--accent-red)`:`var(--accent-blue)`};">
                ${b(e.icon)}
              </span>
              ${e.setting}
            </div>
            ${e.critical?`<span class="badge badge-error">Critical</span>`:`<span class="badge badge-warning">Important</span>`}
          </div>
          <div class="task-body">
            <div class="task-error">
              <div class="task-sub-label">Current Error</div>
              ${e.currentError}
            </div>
            <div class="task-fix">
              <div class="task-sub-label">Required Fix</div>
              ${e.requiredFix}
            </div>
          </div>
        </div>
      `).join(``)}
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
  `}function y(e){return{router:`🖧`,dhcp:`📋`,lan:`🌐`,wan:`🔌`,stability:`🛡️`}[e]||`📦`}function b(e){return{bridge:`🔀`,dhcp_off:`🚫`,signal:`📶`,channel:`📻`,wifi:`📡`,wifi_off:`🔇`}[e]||`⚙️`}var x=null;function S(){let e=a(),t=Object.values(e).filter(e=>e.completedAt).length,r=Object.values(e).filter(e=>[`bridgeMode`,`dhcpDisabled`,`powerReduced`,`channelFixed`,`ssidUnified`].filter(t=>e[t]).length>0&&!e.completedAt).length;return`
    <div class="page-header">
      <h2>Technician Interface</h2>
      <p>Track and confirm AP conversion from Gateway Mode to Bridge Mode</p>
    </div>

    <!-- Status Summary -->
    <div class="stats-grid">
      <div class="stat-card green">
        <div class="stat-icon">✅</div>
        <div class="stat-value">${t}</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat-card blue">
        <div class="stat-icon">🔄</div>
        <div class="stat-value">${r}</div>
        <div class="stat-label">In Progress</div>
      </div>
      <div class="stat-card orange">
        <div class="stat-icon">⏳</div>
        <div class="stat-value">${n.length-t-r}</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card purple">
        <div class="stat-icon">📶</div>
        <div class="stat-value">${n.length}</div>
        <div class="stat-label">Total APs</div>
      </div>
    </div>

    <!-- Progress -->
    <div class="glass-card">
      <div class="progress-bar-wrapper">
        <div class="progress-info">
          <span class="progress-label">AP Conversion Progress</span>
          <span class="progress-pct">${Math.round(t/n.length*100)}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${t/n.length*100}%"></div>
        </div>
      </div>
    </div>

    <!-- AP Cards -->
    <div id="apCards">
      ${n.map(t=>C(t,e[t.id])).join(``)}
    </div>
  `}function C(e,t){let n=[`bridgeMode`,`dhcpDisabled`,`powerReduced`,`channelFixed`,`ssidUnified`].filter(e=>t[e]).length,r=t.completedAt!==null,i=x===e.id,a=``;return a=r?`<span class="badge badge-complete">Completed</span>`:n>0?`<span class="badge badge-progress">${n}/5</span>`:`<span class="badge badge-pending">Pending</span>`,`
    <div class="ap-card ${r?`completed`:``} ${i?`open`:``}" data-ap-id="${e.id}">
      <div class="ap-card-header" data-toggle="${e.id}">
        <div class="ap-card-info">
          <div class="ap-avatar">${e.wing}${e.floor}</div>
          <div>
            <div class="ap-name">${e.name}</div>
            <div class="ap-location">${e.location}</div>
          </div>
        </div>
        <div class="gap-row" style="align-items: center;">
          ${a}
          <span class="ap-card-expand">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </div>
      </div>

      <div class="ap-checklist">
        <!-- Meta -->
        <div class="ap-meta-row">
          <span>IP: <span class="mono">${e.ip}</span></span>
          <span>MAC: <span class="mono">${e.mac}</span></span>
          <span>Floor: ${e.floor===0?`Ground`:e.floor}</span>
          <span>Wing: ${e.wing}</span>
        </div>

        <!-- Checklist -->
        <div class="mt-2">
          <div class="check-item">
            <input type="checkbox" ${t.bridgeMode?`checked`:``} data-ap="${e.id}" data-field="bridgeMode" />
            <div class="check-label">
              <div class="check-label-title">🔀 Switch to Bridge Mode</div>
              <div class="check-label-desc">Change from Gateway Mode to Bridge Mode for seamless roaming</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${t.dhcpDisabled?`checked`:``} data-ap="${e.id}" data-field="dhcpDisabled" />
            <div class="check-label">
              <div class="check-label-title">🚫 Disable DHCP</div>
              <div class="check-label-desc">Turn off DHCP server — MikroTik will handle address distribution</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${t.powerReduced?`checked`:``} data-ap="${e.id}" data-field="powerReduced" />
            <div class="check-label">
              <div class="check-label-title">📶 Reduce Transmit Power</div>
              <div class="check-label-desc">Lower from 29 dBm to 15-18 dBm for precise coverage</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${t.channelFixed?`checked`:``} data-ap="${e.id}" data-field="channelFixed" />
            <div class="check-label">
              <div class="check-label-title">📻 Fix Channel Selection</div>
              <div class="check-label-desc">Set to fixed channel (1, 6, or 11) — disable Auto</div>
            </div>
          </div>
          <div class="check-item">
            <input type="checkbox" ${t.ssidUnified?`checked`:``} data-ap="${e.id}" data-field="ssidUnified" />
            <div class="check-label">
              <div class="check-label-title">📡 Unify SSID</div>
              <div class="check-label-desc">Single unified network (open or single-password protected)</div>
            </div>
          </div>
        </div>

        <!-- Completed stamp -->
        <div class="ap-completed-stamp">
          ✅ All checks completed ${t.completedAt?`— `+new Date(t.completedAt).toLocaleString():``}
        </div>

        <!-- Reset button -->
        ${r?`
          <div class="mt-2 text-center">
            <button class="btn" data-reset="${e.id}">
              🔄 Reset Checklist
            </button>
          </div>
        `:``}
      </div>
    </div>
  `}function w(){let e=document.getElementById(`apCards`);e&&(e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-toggle]`);if(t){let e=parseInt(t.dataset.toggle);x=x===e?null:e,T();return}let n=e.target.closest(`[data-reset]`);if(n){s(parseInt(n.dataset.reset)),T();return}}),e.addEventListener(`change`,e=>{if(e.target.type===`checkbox`&&e.target.dataset.ap){let t=parseInt(e.target.dataset.ap),n=e.target.dataset.field;o(t,n,e.target.checked),T()}}))}function T(){let e=document.getElementById(`pageContent`);e&&(e.innerHTML=S(),w())}var E=`parc_mission_steps`;function D(){let e=localStorage.getItem(E);if(e)return JSON.parse(e);let t={step1:!1,step2:!1,step3:!1,step4:!1,step5:!1};return localStorage.setItem(E,JSON.stringify(t)),t}function O(e){let t=D();return t[e]=!t[e],localStorage.setItem(E,JSON.stringify(t)),t}function k(){let e=D(),t=Object.values(e).filter(Boolean).length,n=Math.round(t/5*100);return`
    <div class="page-header">
      <h2>Mission Brief</h2>
      <p>ملخص المهمة الميدانية — جاهز للقراءة قبل الوصول لفندق بارك</p>
    </div>

    <!-- ═══════════ 1. Mission Objective ═══════════ -->
    <div class="mission-objective">
      <div class="mission-obj-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      </div>
      <div class="mission-obj-tag">الهدف العاجل</div>
      <h3 class="mission-obj-title">إنقاذ شبكة فندق بارك (600 نزيل) من الاختناق وتحقيق استقرار فوري عبر جهاز الميكروتيك</h3>
    </div>

    <!-- ═══════════ 2. The Core Problem ═══════════ -->
    <div class="glass-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-red-dim); color: var(--accent-red);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </span>
          المشكلة الحالية
        </h3>
      </div>

      <div class="problem-card">
        <div class="problem-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
        </div>
        <div class="problem-card-body">
          <div class="problem-card-label">مشكلة نقاط الولوج</div>
          <p>نقاط الولوج (Altai) تعمل حالياً في وضع <strong>Gateway</strong>، مما يرهق معالجاتها ويدمر خاصية الانتقال السلس <strong>(Roaming)</strong> للنزلاء.</p>
        </div>
      </div>

      <div class="problem-card">
        <div class="problem-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <div class="problem-card-body">
          <div class="problem-card-label">مشكلة موجهات الفايبر</div>
          <p>وجود <strong>7 موجهات فايبر (Huawei)</strong> تعمل بشكل عشوائي وبدون موازنة أحمال، مما يهدر سرعة الإنترنت.</p>
        </div>
      </div>
    </div>

    <!-- ═══════════ 3. Target Architecture ═══════════ -->
    <div class="glass-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-green-dim); color: var(--accent-green);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          الهيكلة المستهدفة
        </h3>
      </div>

      <div class="solution-card">
        <div class="solution-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
        </div>
        <div class="solution-card-body">
          <div class="solution-card-label">المخ المركزي — MikroTik</div>
          <p>الميكروتيك سيصبح <strong>"المخ المركزي"</strong> (Core Router) لتوزيع الـ IP <span class="mono-inline">(172.16.0.0/22)</span> ودمج الخطوط السبعة.</p>
        </div>
      </div>

      <div class="solution-card">
        <div class="solution-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
        </div>
        <div class="solution-card-body">
          <div class="solution-card-label">نقاط الولوج — Bridge Mode</div>
          <p>تحويل جميع نقاط <strong>Altai</strong> إلى <strong>(Bridge Mode)</strong> لتصبح مجرد معابر شفافة وسريعة.</p>
        </div>
      </div>
    </div>

    <!-- ═══════════ 4. Omar's Action Plan ═══════════ -->
    <div class="glass-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-purple-dim); color: var(--accent-purple);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          </span>
          خطة عمل عمر الميدانية
        </h3>
        <span class="badge ${n===100?`badge-complete`:`badge-progress`}">${t}/5</span>
      </div>

      <!-- Progress -->
      <div class="progress-bar-wrapper" style="margin-bottom: 24px;">
        <div class="progress-info">
          <span class="progress-label">تقدم المهمة</span>
          <span class="progress-pct">${n}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${n}%"></div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline" id="missionTimeline">
        ${A(`step1`,1,e.step1,`الوصول والتجهيز`,`الوصول للمقر التقني الأول، وتشغيل حاسوب محمول (Laptop) متصل بإنترنت 4G خارجي.`,`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`)}
        ${A(`step2`,2,e.step2,`فتح AnyDesk`,`فتح برنامج AnyDesk وإعطاء الصلاحية للإدارة عن بعد (للمهندس أحمد).`,`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`)}
        ${A(`step3`,3,e.step3,`ربط الميكروتيك`,`ربط الميكروتيك بالطاقة، وتوصيله بالحاسوب المحمول عبر منفذ RJ45 وفتح برنامج Winbox.`,`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M12 18v4"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M2 12h6"/><path d="M18 12h4"/><path d="M4.93 19.07l4.24-4.24"/><path d="M14.83 9.17l4.24-4.24"/></svg>`)}
        ${A(`step4`,4,e.step4,`عزل موجهات Huawei`,`عزل موجهات Huawei السبعة عن السويتش الرئيسي (تجهيزاً لربطها بالميكروتيك).`,`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`)}
        ${A(`step5`,5,e.step5,`تحويل نقاط Altai`,`التوجه للطوابق (بعد إنهاء برمجة الميكروتيك عن بعد) لتحويل نقاط Altai إلى Bridge Mode وتخفيض قوة الإرسال.`,`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`)}
      </div>

      ${n===100?`
        <div class="mission-complete-banner">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>تم إنجاز جميع الخطوات بنجاح! 🎉</span>
        </div>
      `:``}
    </div>
  `}function A(e,t,n,r,i,a){return`
    <div class="timeline-step ${n?`done`:``}" data-step-key="${e}">
      <div class="timeline-marker">
        <div class="timeline-dot">
          ${n?`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:`<span>${t}</span>`}
        </div>
        <div class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-card ${n?`checked`:``}">
          <div class="timeline-card-header">
            <div class="timeline-icon">${a}</div>
            <div class="timeline-title">${r}</div>
            <input type="checkbox" class="timeline-check" data-key="${e}" ${n?`checked`:``} />
          </div>
          <p class="timeline-desc">${i}</p>
        </div>
      </div>
    </div>
  `}function j(){let e=document.getElementById(`missionTimeline`);e&&(e.addEventListener(`change`,e=>{e.target.classList.contains(`timeline-check`)&&(O(e.target.dataset.key),M())}),e.addEventListener(`click`,e=>{let t=e.target.closest(`.timeline-card`);if(t&&!e.target.classList.contains(`timeline-check`)){let e=t.querySelector(`.timeline-check`);e&&(O(e.dataset.key),M())}}))}function M(){let e=document.getElementById(`pageContent`);e&&(e.innerHTML=k(),j())}var N=`parc_setup_steps`;function P(){let e=localStorage.getItem(N);if(e)return JSON.parse(e);let t={step1:!1,step2:!1,step3:!1,step4:!1};return localStorage.setItem(N,JSON.stringify(t)),t}function F(e){let t=P();return t[e]=!t[e],localStorage.setItem(N,JSON.stringify(t)),t}function I(){let e=P(),t=Object.values(e).filter(Boolean).length,n=Math.round(t/4*100);return`
    <div class="page-header">
      <h2>تجهيز بيئة العمل</h2>
      <p>المقر التقني الأول — خطوات الربط وتجهيز البرامج للتحكم عن بعد</p>
    </div>

    <!-- Progress -->
    <div class="glass-card">
      <div class="progress-bar-wrapper" style="margin-bottom: 0;">
        <div class="progress-info">
          <span class="progress-label">تقدم التجهيز</span>
          <span class="progress-pct">${n}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${n}%"></div>
        </div>
      </div>
    </div>

    <!-- Steps -->
    <div class="setup-stepper" id="setupStepper">

      <!-- ═══════ Step 1 ═══════ -->
      <div class="setup-step ${e.step1?`done`:``}" data-step-key="step1">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${e.step1?`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:`1`}
          </div>
          <div class="setup-step-line"></div>
        </div>
        <div class="setup-step-content">
          <div class="setup-step-card">
            <div class="setup-step-header">
              <div class="setup-step-icon blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <div class="setup-step-title">التجهيز المادي</div>
                <div class="setup-step-subtitle">Physical Setup</div>
              </div>
              <input type="checkbox" class="setup-check" data-key="step1" ${e.step1?`checked`:``} />
            </div>
            <ul class="setup-instructions">
              <li>
                <span class="instruction-bullet">●</span>
                <span>ضع الحاسوب المحمول <strong>(Laptop)</strong> في المقر التقني الأول وقم بتوصيله بالكهرباء.</span>
              </li>
              <li>
                <span class="instruction-bullet cable">●</span>
                <span>قم بتوصيل كابل شبكة <strong>(RJ45)</strong> من حاسوبك إلى المبدل الرئيسي <strong>(Core Switch)</strong>.</span>
              </li>
              <li>
                <span class="instruction-bullet orange">●</span>
                <span>قم بتشغيل جهاز الميكروتيك <strong>(MikroTik)</strong> الجديد وربطه بالكهرباء، <strong style="color: var(--accent-orange);">ولا تربطه بشبكة الفندق بعد</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ═══════ Step 2 ═══════ -->
      <div class="setup-step ${e.step2?`done`:``}" data-step-key="step2">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${e.step2?`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:`2`}
          </div>
          <div class="setup-step-line"></div>
        </div>
        <div class="setup-step-content">
          <div class="setup-step-card">
            <div class="setup-step-header">
              <div class="setup-step-icon purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <div>
                <div class="setup-step-title">تأمين الإنترنت الخارجي</div>
                <div class="setup-step-subtitle">External Internet</div>
              </div>
              <input type="checkbox" class="setup-check" data-key="step2" ${e.step2?`checked`:``} />
            </div>
            <ul class="setup-instructions">
              <li>
                <span class="instruction-bullet purple">●</span>
                <span>بما أن شبكة الفندق ستنقطع أثناء الترقية، قم بتشغيل <strong>(نقطة اتصال 4G - Hotspot)</strong> من هاتفك الشخصي.</span>
              </li>
              <li>
                <span class="instruction-bullet purple">●</span>
                <span>اربط الحاسوب المحمول بشبكة الواي فاي الخاصة بهاتفك لضمان بقائه <strong>متصلاً بالإنترنت طوال العملية</strong>.</span>
              </li>
            </ul>
            <div class="setup-warning">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>مهم: لا تعتمد على إنترنت الفندق — ستنقطع الخدمة أثناء التحويل!</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════ Step 3 ═══════ -->
      <div class="setup-step ${e.step3?`done`:``}" data-step-key="step3">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${e.step3?`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:`3`}
          </div>
          <div class="setup-step-line"></div>
        </div>
        <div class="setup-step-content">
          <div class="setup-step-card">
            <div class="setup-step-header">
              <div class="setup-step-icon green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
              <div>
                <div class="setup-step-title">تحميل برامج العمل</div>
                <div class="setup-step-subtitle">Required Software</div>
              </div>
              <input type="checkbox" class="setup-check" data-key="step3" ${e.step3?`checked`:``} />
            </div>
            <p class="setup-note">تأكد من وجود هذه البرامج على سطح المكتب:</p>
            <div class="software-list">
              <div class="software-item">
                <div class="software-icon anydesk">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <div class="software-info">
                  <div class="software-name">AnyDesk</div>
                  <div class="software-desc">للسماح للمهندس بالدخول عن بعد</div>
                </div>
                <a href="https://anydesk.com/en/downloads" target="_blank" rel="noopener" class="btn-download">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  تحميل
                </a>
              </div>
              <div class="software-item">
                <div class="software-icon winbox">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div class="software-info">
                  <div class="software-name">Winbox</div>
                  <div class="software-desc">لبرمجة جهاز الميكروتيك</div>
                </div>
                <a href="https://mikrotik.com/download" target="_blank" rel="noopener" class="btn-download">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  تحميل
                </a>
              </div>
              <div class="software-item">
                <div class="software-icon scanner">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </div>
                <div class="software-info">
                  <div class="software-name">Advanced IP Scanner</div>
                  <div class="software-desc">لفحص الشبكة المحلية</div>
                </div>
                <a href="https://www.advanced-ip-scanner.com/" target="_blank" rel="noopener" class="btn-download">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  تحميل
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════ Step 4 ═══════ -->
      <div class="setup-step ${e.step4?`done`:``}" data-step-key="step4">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${e.step4?`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:`4`}
          </div>
        </div>
        <div class="setup-step-content">
          <div class="setup-step-card">
            <div class="setup-step-header">
              <div class="setup-step-icon orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div class="setup-step-title">منح الصلاحية والانتظار</div>
                <div class="setup-step-subtitle">Handover</div>
              </div>
              <input type="checkbox" class="setup-check" data-key="step4" ${e.step4?`checked`:``} />
            </div>
            <ul class="setup-instructions">
              <li>
                <span class="instruction-bullet orange">●</span>
                <span>افتح برنامج <strong>AnyDesk</strong>.</span>
              </li>
              <li>
                <span class="instruction-bullet orange">●</span>
                <span>أرسل <strong>رقم الدخول (ID)</strong> وكلمة المرور للمهندس أحمد عبر الواتساب.</span>
              </li>
              <li>
                <span class="instruction-bullet red">●</span>
                <span><strong style="color: var(--accent-red);">انتظر تعليمات المهندس أحمد</strong> قبل فصل أي موجه (Router) من موجهات Huawei السبعة.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    ${n===100?`
      <div class="mission-complete-banner">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>التجهيز مكتمل! في انتظار المهندس أحمد للبدء بالعمل عن بعد 🎉</span>
      </div>
    `:``}
  `}function L(){let e=document.getElementById(`setupStepper`);e&&(e.addEventListener(`change`,e=>{e.target.classList.contains(`setup-check`)&&(F(e.target.dataset.key),R())}),e.addEventListener(`click`,e=>{if(!e.target.closest(`.btn-download`)&&e.target.closest(`.setup-step-card`)&&!e.target.classList.contains(`setup-check`)){let t=e.target.closest(`.setup-step`);if(t){let e=t.querySelector(`.setup-check`);e&&(F(e.dataset.key),R())}}}))}function R(){let e=document.getElementById(`pageContent`);e&&(e.innerHTML=I(),L())}var z={"/":{render:c,init:null,title:`Dashboard`},"/devices":{render:f,init:g,title:`Devices`},"/upgrade":{render:v,init:null,title:`Upgrade Plan`},"/technician":{render:S,init:w,title:`Technician`},"/mission":{render:k,init:j,title:`Mission Brief`},"/setup":{render:I,init:L,title:`Field Setup`}};function B(){return window.location.hash.slice(1)||`/`}function V(){let e=B(),t=z[e]||z[`/`],n=document.getElementById(`pageContent`);n&&(n.innerHTML=t.render(),n.style.animation=`none`,n.offsetHeight,n.style.animation=``),t.init&&t.init(),document.querySelectorAll(`.nav-link`).forEach(t=>{let n=t.dataset.page,r=e===`/`&&n===`dashboard`||e===`/`+n;t.classList.toggle(`active`,r)}),document.title=`Hotel Parc — ${t.title}`,H()}function H(){document.getElementById(`sidebar`)?.classList.remove(`open`),document.getElementById(`sidebarOverlay`)?.classList.remove(`active`)}function U(){let e=document.getElementById(`menuToggle`),t=document.getElementById(`sidebarOverlay`);e?.addEventListener(`click`,()=>{document.getElementById(`sidebar`)?.classList.toggle(`open`),t?.classList.toggle(`active`)}),t?.addEventListener(`click`,H)}window.addEventListener(`hashchange`,V),window.addEventListener(`DOMContentLoaded`,()=>{U(),V()});