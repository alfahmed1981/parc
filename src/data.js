// =============================================
// Hotel Parc Network - Structured Data Layer
// =============================================

// Table 1: Network Architecture Overview (Current vs Target)
export const networkOverview = [
  {
    id: 1,
    component: 'Core Router',
    componentAr: 'الموجه المركزي',
    currentState: 'Windows Server (IP: 192.168.1.91) via single router',
    currentStateAr: 'خادم Windows Server (IP: 192.168.1.91) يمر عبر موجه واحد',
    targetState: 'MikroTik RB2011 for PCC Load Balancing',
    targetStateAr: 'جهاز MikroTik RB2011 لدمج الخطوط (PCC Load Balancing)',
    icon: 'router'
  },
  {
    id: 2,
    component: 'DHCP Server',
    componentAr: 'خادم العناوين',
    currentState: 'APs (Altai) distribute addresses & act as NAT',
    currentStateAr: 'نقاط الولوج (Altai) هي من توزع العناوين وتعمل كـ NAT',
    targetState: 'MikroTik as sole central DHCP & NAT server',
    targetStateAr: 'MikroTik هو الموزع المركزي الوحيد للعناوين وللـ NAT',
    icon: 'dhcp'
  },
  {
    id: 3,
    component: 'Guest LAN Subnet',
    componentAr: 'نطاق شبكة النزلاء',
    currentState: 'Mixed/random, causing conflicts (narrow /24 range)',
    currentStateAr: 'مختلط وعشوائي ويسبب تضارباً (نطاق ضيق /24)',
    targetState: 'Unified wide range: 172.16.0.0/22 (1022 devices)',
    targetStateAr: 'نطاق واسع وموحد: 172.16.0.0/22 (يستوعب 1022 جهازاً)',
    icon: 'lan'
  },
  {
    id: 4,
    component: 'Fiber Router WANs',
    componentAr: 'نطاقات موجهات الفايبر',
    currentState: 'All 7 routers in same subnet (192.168.1.x)',
    currentStateAr: 'جميع الموجهات السبعة في نفس النطاق (192.168.1.x)',
    targetState: 'Each router isolated (192.168.10.x to 192.168.70.x)',
    targetStateAr: 'كل موجه في نطاق معزول (192.168.10.x إلى 192.168.70.x)',
    icon: 'wan'
  },
  {
    id: 5,
    component: 'Service Stability (600 guests)',
    componentAr: 'استقرار الخدمة (600 نزيل)',
    currentState: 'Severe bottleneck, AP crashes, roaming disconnects',
    currentStateAr: 'اختناق شديد، توقف نقاط الولوج، انقطاع عند التجول',
    targetState: 'Combined speed, high stability, seamless roaming',
    targetStateAr: 'سرعة مدمجة، استقرار عالٍ، انتقال سلس (Roaming) بين الطوابق',
    icon: 'stability'
  }
];

// Table 2: WAN Routers (Huawei GPON)
export const wanRouters = [
  { id: 1, wan: 'WAN 1', currentIp: '192.168.1.100', mac: '60:3D:29:BE:52:33', status: 'active', statusNote: 'dev.opt', targetIp: '192.168.10.1' },
  { id: 2, wan: 'WAN 2', currentIp: '192.168.1.101', mac: 'A4:16:E7:E5:33:8E', status: 'warning', statusNote: 'Connected to server — carries all network load', targetIp: '192.168.20.1' },
  { id: 3, wan: 'WAN 3', currentIp: '192.168.1.102', mac: 'A4:16:E7:E5:35:37', status: 'active', statusNote: 'Working normally', targetIp: '192.168.30.1' },
  { id: 4, wan: 'WAN 4', currentIp: '192.168.1.103', mac: 'A4:16:E7:E5:2D:B6', status: 'error', statusNote: 'Problem detected', targetIp: '192.168.40.1' },
  { id: 5, wan: 'WAN 5', currentIp: '192.168.1.104', mac: 'A4:16:E7:E5:37:13', status: 'active', statusNote: 'Working normally', targetIp: '192.168.50.1' },
  { id: 6, wan: 'WAN 6', currentIp: '192.168.1.105', mac: 'A4:16:E7:E5:17:DD', status: 'active', statusNote: 'Working normally', targetIp: '192.168.60.1' },
  { id: 7, wan: 'WAN 7', currentIp: '192.168.1.106', mac: 'A4:16:E7:E5:2D:D8', status: 'active', statusNote: 'Working normally', targetIp: '192.168.70.1' }
];

