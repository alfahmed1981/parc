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
  `}function w(){let e=document.getElementById(`apCards`);e&&(e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-toggle]`);if(t){let e=parseInt(t.dataset.toggle);x=x===e?null:e,T();return}let n=e.target.closest(`[data-reset]`);if(n){s(parseInt(n.dataset.reset)),T();return}}),e.addEventListener(`change`,e=>{if(e.target.type===`checkbox`&&e.target.dataset.ap){let t=parseInt(e.target.dataset.ap),n=e.target.dataset.field;o(t,n,e.target.checked),T()}}))}function T(){let e=document.getElementById(`pageContent`);e&&(e.innerHTML=S(),w())}var E={"/":{render:c,init:null,title:`Dashboard`},"/devices":{render:f,init:g,title:`Devices`},"/upgrade":{render:v,init:null,title:`Upgrade Plan`},"/technician":{render:S,init:w,title:`Technician`}};function D(){return window.location.hash.slice(1)||`/`}function O(){let e=D(),t=E[e]||E[`/`],n=document.getElementById(`pageContent`);n&&(n.innerHTML=t.render(),n.style.animation=`none`,n.offsetHeight,n.style.animation=``),t.init&&t.init(),document.querySelectorAll(`.nav-link`).forEach(t=>{let n=t.dataset.page,r=e===`/`&&n===`dashboard`||e===`/`+n;t.classList.toggle(`active`,r)}),document.title=`Hotel Parc — ${t.title}`,k()}function k(){document.getElementById(`sidebar`)?.classList.remove(`open`),document.getElementById(`sidebarOverlay`)?.classList.remove(`active`)}function A(){let e=document.getElementById(`menuToggle`),t=document.getElementById(`sidebarOverlay`);e?.addEventListener(`click`,()=>{document.getElementById(`sidebar`)?.classList.toggle(`open`),t?.classList.toggle(`active`)}),t?.addEventListener(`click`,k)}window.addEventListener(`hashchange`,O),window.addEventListener(`DOMContentLoaded`,()=>{A(),O()});