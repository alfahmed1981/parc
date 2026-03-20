// =============================================
// Field Setup Page — Technical Room Preparation
// =============================================

const SETUP_STORAGE_KEY = 'parc_setup_steps';

function getSetupStatus() {
  const stored = localStorage.getItem(SETUP_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  const defaults = { step1: false, step2: false, step3: false, step4: false };
  localStorage.setItem(SETUP_STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

function toggleSetupStep(key) {
  const status = getSetupStatus();
  status[key] = !status[key];
  localStorage.setItem(SETUP_STORAGE_KEY, JSON.stringify(status));
  return status;
}

export function renderSetup() {
  const steps = getSetupStatus();
  const doneCount = Object.values(steps).filter(Boolean).length;
  const pct = Math.round((doneCount / 4) * 100);

  return `
    <div class="page-header">
      <h2>تجهيز بيئة العمل</h2>
      <p>المقر التقني الأول — خطوات الربط وتجهيز البرامج للتحكم عن بعد</p>
    </div>

    <!-- Progress -->
    <div class="glass-card">
      <div class="progress-bar-wrapper" style="margin-bottom: 0;">
        <div class="progress-info">
          <span class="progress-label">تقدم التجهيز</span>
          <span class="progress-pct">${pct}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>
    </div>

    <!-- Steps -->
    <div class="setup-stepper" id="setupStepper">

      <!-- ═══════ Step 1 ═══════ -->
      <div class="setup-step ${steps.step1 ? 'done' : ''}" data-step-key="step1">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${steps.step1
              ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
              : '1'}
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
              <input type="checkbox" class="setup-check" data-key="step1" ${steps.step1 ? 'checked' : ''} />
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
      <div class="setup-step ${steps.step2 ? 'done' : ''}" data-step-key="step2">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${steps.step2
              ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
              : '2'}
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
              <input type="checkbox" class="setup-check" data-key="step2" ${steps.step2 ? 'checked' : ''} />
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
      <div class="setup-step ${steps.step3 ? 'done' : ''}" data-step-key="step3">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${steps.step3
              ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
              : '3'}
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
              <input type="checkbox" class="setup-check" data-key="step3" ${steps.step3 ? 'checked' : ''} />
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

            <div class="setup-section-divider"></div>
            <p class="setup-note">📱 على الهاتف الذكي:</p>
            <div class="software-list">
              <div class="software-item zello-highlight">
                <div class="software-icon zello">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </div>
                <div class="software-info">
                  <div class="software-name">Zello (Walkie-Talkie)</div>
                  <div class="software-desc">للاتصال الصوتي المباشر والمستمر مع المهندس</div>
                </div>
                <a href="https://zello.com/app" target="_blank" rel="noopener" class="btn-download zello-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  تحميل
                </a>
              </div>
            </div>
            <ul class="setup-instructions" style="margin-top: 10px;">
              <li>
                <span class="instruction-bullet" style="color: var(--accent-orange);">●</span>
                <span><strong>قناة الاتصال:</strong> انضم للقناة الصوتية الخاصة بالعملية: <span class="mono-inline" style="background: var(--accent-orange-dim); padding: 2px 8px; border-radius: 4px;">Parc_Upgrade</span></span>
              </li>
              <li>
                <span class="instruction-bullet" style="color: var(--accent-orange);">●</span>
                <span><strong style="color: var(--accent-orange);">تجهيز مهم:</strong> ضع سماعات الأذن <strong>(Earbuds)</strong> لكي تستمع للتوجيهات وتبقى يداك حرتين للعمل في الكابلات.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ═══════ Step 4 ═══════ -->
      <div class="setup-step ${steps.step4 ? 'done' : ''}" data-step-key="step4">
        <div class="setup-step-marker">
          <div class="setup-step-num">
            ${steps.step4
              ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
              : '4'}
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
              <input type="checkbox" class="setup-check" data-key="step4" ${steps.step4 ? 'checked' : ''} />
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
              <li>
                <span class="instruction-bullet" style="color: var(--accent-green);">●</span>
                <span>تأكد من عمل الميكروفون في تطبيق <strong>Zello</strong>، وأخبر المهندس أحمد <strong style="color: var(--accent-green);">صوتياً</strong> بأنك جاهز لبدء العملية.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    ${pct === 100 ? `
      <div class="mission-complete-banner">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>التجهيز مكتمل! في انتظار المهندس أحمد للبدء بالعمل عن بعد 🎉</span>
      </div>
    ` : ''}
  `;
}

export function initSetupEvents() {
  const stepper = document.getElementById('setupStepper');
  if (!stepper) return;

  stepper.addEventListener('change', (e) => {
    if (e.target.classList.contains('setup-check')) {
      toggleSetupStep(e.target.dataset.key);
      rerenderSetup();
    }
  });

  // Click card to toggle
  stepper.addEventListener('click', (e) => {
    // Don't toggle if clicking a download link
    if (e.target.closest('.btn-download')) return;

    const card = e.target.closest('.setup-step-card');
    if (card && !e.target.classList.contains('setup-check')) {
      const step = e.target.closest('.setup-step');
      if (step) {
        const checkbox = step.querySelector('.setup-check');
        if (checkbox) {
          toggleSetupStep(checkbox.dataset.key);
          rerenderSetup();
        }
      }
    }
  });
}

function rerenderSetup() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = renderSetup();
    initSetupEvents();
  }
}