// Table 3: Access Points (Altai)
export const accessPoints = [
  { id: 1,  name: 'A5118_COULOIRE', location: 'Floor 5, Wing A, near Room 118', locationAr: 'الطابق 5، جناح A، قرب غرفة 118', floor: 5, wing: 'A', ip: '192.168.1.10', mac: '00:19:BE:A1:22:C0' },
  { id: 2,  name: 'AC3109',        location: 'Floor 3, Wing A, near Room 109', locationAr: 'الطابق 3، جناح A، قرب غرفة 109', floor: 3, wing: 'A', ip: '192.168.1.14', mac: '00:19:BE:A4:02:B2' },
  { id: 3,  name: 'AC3115',        location: 'Floor 3, Wing A, near Room 115', locationAr: 'الطابق 3، جناح A، قرب غرفة 115', floor: 3, wing: 'A', ip: '192.168.1.2',  mac: '00:19:BE:A4:FB:B9' },
  { id: 4,  name: 'CC3147',        location: 'Floor 3, Wing C, near Room 147', locationAr: 'الطابق 3، جناح C، قرب غرفة 147', floor: 3, wing: 'C', ip: '192.168.1.8',  mac: '00:19:BE:A4:FB:BC' },
  { id: 5,  name: 'BC2132',        location: 'Floor 2, Wing B, near Room 132', locationAr: 'الطابق 2، جناح B، قرب غرفة 132', floor: 2, wing: 'B', ip: '192.168.1.12', mac: '00:19:BE:A5:26:B5' },
  { id: 6,  name: 'EC2198',        location: 'Floor 2, Wing E, near Room 198', locationAr: 'الطابق 2، جناح E، قرب غرفة 198', floor: 2, wing: 'E', ip: '192.168.1.11', mac: '00:19:BE:A4:FB:BA' },
  { id: 7,  name: 'RECEPTION_L',   location: 'Reception (Left Side)',          locationAr: 'الاستقبال (الجهة اليسرى)',       floor: 0, wing: 'R', ip: '192.168.1.9',  mac: '00:19:BE:A4:02:B5' },
  { id: 8,  name: 'RECEPTION_LR',  location: 'Reception (Left Rear)',          locationAr: 'الاستقبال (اليسار الخلفي)',      floor: 0, wing: 'R', ip: '192.168.1.7',  mac: '00:19:BE:A4:02:B6' },
  { id: 9,  name: 'RECEPTION_R',   location: 'Reception (Right Side)',         locationAr: 'الاستقبال (الجهة اليمنى)',       floor: 0, wing: 'R', ip: '192.168.1.1',  mac: '00:19:BE:A4:02:B7' },
  { id: 10, name: 'HALL_V',        location: 'Main Hall V',                    locationAr: 'القاعة الرئيسية V',              floor: 0, wing: 'H', ip: '192.168.1.5',  mac: '00:19:BE:A1:22:3F' },
  { id: 11, name: 'PANCHO',        location: 'Pancho Area',                    locationAr: 'منطقة بانشو (Pancho)',            floor: 0, wing: 'P', ip: '192.168.1.15', mac: '00:19:BE:A1:0D:B6' },
  { id: 12, name: 'BACK_E_106',    location: 'Rear, Wing E, Room 106',         locationAr: 'الخلف، جناح E، غرفة 106',        floor: 1, wing: 'E', ip: '192.168.1.13', mac: '00:19:BE:A4:02:B3' }
];

