// =============================================
// Mission Brief Page — Omar's Field Briefing
// =============================================

const MISSION_STORAGE_KEY = 'parc_mission_steps';

function getStepStatus() {
  const stored = localStorage.getItem(MISSION_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  const defaults = { step1: false, step2: false, step3: false, step4: false, step5: false };
  localStorage.setItem(MISSION_STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

function toggleStep(stepKey) {
  const status = getStepStatus();
  status[stepKey] = !status[stepKey];
  localStorage.setItem(MISSION_STORAGE_KEY, JSON.stringify(status));
  return status;
}

export function renderMission() {
  const steps = getStepStatus();
  const doneCount = Object.values(steps).filter(Boolean).length;
  const totalSteps = 5;
  const pct = Math.round((doneCount / totalSteps) * 100);

  return `
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
        <span class="badge ${pct === 100 ? 'badge-complete' : 'badge-progress'}">${doneCount}/${totalSteps}</span>
      </div>

      <!-- Progress -->
      <div class="progress-bar-wrapper" style="margin-bottom: 24px;">
        <div class="progress-info">
          <span class="progress-label">تقدم المهمة</span>
          <span class="progress-pct">${pct}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline" id="missionTimeline">
        ${renderTimelineStep('step1', 1, steps.step1,
          'الوصول والتجهيز',
          'الوصول للمقر التقني الأول، وتشغيل حاسوب محمول (Laptop) متصل بإنترنت 4G خارجي.',
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
        )}
        ${renderTimelineStep('step2', 2, steps.step2,
          'فتح AnyDesk',
          'فتح برنامج AnyDesk وإعطاء الصلاحية للإدارة عن بعد (للمهندس أحمد).',
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
        )}
        ${renderTimelineStep('step3', 3, steps.step3,
          'ربط الميكروتيك',
          'ربط الميكروتيك بالطاقة، وتوصيله بالحاسوب المحمول عبر منفذ RJ45 وفتح برنامج Winbox.',
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6"/><path d="M12 18v4"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M2 12h6"/><path d="M18 12h4"/><path d="M4.93 19.07l4.24-4.24"/><path d="M14.83 9.17l4.24-4.24"/></svg>'
        )}
        ${renderTimelineStep('step4', 4, steps.step4,
          'عزل موجهات Huawei',
          'عزل موجهات Huawei السبعة عن السويتش الرئيسي (تجهيزاً لربطها بالميكروتيك).',
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>'
        )}
        ${renderTimelineStep('step5', 5, steps.step5,
          'تحويل نقاط Altai',
          'التوجه للطوابق (بعد إنهاء برمجة الميكروتيك عن بعد) لتحويل نقاط Altai إلى Bridge Mode وتخفيض قوة الإرسال.',
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>'
        )}
      </div>

      ${pct === 100 ? `
        <div class="mission-complete-banner">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>تم إنجاز جميع الخطوات بنجاح! 🎉</span>
        </div>
      ` : ''}
    </div>
  `;
}

function renderTimelineStep(key, num, done, title, desc, iconSvg) {
  return `
    <div class="timeline-step ${done ? 'done' : ''}" data-step-key="${key}">
      <div class="timeline-marker">
        <div class="timeline-dot">
          ${done
            ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
            : `<span>${num}</span>`
          }
        </div>
        <div class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-card ${done ? 'checked' : ''}">
          <div class="timeline-card-header">
            <div class="timeline-icon">${iconSvg}</div>
            <div class="timeline-title">${title}</div>
            <input type="checkbox" class="timeline-check" data-key="${key}" ${done ? 'checked' : ''} />
          </div>
          <p class="timeline-desc">${desc}</p>
        </div>
      </div>
    </div>
  `;
}

export function initMissionEvents() {
  const timeline = document.getElementById('missionTimeline');
  if (!timeline) return;

  timeline.addEventListener('change', (e) => {
    if (e.target.classList.contains('timeline-check')) {
      toggleStep(e.target.dataset.key);
      rerenderMission();
    }
  });

  // Also allow clicking the card to toggle
  timeline.addEventListener('click', (e) => {
    const card = e.target.closest('.timeline-card');
    if (card && !e.target.classList.contains('timeline-check')) {
      const checkbox = card.querySelector('.timeline-check');
      if (checkbox) {
        toggleStep(checkbox.dataset.key);
        rerenderMission();
      }
    }
  });
}

function rerenderMission() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = renderMission();
    initMissionEvents();
  }
}
