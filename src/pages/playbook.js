// =============================================
// Technician Playbook — Field Code of Conduct
// =============================================

const PLAYBOOK_STORAGE_KEY = 'parc_playbook';

function getPlaybookStatus() {
  const stored = localStorage.getItem(PLAYBOOK_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  const defaults = {
    goBag: { tool1: false, tool2: false, tool3: false, tool4: false, tool5: false, tool6: false },
    confirmed: false,
    confirmedAt: null,
  };
  localStorage.setItem(PLAYBOOK_STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

function updatePlaybook(updates) {
  const status = getPlaybookStatus();
  Object.assign(status, updates);
  localStorage.setItem(PLAYBOOK_STORAGE_KEY, JSON.stringify(status));
  return status;
}

function toggleGoBagItem(key) {
  const status = getPlaybookStatus();
  status.goBag[key] = !status.goBag[key];
  localStorage.setItem(PLAYBOOK_STORAGE_KEY, JSON.stringify(status));
  return status;
}

export function renderPlaybook() {
  const status = getPlaybookStatus();
  const gb = status.goBag;
  const gbDone = Object.values(gb).filter(Boolean).length;
  const gbTotal = Object.keys(gb).length;
  const allGoBagDone = gbDone === gbTotal;

  return `
    <div class="page-header">
      <h2>ميثاق التقني الميداني</h2>
      <p>Field Technician Playbook — بروتوكول التدخل الفندقي وحماية العقد</p>
    </div>

    ${status.confirmed ? `
      <div class="playbook-confirmed-banner">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>تم التأكيد — ${new Date(status.confirmedAt).toLocaleString('ar-MA')}</span>
      </div>
    ` : ''}

    <!-- ═══════ Card 1: Go-Bag ═══════ -->
    <div class="glass-card playbook-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-blue-dim); color: var(--accent-blue);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </span>
          التجهيزات الاستباقية
        </h3>
        <span class="badge ${allGoBagDone ? 'badge-complete' : 'badge-progress'}">${gbDone}/${gbTotal}</span>
      </div>
      <p class="playbook-section-label">The Pro Go-Bag</p>

      <div class="playbook-checklist" id="goBagList">
        <label class="playbook-check-item ${gb.tool1 ? 'checked' : ''}">
          <input type="checkbox" class="gobag-check" data-key="tool1" ${gb.tool1 ? 'checked' : ''} />
          <div class="playbook-check-content">
            <span class="playbook-check-title">أدوات الشبكة الأساسية</span>
            <span class="playbook-check-desc">أداة الأرجة (Crimping Tool)، كابلات UTP، رؤوس RJ45</span>
          </div>
        </label>
        <label class="playbook-check-item ${gb.tool2 ? 'checked' : ''}">
          <input type="checkbox" class="gobag-check" data-key="tool2" ${gb.tool2 ? 'checked' : ''} />
          <div class="playbook-check-content">
            <span class="playbook-check-title">آلة فحص الكابلات (Cable Tester)</span>
            <span class="playbook-check-desc critical-note">مهم جداً: لا تثق بأي كابل قديم دون فحصه</span>
          </div>
        </label>
        <label class="playbook-check-item ${gb.tool3 ? 'checked' : ''}">
          <input type="checkbox" class="gobag-check" data-key="tool3" ${gb.tool3 ? 'checked' : ''} />
          <div class="playbook-check-content">
            <span class="playbook-check-title">هاتف مشحون 100% + بطارية محمولة</span>
            <span class="playbook-check-desc">Power Bank للطوارئ</span>
          </div>
        </label>
        <label class="playbook-check-item ${gb.tool4 ? 'checked' : ''}">
          <input type="checkbox" class="gobag-check" data-key="tool4" ${gb.tool4 ? 'checked' : ''} />
          <div class="playbook-check-content">
            <span class="playbook-check-title">طابعة ملصقات (Label Maker)</span>
            <span class="playbook-check-desc">لتسمية أي كابل يتم تعديله</span>
          </div>
        </label>
        <label class="playbook-check-item ${gb.tool5 ? 'checked' : ''}">
          <input type="checkbox" class="gobag-check" data-key="tool5" ${gb.tool5 ? 'checked' : ''} />
          <div class="playbook-check-content">
            <span class="playbook-check-title">مفتاح USB للطوارئ</span>
            <span class="playbook-check-desc">يحتوي على Winbox ونسخ احتياطية</span>
          </div>
        </label>
        <label class="playbook-check-item ${gb.tool6 ? 'checked' : ''}">
          <input type="checkbox" class="gobag-check" data-key="tool6" ${gb.tool6 ? 'checked' : ''} />
          <div class="playbook-check-content">
            <span class="playbook-check-title">شوكة إخراج بطاقة الهاتف (SIM Ejector Pin)</span>
            <span class="playbook-check-desc critical-note">ضرورية لإعادة الضبط المصنعي (Factory Reset) للأجهزة عبر زر Reset المدفون</span>
          </div>
        </label>
      </div>
    </div>

    <!-- ═══════ Card 2: Invisible Technician ═══════ -->
    <div class="glass-card playbook-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-purple-dim); color: var(--accent-purple);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
          </span>
          عقلية التقني الفندقي
        </h3>
      </div>
      <p class="playbook-section-label">The Invisible Technician</p>

      <div class="playbook-rules">
        <div class="playbook-rule">
          <div class="playbook-rule-icon" style="background: var(--accent-green-dim); color: var(--accent-green);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">الهدوء والنظافة</div>
            <p>أعد كل شيء كما كان <strong>(الأسقف المعلقة، الخزانات)</strong>. لا تترك أي أثر أو غبار.</p>
          </div>
        </div>
        <div class="playbook-rule">
          <div class="playbook-rule-icon" style="background: var(--accent-orange-dim); color: var(--accent-orange);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">اللباقة مع النزلاء</div>
            <p>إذا سألك نزيل، أجب بابتسامة:</p>
            <div class="playbook-quote">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              "نقوم بتحديث شامل لتسريع الإنترنت، ستعود الخدمة خلال دقائق. شكراً لتفهمكم."
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════ Card 3: SLA Protection ═══════ -->
    <div class="glass-card playbook-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-red-dim); color: var(--accent-red);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </span>
          التوثيق وحماية العقد
        </h3>
      </div>
      <p class="playbook-section-label">SLA Protection</p>

      <div class="playbook-rules">
        <div class="playbook-rule">
          <div class="playbook-rule-icon" style="background: var(--accent-blue-dim); color: var(--accent-blue);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">التوثيق بالصور 📸</div>
            <p>التقط صورة واضحة للخزانة <strong>(Rack)</strong> أو الكابلات <strong>قبل لمسها</strong>، وصورة أخرى <strong>بعد انتهاء عملك</strong>.</p>
          </div>
        </div>
        <div class="playbook-rule">
          <div class="playbook-rule-icon" style="background: var(--accent-red-dim); color: var(--accent-red);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">قاعدة التشكيك ⚠️</div>
            <p>افحص الكابلات <strong>قبل ربطها</strong> بجهاز الميكروتيك الجديد لتجنب <strong style="color: var(--accent-red);">التماس الكهربائي</strong>.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════ Card 4: Cloud Documentation ═══════ -->
    <div class="glass-card playbook-card">
      <div class="card-header">
        <h3>
          <span class="header-icon" style="background: var(--accent-green-dim); color: var(--accent-green);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>
          </span>
          التوثيق السحابي
        </h3>
      </div>
      <p class="playbook-section-label">Cloud Documentation</p>

      <div class="playbook-rules">
        <div class="playbook-rule">
          <div class="playbook-rule-icon" style="background: var(--accent-green-dim); color: var(--accent-green);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">الهدف</div>
            <p>أرشفة صور التدخلات <strong>(قبل وبعد)</strong> لتسهيل الصيانة المستقبلية.</p>
          </div>
        </div>

        <div class="playbook-rule cloud-credentials">
          <div class="playbook-rule-icon" style="background: var(--accent-blue-dim); color: var(--accent-blue);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">المنصة: Google Drive</div>
            <div class="cloud-cred-grid">
              <div class="cloud-cred-row">
                <span class="cloud-cred-label">البريد:</span>
                <span class="cloud-cred-value mono-inline">support@ipst.education</span>
              </div>
              <div class="cloud-cred-row">
                <span class="cloud-cred-label">كلمة المرور:</span>
                <span class="cloud-cred-value mono-inline">80598059caixa1*</span>
              </div>
            </div>
            <div class="cloud-2fa-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>الدخول محمي بمصادقة ثنائية <strong>(2FA)</strong>، يرجى التنسيق مع المهندس أحمد عند تسجيل الدخول لتلقي رمز التفعيل.</span>
            </div>
          </div>
        </div>

        <div class="playbook-rule">
          <div class="playbook-rule-icon" style="background: var(--accent-orange-dim); color: var(--accent-orange);">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div class="playbook-rule-body">
            <div class="playbook-rule-title">قاعدة التسمية 🏷️</div>
            <p>سَمِّ الصور باسم الجهاز والتاريخ:</p>
            <div class="cloud-naming-example">
              <span class="mono-inline">Rack_Before_1.jpg</span>
              <span class="cloud-naming-arrow">→</span>
              <span class="mono-inline">Rack_After_1.jpg</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════ Confirmation Gate ═══════ -->
    <div class="glass-card playbook-confirm-card" id="playbookConfirmCard">
      <label class="playbook-oath" id="playbookOath">
        <input type="checkbox" id="oathCheck" ${status.confirmed ? 'checked disabled' : ''} />
        <span class="playbook-oath-text">أؤكد أنني قرأت الميثاق، وأحمل معي كافة التجهيزات المطلوبة.</span>
      </label>
      <button class="btn-start-mission" id="startMissionBtn" ${!status.confirmed ? 'disabled' : ''}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <span>تأكيد وبدء المهمة (Start Mission)</span>
      </button>
    </div>
  `;
}

export function initPlaybookEvents() {
  // Go-bag checkboxes
  const goBagList = document.getElementById('goBagList');
  if (goBagList) {
    goBagList.addEventListener('change', (e) => {
      if (e.target.classList.contains('gobag-check')) {
        toggleGoBagItem(e.target.dataset.key);
        rerenderPlaybook();
      }
    });
  }

  // Oath checkbox
  const oathCheck = document.getElementById('oathCheck');
  const startBtn = document.getElementById('startMissionBtn');
  if (oathCheck && startBtn) {
    oathCheck.addEventListener('change', () => {
      startBtn.disabled = !oathCheck.checked;
    });
  }

  // Start mission button
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const status = getPlaybookStatus();
      if (status.confirmed) {
        window.location.hash = '#/setup';
        return;
      }
      updatePlaybook({ confirmed: true, confirmedAt: new Date().toISOString() });
      window.location.hash = '#/setup';
    });
  }
}

function rerenderPlaybook() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = renderPlaybook();
    initPlaybookEvents();
  }
}