// Table 4: Upgrade Intervention Checklist
export const upgradeTasks = [
  {
    id: 1,
    setting: 'Network Mode',
    settingAr: 'وضع التشغيل',
    currentError: 'Gateway Mode (isolates guests, overloads CPU)',
    currentErrorAr: 'Gateway Mode (يفصل النزلاء ويرهق المعالج)',
    requiredFix: 'Switch to Bridge Mode (seamless roaming)',
    requiredFixAr: 'تحويله إلى Bridge Mode (انتقال سلس Roaming)',
    icon: 'bridge',
    critical: true
  },
  {
    id: 2,
    setting: 'DHCP Distribution',
    settingAr: 'توزيع العناوين',
    currentError: 'Enabled on every AP (causes conflicts)',
    currentErrorAr: 'مُفعّل في كل نقطة (يسبب تضارباً)',
    requiredFix: 'Disabled — MikroTik takes over',
    requiredFixAr: 'إيقاف (Disabled) - الميكروتيك سيتولى المهمة',
    icon: 'dhcp_off',
    critical: true
  },
  {
    id: 3,
    setting: 'Transmit Power',
    settingAr: 'قوة البث',
    currentError: '29 dBm (max — causes severe interference)',
    currentErrorAr: '29 dBm (الحد الأقصى - يسبب تداخلاً عنيفاً)',
    requiredFix: 'Reduce to 15-18 dBm for precise coverage',
    requiredFixAr: 'خفضها إلى 15 - 18 dBm لتغطية دقيقة',
    icon: 'signal',
    critical: false
  },
  {
    id: 4,
    setting: 'Channel Selection',
    settingAr: 'اختيار القناة',
    currentError: 'Auto (causes disconnections on channel change)',
    currentErrorAr: 'Auto (يسبب انقطاعات عند تغيير القناة)',
    requiredFix: 'Manually fix channels: 1, 6, or 11',
    requiredFixAr: 'تثبيت القنوات يدوياً بالتناوب (1، أو 6، أو 11)',
    icon: 'channel',
    critical: false
  },
  {
    id: 5,
    setting: 'SSID Names',
    settingAr: 'أسماء الشبكات',
    currentError: 'Duplicate "PARC WIFI" with and without password',
    currentErrorAr: 'تكرار اسم PARC WIFI بكلمة مرور وبدون كلمة مرور',
    requiredFix: 'Unify network (fully open or single password)',
    requiredFixAr: 'توحيد الشبكة (إما مفتوحة بالكامل أو محمية بكلمة مرور واحدة)',
    icon: 'wifi',
    critical: false
  },
  {
    id: 6,
    setting: 'Huawei WiFi Broadcast',
    settingAr: 'البث اللاسلكي لموجهات Huawei',
    currentError: 'Fiber routers broadcasting their own WiFi networks',
    currentErrorAr: 'موجهات الفايبر تبث شبكات وايفي خاصة بها',
    requiredFix: 'Disable WLAN on all 7 routers',
    requiredFixAr: 'إيقاف الوايفي (Disable WLAN) في الموجهات السبعة',
    icon: 'wifi_off',
    critical: true
  }
];

// AP Conversion tracking helpers (localStorage)
const STORAGE_KEY = 'parc_ap_conversion';

export function getConversionStatus() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  
  // Initialize default status for each AP
  const defaults = {};
  accessPoints.forEach(ap => {
    defaults[ap.id] = {
      bridgeMode: false,
      dhcpDisabled: false,
      powerReduced: false,
      channelFixed: false,
      ssidUnified: false,
      completedAt: null,
      technicianNote: ''
    };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

export function updateConversionStatus(apId, field, value) {
  const status = getConversionStatus();
  if (!status[apId]) return;
  status[apId][field] = value;
  
  // Check if all items are completed
  const checks = ['bridgeMode', 'dhcpDisabled', 'powerReduced', 'channelFixed', 'ssidUnified'];
  const allDone = checks.every(c => status[apId][c]);
  status[apId].completedAt = allDone ? new Date().toISOString() : null;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
  return status;
}

export function resetConversionStatus(apId) {
  const status = getConversionStatus();
  if (status[apId]) {
    status[apId] = {
      bridgeMode: false,
      dhcpDisabled: false,
      powerReduced: false,
      channelFixed: false,
      ssidUnified: false,
      completedAt: null,
      technicianNote: ''
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
  }
  return status;
}
