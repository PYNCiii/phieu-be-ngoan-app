// ==========================================
// DATA CONSTANTS & DEFAULT MODELS
// ==========================================
const DEFAULT_TICKET_TYPES = {
  'cham-hoc': {
    id: 'cham-hoc',
    name: 'Phiếu Bé Ngoan Chăm Học',
    icon: '📚',
    colorClass: 'cham-hoc',
    pointsValue: 1,
    isSpecial: false,
    description: 'Dành cho việc học tập, đọc sách & hoàn thành bài tập tốt!'
  },
  'sieng-nang': {
    id: 'sieng-nang',
    name: 'Phiếu Bé Ngoan Siêng Năng',
    icon: '🧹',
    colorClass: 'sieng-nang',
    pointsValue: 1,
    isSpecial: false,
    description: 'Dành cho công việc nhà, phụ giúp cha mẹ & giữ vệ sinh!'
  },
  'xuat-sac': {
    id: 'xuat-sac',
    name: 'Phiếu Bé Ngoan Xuất Sắc',
    icon: '🌟',
    colorClass: 'xuat-sac',
    pointsValue: 1,
    isSpecial: false,
    description: 'Dành cho rèn luyện thể thao & thói quen sinh hoạt tốt!'
  },
  'kim-cuong': {
    id: 'kim-cuong',
    name: 'Phiếu Bé Ngoan Kim Cương',
    icon: '💎',
    colorClass: 'dac-biet',
    pointsValue: 1,
    isSpecial: true,
    description: 'Phiếu đặc biệt hiếm nhận từ Gift Code quà tặng!'
  },
  'sieu-sao': {
    id: 'sieu-sao',
    name: 'Phiếu Bé Ngoan Siêu Sao',
    icon: '🚀',
    colorClass: 'dac-biet',
    pointsValue: 1,
    isSpecial: true,
    description: 'Phiếu siêu đặc biệt tỏa sáng rạng rỡ!'
  },
  'rong-vang': {
    id: 'rong-vang',
    name: 'Phiếu Bé Ngoan Rồng Vàng',
    icon: '🐉',
    colorClass: 'dac-biet',
    pointsValue: 1,
    isSpecial: true,
    description: 'Phiếu Rồng Vàng siêu cấp độc bản!'
  }
};

const DEFAULT_TASKS = [
  {
    id: 'task-1',
    title: 'Hoàn thành bài tập về nhà môn Toán',
    category: 'Học tập',
    ticketTypeId: 'cham-hoc',
    status: 'todo', // 'todo' | 'pending' | 'approved_pending_claim' | 'claimed'
    evidenceNote: '',
    evidenceImage: null,
    rejectReason: '',
    submittedAt: null
  },
  {
    id: 'task-2',
    title: 'Đọc xong 1 chương sách thiếu nhi',
    category: 'Học tập',
    ticketTypeId: 'cham-hoc',
    status: 'pending',
    evidenceNote: 'Con đã đọc xong chương 3 sách Dế Mèn Phiêu Lưu Ký ạ!',
    evidenceImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80',
    rejectReason: '',
    submittedAt: '16:30'
  },
  {
    id: 'task-3',
    title: 'Tự dọn dẹp phòng ngủ & gấp chăn màn',
    category: 'Việc nhà',
    ticketTypeId: 'sieng-nang',
    status: 'approved_pending_claim', // Admin approved! Ready for child to claim!
    evidenceNote: 'Con đã gấp chăn gối và xếp đồ chơi gọn gàng!',
    evidenceImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&auto=format&fit=crop&q=80',
    rejectReason: '',
    submittedAt: '17:00'
  },
  {
    id: 'task-4',
    title: 'Phụ cha mẹ rửa bát sau bữa tối',
    category: 'Việc nhà',
    ticketTypeId: 'sieng-nang',
    status: 'pending',
    evidenceNote: 'Con đã rửa xong toàn bộ bát đĩa bữa tối!',
    evidenceImage: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?w=400&auto=format&fit=crop&q=80',
    rejectReason: '',
    submittedAt: '19:15'
  },
  {
    id: 'task-5',
    title: 'Tập thể dục / Chạy bộ 30 phút',
    category: 'Thể thao',
    ticketTypeId: 'xuat-sac',
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    rejectReason: '',
    submittedAt: null
  },
  {
    id: 'task-6',
    title: 'Dậy sớm trước 6h30 đúng giờ',
    category: 'Thói quen',
    ticketTypeId: 'xuat-sac',
    status: 'claimed',
    evidenceNote: 'Con dậy lúc 6h15 và tập vươn thở buổi sáng!',
    evidenceImage: null,
    rejectReason: '',
    submittedAt: '06:20'
  }
];

const DEFAULT_GIFT_CODES = {
  'BENGOAN2026': {
    code: 'BENGOAN2026',
    ticketTypeId: 'kim-cuong',
    description: 'Mã mừng năm mới nhận Phiếu Kim Cương 💎',
    claimed: false
  },
  'KIRBY2026': {
    code: 'KIRBY2026',
    ticketTypeId: 'sieu-sao',
    description: 'Mã Kirby Siêu Quậy nhận Phiếu Siêu Sao 🚀',
    claimed: false
  },
  'RONGVANG': {
    code: 'RONGVANG',
    ticketTypeId: 'rong-vang',
    description: 'Mã Rồng Vàng nhận Phiếu Rồng Vàng 🐉',
    claimed: false
  }
};

const DEFAULT_REWARDS = [
  {
    id: 'rew-1',
    title: '1 Giờ xem Phim Hoạt Hình / TV',
    pointsCost: 3,
    icon: '📺',
    description: 'Được thoải mái xem chương trình hoạt hình yêu thích 1 tiếng!'
  },
  {
    id: 'rew-2',
    title: '1 Ly Kem Dâu Tây Siêu Ngon',
    pointsCost: 5,
    icon: '🍦',
    description: 'Được thưởng 1 ly kem dâu mát lạnh cực đã!'
  },
  {
    id: 'rew-3',
    title: 'Mua 1 Cuốn Truyện Tranh Mới',
    pointsCost: 8,
    icon: '📖',
    description: 'Được cha mẹ mua cho 1 tập truyện tranh tùy chọn!'
  },
  {
    id: 'rew-4',
    title: 'Đi chơi Công Viên / Thảo Cẩm Viên',
    pointsCost: 12,
    icon: '🎡',
    description: 'Chuyến dã ngoại vui chơi rộn ràng cùng gia đình cuối tuần!'
  }
];

const DEMO_EVIDENCE_IMAGES = [
  { label: '📚 Bàn học gọn gàng', url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' },
  { label: '🧹 Phòng ngủ sạch đẹp', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&auto=format&fit=crop&q=80' },
  { label: '🍽️ Chén bát đã rửa', url: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?w=400&auto=format&fit=crop&q=80' },
  { label: '🏃 Thể thao sảng khoái', url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80' }
];

// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
const STORAGE_KEY = 'phieu_be_ngoan_v1_state';

class AppState {
  constructor() {
    this.tasks = this.loadData('tasks', DEFAULT_TASKS);
    this.inventory = this.loadData('inventory', [
      { id: 'init-1', ticketTypeId: 'cham-hoc', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-2', ticketTypeId: 'sieng-nang', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-3', ticketTypeId: 'xuat-sac', earnedAt: new Date().toISOString(), source: 'Nhiệm vụ: Dậy sớm' }
    ]);
    this.giftCodes = this.loadData('giftCodes', DEFAULT_GIFT_CODES);
    this.vouchers = this.loadData('vouchers', []);
    this.rewards = DEFAULT_REWARDS;

    this.currentRole = 'user'; // 'user' vs 'admin'
    this.activeTab = 'tasks';
    this.taskFilter = 'all';

    // Modals
    this.activeModal = null;
    this.giftCodeFeedback = null;
  }

  loadData(key, fallback) {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_${key}`);
      return saved ? JSON.parse(saved) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveData(key, data) {
    try {
      localStorage.setItem(`${STORAGE_KEY}_${key}`, JSON.stringify(data));
    } catch (e) {}
  }

  get totalPoints() {
    return this.inventory.length;
  }

  get pendingCount() {
    return this.tasks.filter(t => t.status === 'pending').length;
  }

  get readyToClaimCount() {
    return this.tasks.filter(t => t.status === 'approved_pending_claim').length;
  }

  get isAdmin() {
    return this.currentRole === 'admin';
  }

  setRole(role) {
    this.currentRole = role;
    if (role === 'admin' && this.pendingCount > 0) {
      this.activeTab = 'admin-review';
    } else if (role === 'user' && this.readyToClaimCount > 0) {
      this.activeTab = 'tasks';
    }
    renderApp();
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    renderApp();
  }

  setTaskFilter(filter) {
    this.taskFilter = filter;
    renderApp();
  }

  openEvidenceModal(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.activeModal = { type: 'evidence', task, selectedImg: null };
      renderApp();
    }
  }

  openRejectModal(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.activeModal = { type: 'reject', task };
      renderApp();
    }
  }

  openAddTaskModal() {
    this.activeModal = { type: 'addTask' };
    renderApp();
  }

  closeModal() {
    this.activeModal = null;
    renderApp();
  }

  submitTaskEvidence(taskId, note, imgUrl) {
    this.tasks = this.tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: 'pending',
          evidenceNote: note || 'Con đã hoàn thành nhiệm vụ này ạ!',
          evidenceImage: imgUrl || null,
          rejectReason: '',
          submittedAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return task;
    });
    this.saveData('tasks', this.tasks);
    this.activeModal = null;
    renderApp();
  }

  // Admin approves task -> Changes status to 'approved_pending_claim'
  approveTask(taskId) {
    const targetTask = this.tasks.find(t => t.id === taskId);
    if (!targetTask) return;

    this.tasks = this.tasks.map(t => t.id === taskId ? { ...t, status: 'approved_pending_claim', rejectReason: '' } : t);
    this.saveData('tasks', this.tasks);

    alert(`✅ Đã duyệt nhiệm vụ "${targetTask.title}"! Bé có thể nhấn "Nhận Phiếu Ngoan" khi chuyển về màn hình Bé Ngoan.`);
    renderApp();
  }

  // User claims the approved reward -> Award ticket & trigger celebration popup!
  claimTaskReward(taskId) {
    const targetTask = this.tasks.find(t => t.id === taskId);
    if (!targetTask) return;

    // Update status to 'claimed'
    this.tasks = this.tasks.map(t => t.id === taskId ? { ...t, status: 'claimed' } : t);
    this.saveData('tasks', this.tasks);

    // Add ticket to inventory
    const ticketType = DEFAULT_TICKET_TYPES[targetTask.ticketTypeId] || DEFAULT_TICKET_TYPES['cham-hoc'];
    const newTicket = {
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ticketTypeId: ticketType.id,
      earnedAt: new Date().toISOString(),
      source: `Nhiệm vụ: ${targetTask.title}`
    };

    this.inventory.unshift(newTicket);
    this.saveData('inventory', this.inventory);

    // Open celebration modal with confetti effect
    this.activeModal = {
      type: 'celebration',
      ticketType,
      title: 'CHÚC MỪNG BÉ NGOAN! 🎉',
      message: `Bé đã nhận thành công 1 "${ticketType.name}" (+1 Điểm vào Ví điểm)!`
    };
    renderApp();
  }

  confirmRejectTask(taskId, reason) {
    this.tasks = this.tasks.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          status: 'todo',
          rejectReason: reason || 'Nhiệm vụ cần làm sạch sẽ hơn nhé con!'
        };
      }
      return t;
    });
    this.saveData('tasks', this.tasks);
    this.activeModal = null;
    renderApp();
  }

  createNewTask(title, category, ticketTypeId) {
    if (!title.trim()) return;
    const newTask = {
      id: `task-${Date.now()}`,
      title: title.trim(),
      category: category || 'Học tập',
      ticketTypeId: ticketTypeId || 'cham-hoc',
      status: 'todo',
      evidenceNote: '',
      evidenceImage: null,
      rejectReason: '',
      submittedAt: null
    };

    this.tasks.unshift(newTask);
    this.saveData('tasks', this.tasks);
    this.activeModal = null;
    renderApp();
  }

  redeemGiftCode(codeStr) {
    const cleanCode = codeStr.trim().toUpperCase();
    const targetCode = this.giftCodes[cleanCode];

    if (!targetCode) {
      this.giftCodeFeedback = { success: false, message: 'Mã Gift Code không tồn tại!' };
      renderApp();
      return;
    }

    if (targetCode.claimed) {
      this.giftCodeFeedback = { success: false, message: 'Mã Gift Code này đã được sử dụng rồi!' };
      renderApp();
      return;
    }

    this.giftCodes[cleanCode].claimed = true;
    this.saveData('giftCodes', this.giftCodes);

    const ticketType = DEFAULT_TICKET_TYPES[targetCode.ticketTypeId] || DEFAULT_TICKET_TYPES['kim-cuong'];
    const newTicket = {
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ticketTypeId: ticketType.id,
      earnedAt: new Date().toISOString(),
      source: `Gift Code: ${cleanCode}`
    };

    this.inventory.unshift(newTicket);
    this.saveData('inventory', this.inventory);

    this.giftCodeFeedback = { success: true, message: `Thành công nhận ${ticketType.name}!` };
    this.activeModal = {
      type: 'celebration',
      ticketType,
      title: 'Mở Khóa Gift Code Độc Bản! 🌟',
      message: `Bé nhận được "${ticketType.name}" đặc biệt (+1 Điểm vào ví)!`
    };
    renderApp();
  }

  redeemReward(rewardId) {
    const reward = this.rewards.find(r => r.id === rewardId);
    if (!reward) return;

    if (this.totalPoints < reward.pointsCost) {
      alert(`Bé cần ${reward.pointsCost} phiếu nhưng mới có ${this.totalPoints} phiếu.`);
      return;
    }

    this.inventory = this.inventory.slice(reward.pointsCost);
    this.saveData('inventory', this.inventory);

    const newVoucher = {
      id: `VOUCHER-${Math.floor(100000 + Math.random() * 900000)}`,
      rewardTitle: reward.title,
      rewardIcon: reward.icon,
      pointsSpent: reward.pointsCost,
      redeemedAt: new Date().toLocaleString('vi-VN')
    };

    this.vouchers.unshift(newVoucher);
    this.saveData('vouchers', this.vouchers);

    this.activeModal = {
      type: 'voucher',
      voucher: newVoucher
    };
    renderApp();
  }

  resetData() {
    localStorage.clear();
    this.tasks = DEFAULT_TASKS;
    this.inventory = [
      { id: 'init-1', ticketTypeId: 'cham-hoc', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-2', ticketTypeId: 'sieng-nang', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-3', ticketTypeId: 'xuat-sac', earnedAt: new Date().toISOString(), source: 'Nhiệm vụ: Dậy sớm' }
    ];
    this.giftCodes = DEFAULT_GIFT_CODES;
    this.vouchers = [];
    this.activeModal = null;
    renderApp();
  }
}

const state = new AppState();

// ==========================================
// RENDERERS & VIEWS
// ==========================================

function renderHeader() {
  const isUser = state.currentRole === 'user';

  return `
    <div style="margin-bottom: 24px;">
      <!-- Role Persona Switcher Header -->
      <header class="header-container">
        <div class="user-profile">
          <div class="avatar-wrapper animate-float" style="background: ${isUser ? 'var(--color-pink-gradient)' : 'var(--color-purple-gradient)'};">
            <span>${isUser ? '🌸' : '👑'}</span>
          </div>
          <div class="user-info">
            <h2>${isUser ? 'Bé Chăm Ngoan ⭐' : 'Phụ Huynh / Admin 👑'}</h2>
            <p>${isUser ? 'Nhiệm Vụ Tuần & Đổi Quà Thần Kỳ' : 'Quản Lý & Duyệt Minh Chứng Cho Bé'}</p>
          </div>
        </div>

        <div class="stats-bar">
          <div class="stat-pill points" title="Mọi phiếu đều tính 1 điểm">
            <span>⭐ ${state.totalPoints} Điểm</span>
          </div>

          <div class="stat-pill tickets" title="Tổng số phiếu bé ngoan đang sở hữu">
            <span>🎟️ ${state.inventory.length} Phiếu</span>
          </div>

          <!-- Role Toggle Switcher -->
          <div style="display: flex; background: #f1f5f9; padding: 4px; border-radius: 999px; gap: 4px; border: 2px solid #e2e8f0;">
            <button 
              onclick="state.setRole('user')"
              style="padding: 6px 14px; border-radius: 999px; font-size: 0.85rem; font-weight: bold; background: ${isUser ? 'var(--color-pink-gradient)' : 'transparent'}; color: ${isUser ? '#ffffff' : 'var(--text-muted)'}; position: relative; transition: all 0.2s;"
            >
              <span>👶 Bé Ngoan</span>
              ${state.readyToClaimCount > 0 ? `<span style="position: absolute; top: -4px; right: -4px; background: #22c55e; color: #fff; border-radius: 50%; width: 18px; height: 18px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; box-shadow: 0 2px 6px rgba(34, 197, 94, 0.4); animate: pulseGlow 1.5s infinite;">🎁</span>` : ''}
            </button>
            <button 
              onclick="state.setRole('admin')"
              style="padding: 6px 14px; border-radius: 999px; font-size: 0.85rem; font-weight: bold; background: ${!isUser ? 'var(--color-purple-gradient)' : 'transparent'}; color: ${!isUser ? '#ffffff' : 'var(--text-muted)'}; display: flex; align-items: center; gap: 4px; transition: all 0.2s;"
            >
              <span>👑 Phụ Huynh</span>
              ${state.pendingCount > 0 ? `<span style="background:#ff477e;color:#fff;border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-size:10px;">${state.pendingCount}</span>` : ''}
            </button>
          </div>
        </div>
      </header>

      <!-- Hero Visual Banner -->
      ${(() => {
        let tagText = '✨ Nền Kinh Tế Phiếu Bé Ngoan';
        let titleText = 'Hoàn Thành Nhiệm Vụ Tuần <br /><span style="color: var(--color-green-primary);">Tích Phiếu Đổi Quà Mê Say!</span>';
        
        if (state.activeTab === 'admin-review') {
          tagText = '👑 Chế Độ Phụ Huynh / Admin';
          titleText = 'Duyệt Minh Chứng Nhiệm Vụ <br /><span style="color: var(--color-purple-special);">Khen Thưởng Trẻ Đúng Lúc!</span>';
        } else if (state.activeTab === 'inventory') {
          tagText = '🎟️ Bộ Sưu Tập Phiếu Ngoan';
          titleText = 'Ví Phiếu Bé Ngoan <br /><span style="color: var(--color-pink-primary);">Tích Luỹ & Theo Dõi Điểm Thưởng!</span>';
        } else if (state.activeTab === 'store') {
          tagText = '🎁 Cửa Hàng Đổi Quà';
          titleText = 'Đổi Phần Quà Hấp Dẫn <br /><span style="color: var(--color-yellow-star);">Quy Đổi Phiếu Ngoan Thành Quà Thực!</span>';
        } else if (state.activeTab === 'giftcode') {
          tagText = '🔑 Mã Quà Tặng Đặc Biệt';
          titleText = 'Nhập Mã Gift Code <br /><span style="color: var(--color-purple-special);">Mở Khóa Phiếu Ngoan Độc Bản!</span>';
        }

        return `
          <div class="glass-panel" style="padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.95) 100%); gap: 20px;">
            <div style="flex: 1;">
              <div style="display: inline-flex; align-items: center; gap: 6px; background: var(--color-pink-soft); color: var(--color-pink-primary); padding: 4px 14px; border-radius: 999px; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px;">
                <span>${tagText}</span>
              </div>
              <h1 style="font-size: 1.6rem; color: var(--text-dark); margin-bottom: 6px;">
                ${titleText}
              </h1>
              <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">
                🌸 Mỗi Phiếu Ngoan nhận được đều có giá trị đồng nhất <strong style="color: var(--color-pink-primary);">1 Điểm</strong> để đổi phần quà thực tế.
              </p>
            </div>

            <div style="width: 220px; height: 120px; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md); border: 3px solid #ffffff; flex-shrink: 0;">
              <img src="/public/assets/kirby_hero_banner.jpg" alt="Kirby Hero" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
          </div>
        `;
      })()}
    </div>
  `;
}

function renderNavigation() {
  const tabs = [
    { id: 'tasks', label: '🎯 Nhiệm Vụ Tuần', badge: state.readyToClaimCount > 0 ? `🎁 ${state.readyToClaimCount} Quà!` : null },
    ...(state.isAdmin ? [{ id: 'admin-review', label: '👑 Duyệt Minh Chứng', badge: state.pendingCount > 0 ? `${state.pendingCount} Chờ` : null, purple: true }] : []),
    { id: 'inventory', label: '🎟️ Ví Phiếu Ngoan', badge: null, pink: true },
    { id: 'store', label: '🎁 Đổi Quà Tặng', badge: null },
    { id: 'giftcode', label: '🔑 Gift Code', badge: 'Đặc Biệt', pink: true }
  ];

  return `
    <nav class="nav-bar">
      ${tabs.map(tab => {
        const isActive = state.activeTab === tab.id;
        return `
          <button
            class="nav-tab ${isActive ? 'active' : ''} ${tab.pink ? 'pink' : ''}"
            style="${tab.purple && isActive ? 'background: var(--color-purple-gradient); box-shadow: 0 4px 14px rgba(147, 51, 234, 0.3);' : ''}"
            onclick="state.setActiveTab('${tab.id}')"
          >
            <span>${tab.label}</span>
            ${tab.badge ? `<span class="nav-tab-badge ${tab.purple ? 'purple' : ''}">${tab.badge}</span>` : ''}
          </button>
        `;
      }).join('')}
    </nav>
  `;
}

// ==========================================
// TASKS VIEW (USER & ADMIN INTERACTION)
// ==========================================
function renderTasksView() {
  const filteredTasks = state.tasks.filter(t => {
    if (state.taskFilter === 'todo') return t.status === 'todo';
    if (state.taskFilter === 'pending') return t.status === 'pending';
    if (state.taskFilter === 'approved') return t.status === 'approved_pending_claim' || t.status === 'claimed';
    return true;
  });

  return `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <!-- Task Header & Filters -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <h3 style="font-size: 1.3rem; color: var(--text-dark);">📋 Danh Sách Nhiệm Vụ Hàng Tuần</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
            ${state.isAdmin ? '👑 Quyền Admin: Xem minh chứng trẻ gửi và nhấn Duyệt' : '👶 Trẻ Em: Nhấn "Nộp Minh Chứng" để nộp bài, hoặc "Nhận Phiếu Ngoan" khi Phụ huynh đã duyệt!'}
          </p>
        </div>

        <div style="display: flex; gap: 8px; align-items: center;">
          <div style="display: flex; background: #ffffff; padding: 4px; border-radius: 999px; border: 1px solid #e2e8f0;">
            ${['all', 'todo', 'pending', 'approved'].map(f => {
              const labels = { all: 'Tất cả', todo: 'Cần làm', pending: 'Chờ duyệt', approved: 'Đã duyệt' };
              const isActive = state.taskFilter === f;
              return `
                <button 
                  onclick="state.setTaskFilter('${f}')"
                  style="padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: bold; background: ${isActive ? 'var(--color-green-primary)' : 'transparent'}; color: ${isActive ? '#ffffff' : 'var(--text-muted)'};"
                >
                  ${labels[f]}
                </button>
              `;
            }).join('')}
          </div>

          ${state.isAdmin ? `
            <button 
              onclick="state.openAddTaskModal()"
              style="padding: 8px 16px; border-radius: 999px; background: var(--color-purple-gradient); color: #ffffff; font-weight: bold; font-size: 0.85rem; box-shadow: 0 4px 12px rgba(147, 51, 234, 0.25);"
            >
              ➕ Thêm Nhiệm Vụ Tuần
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Ready to claim alert banner for User -->
      ${!state.isAdmin && state.readyToClaimCount > 0 ? `
        <div class="glass-panel" style="padding: 16px 20px; background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border: 2px solid #22c55e; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 32px;" class="animate-float">🎁</span>
            <div>
              <h4 style="color: #166534; font-size: 1.1rem;">Bé ơi! Phụ huynh đã duyệt ${state.readyToClaimCount} nhiệm vụ!</h4>
              <p style="color: #15803d; font-size: 0.85rem; font-weight: 600;">Hãy nhấn nút <strong>"🎁 Nhận Phiếu Ngoan Ngay"</strong> bên dưới để thu thập phiếu ngoan nhé!</p>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Task Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
        ${filteredTasks.map(task => {
          const badge = DEFAULT_TICKET_TYPES[task.ticketTypeId];
          const isTodo = task.status === 'todo';
          const isPending = task.status === 'pending';
          const isReadyToClaim = task.status === 'approved_pending_claim';
          const isClaimed = task.status === 'claimed';

          return `
            <div class="glass-panel" style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between; border-left: 6px solid ${isReadyToClaim ? '#22c55e' : isClaimed ? 'var(--color-green-primary)' : isPending ? 'var(--color-yellow-star)' : '#cbd5e1'}; ${isReadyToClaim ? 'box-shadow: 0 0 20px rgba(34, 197, 94, 0.35);' : ''}">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span style="font-size: 0.78rem; font-weight: bold; padding: 3px 10px; border-radius: 999px; background: #f1f5f9; color: var(--text-muted);">
                    ${task.category}
                  </span>
                  <span style="font-size: 0.85rem; font-weight: bold; color: var(--color-pink-primary); background: var(--color-pink-soft); padding: 3px 10px; border-radius: 999px;">
                    ${badge ? badge.icon : '🌸'} +1 ${badge ? badge.name : 'Phiếu Ngoan'}
                  </span>
                </div>

                <h4 style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 8px;">
                  ${task.title}
                </h4>

                ${task.rejectReason ? `
                  <div style="background: #ffe4e6; border: 1px solid #fecdd3; padding: 8px 12px; border-radius: 10px; font-size: 0.82rem; color: #9f1239; margin-bottom: 10px;">
                    ❌ <strong>Phụ huynh nhắc nhở:</strong> "${task.rejectReason}" (Hãy nộp lại minh chứng nhé!)
                  </div>
                ` : ''}

                ${isPending ? `
                  <div style="background: #fef9c3; border: 1px solid #fde047; padding: 10px 12px; border-radius: 12px; font-size: 0.85rem; margin-bottom: 12px;">
                    <div style="margin-bottom: 6px;"><strong>⏳ Lời nhắn minh chứng:</strong> "${task.evidenceNote}"</div>
                    ${task.evidenceImage ? `
                      <div style="width: 100%; height: 100px; border-radius: 8px; overflow: hidden; margin-top: 6px; border: 2px solid #ffffff;">
                        <img src="${task.evidenceImage}" alt="Minh chứng" style="width: 100%; height: 100%; object-fit: cover;" />
                      </div>
                    ` : ''}
                    <div style="color: #854d0e; font-size: 0.75rem; margin-top: 4px;">Gửi lúc ${task.submittedAt} — Đang chờ Phụ huynh duyệt</div>
                  </div>
                ` : ''}

                ${isReadyToClaim ? `
                  <div style="background: #dcfce7; border: 2px dashed #22c55e; padding: 10px 12px; border-radius: 12px; font-size: 0.88rem; color: #166534; margin-bottom: 12px; font-weight: bold; text-align: center;">
                    🎉 Phụ huynh đã duyệt bài! <br />
                    <span style="font-size: 0.8rem; color: #15803d;">Nhấn nút bên dưới để nhận 1 Phiếu Ngoan vào ví!</span>
                  </div>
                ` : ''}

                ${isClaimed ? `
                  <div style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 8px 12px; border-radius: 10px; font-size: 0.85rem; color: #166534; margin-bottom: 12px; font-weight: bold;">
                    ✅ Đã nhận thưởng 1 "${badge ? badge.name : 'Phiếu Ngoan'}"!
                  </div>
                ` : ''}
              </div>

              <!-- Action buttons depending on State -->
              <div style="margin-top: 12px;">
                ${isTodo ? `
                  <button onclick="state.openEvidenceModal('${task.id}')" style="width: 100%; padding: 10px; border-radius: var(--radius-full); background: var(--color-green-gradient); color: #ffffff; font-weight: bold; font-size: 0.95rem; box-shadow: var(--shadow-green);">
                    ✨ Nộp Minh Chứng Hoàn Thành
                  </button>
                ` : ''}

                ${isPending && state.isAdmin ? `
                  <div style="display: flex; gap: 8px;">
                    <button onclick="state.approveTask('${task.id}')" style="flex: 1; padding: 8px; border-radius: var(--radius-full); background: var(--color-green-primary); color: #ffffff; font-weight: bold;">
                      ✅ Duyệt Nhiệm Vụ
                    </button>
                    <button onclick="state.openRejectModal('${task.id}')" style="padding: 8px 14px; border-radius: var(--radius-full); background: #ef4444; color: #ffffff; font-weight: bold;">
                      ❌ Nhắc Nhở
                    </button>
                  </div>
                ` : ''}

                ${isPending && !state.isAdmin ? `
                  <button disabled style="width: 100%; padding: 10px; border-radius: var(--radius-full); background: #e2e8f0; color: #64748b; font-weight: bold; cursor: not-allowed;">
                    ⏳ Đang Chờ Phụ Huynh Duyệt
                  </button>
                ` : ''}

                <!-- READY TO CLAIM BUTTON WITH BOUNCY ANIMATION -->
                ${isReadyToClaim ? `
                  <button 
                    onclick="state.claimTaskReward('${task.id}')" 
                    style="width: 100%; padding: 12px; border-radius: var(--radius-full); background: var(--color-pink-gradient); color: #ffffff; font-weight: bold; font-size: 1rem; box-shadow: var(--shadow-pink); transform: scale(1.02); transition: transform 0.2s ease-in-out;"
                  >
                    🎁 Nhận Phiếu Ngoan Ngay (+1đ)!
                  </button>
                ` : ''}

                ${isClaimed ? `
                  <button disabled style="width: 100%; padding: 10px; border-radius: var(--radius-full); background: #f1f5f9; color: #64748b; font-weight: bold;">
                    🎉 Đã Thu Nhập Phiếu
                  </button>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// ADMIN REVIEW VIEW
// ==========================================
function renderAdminReviewView() {
  const pendingTasks = state.tasks.filter(t => t.status === 'pending');

  return `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div class="glass-panel" style="padding: 24px; background: linear-gradient(135deg, #9333ea 0%, #c084fc 100%); color: #ffffff; border-radius: 20px;">
        <h3 style="font-size: 1.5rem; margin-bottom: 4px;">👑 Giao Diện Phụ Huynh / Admin Duyệt Minh Chứng</h3>
        <p style="opacity: 0.9;">Xem bằng chứng trẻ gửi và nhấn Duyệt để gửi thông báo <strong>"🎁 Nhận Phiếu Ngoan"</strong> cho bé!</p>
      </div>

      ${pendingTasks.length === 0 ? `
        <div class="glass-panel" style="padding: 40px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 10px;">🎉</div>
          <h4 style="font-size: 1.2rem; color: var(--text-dark);">Hiện không có nhiệm vụ nào chờ duyệt!</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Bé chưa gửi minh chứng mới. Tất cả minh chứng trước đó đã được duyệt sạch sẽ.</p>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${pendingTasks.map(task => {
            const badge = DEFAULT_TICKET_TYPES[task.ticketTypeId];
            return `
              <div class="glass-panel" style="padding: 24px; border-left: 6px solid var(--color-purple-special);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
                  <div style="flex: 1;">
                    <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
                      <span style="background: var(--color-pink-soft); color: var(--color-pink-primary); padding: 4px 12px; border-radius: 999px; font-size: 0.85rem; font-weight: bold;">
                        ${badge ? badge.icon : '🌸'} Phần thưởng: 1 ${badge ? badge.name : 'Phiếu Ngoan'} (+1đ)
                      </span>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">Gửi lúc: ${task.submittedAt}</span>
                    </div>

                    <h4 style="font-size: 1.2rem; color: var(--text-dark); margin-bottom: 10px;">
                      📌 Nhiệm vụ: ${task.title}
                    </h4>

                    <div style="background: #f8fafc; padding: 14px; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
                      <strong style="color: #475569;">💬 Lời nhắn minh chứng của bé:</strong>
                      <p style="font-size: 0.95rem; color: var(--text-dark); margin-top: 4px; font-weight: 600;">"${task.evidenceNote}"</p>
                    </div>

                    ${task.evidenceImage ? `
                      <div style="max-width: 320px; height: 180px; border-radius: 12px; overflow: hidden; border: 3px solid #ffffff; box-shadow: var(--shadow-sm); margin-bottom: 12px;">
                        <img src="${task.evidenceImage}" alt="Bằng chứng" style="width: 100%; height: 100%; object-fit: cover;" />
                      </div>
                    ` : ''}
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 10px; min-width: 180px;">
                    <button 
                      onclick="state.approveTask('${task.id}')"
                      style="padding: 12px 20px; border-radius: var(--radius-full); background: var(--color-green-gradient); color: #ffffff; font-weight: bold; font-size: 1rem; box-shadow: var(--shadow-green);"
                    >
                      ✅ Duyệt Cho Bé Nhận Thưởng
                    </button>
                    <button 
                      onclick="state.openRejectModal('${task.id}')"
                      style="padding: 10px 20px; border-radius: var(--radius-full); background: #fee2e2; color: #9f1239; font-weight: bold; font-size: 0.9rem;"
                    >
                      ❌ Từ Chối & Gợi Ý
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function renderInventoryView() {
  const counts = {};
  state.inventory.forEach(item => {
    counts[item.ticketTypeId] = (counts[item.ticketTypeId] || 0) + 1;
  });

  return `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div class="glass-panel" style="padding: 24px; display: flex; align-items: center; justify-content: space-between; background: var(--color-pink-gradient); color: #ffffff;">
        <div>
          <h3 style="font-size: 1.5rem; margin-bottom: 4px;">🎟️ Bộ Sưu Tập Phiếu Bé Ngoan</h3>
          <p style="opacity: 0.9;">Mọi Phiếu Ngoan bé sở hữu đều đồng giá trị <strong>1 Điểm</strong> đổi quà!</p>
        </div>
        <div style="background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(10px); padding: 12px 24px; border-radius: var(--radius-full); font-size: 1.3rem; font-weight: bold; border: 2px solid rgba(255, 255, 255, 0.5);">
          🌟 Tổng: ${state.totalPoints} Điểm
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;">
        ${Object.keys(DEFAULT_TICKET_TYPES).map(typeId => {
          const badge = DEFAULT_TICKET_TYPES[typeId];
          const ownedCount = counts[typeId] || 0;

          return `
            <div class="ticket-badge-card ${badge.colorClass}" style="opacity: ${ownedCount > 0 ? 1 : 0.45}; filter: ${ownedCount > 0 ? 'none' : 'grayscale(60%)'};">
              ${badge.isSpecial ? '<span class="badge-special-tag">⭐ ĐẶC BIỆT</span>' : ''}
              <div class="badge-icon-frame animate-float">
                <span>${badge.icon}</span>
              </div>
              <h4 class="badge-name">${badge.name}</h4>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">
                ${badge.description}
              </p>
              <div class="badge-point-tag">
                ${ownedCount > 0 ? `Đang có: ${ownedCount} Phiếu (+${ownedCount}đ)` : 'Chưa sở hữu'}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderStoreView() {
  return `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 1.3rem; color: var(--text-dark);">🎁 Cửa Hàng Đổi Quà Thần Kỳ</h3>
        <span style="font-size: 0.9rem; color: var(--color-pink-primary); font-weight: bold;">
          Ví của bé: 🌟 ${state.totalPoints} Điểm
        </span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
        ${state.rewards.map(reward => {
          const canAfford = state.totalPoints >= reward.pointsCost;
          const progressPct = Math.min(100, Math.round((state.totalPoints / reward.pointsCost) * 100));

          return `
            <div class="glass-panel" style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                  <div style="width: 52px; height: 52px; border-radius: 16px; background: var(--color-green-soft); display: flex; align-items: center; justify-content: center; font-size: 26px;">
                    ${reward.icon}
                  </div>
                  <div>
                    <h4 style="font-size: 1.1rem; color: var(--text-dark);">${reward.title}</h4>
                    <span style="font-size: 0.85rem; font-weight: bold; color: var(--color-pink-primary);">
                      Cần: ${reward.pointsCost} Điểm (= ${reward.pointsCost} Phiếu)
                    </span>
                  </div>
                </div>

                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">
                  ${reward.description}
                </p>

                <div style="margin-bottom: 16px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: bold; margin-bottom: 4px;">
                    <span>Tiến trình tích lũy:</span>
                    <span>${progressPct}%</span>
                  </div>
                  <div style="width: 100%; height: 10px; background: #e2e8f0; border-radius: 999px; overflow: hidden;">
                    <div style="width: ${progressPct}%; height: 100%; background: ${canAfford ? 'var(--color-green-gradient)' : 'var(--color-pink-gradient)'}; transition: width 0.3s;"></div>
                  </div>
                </div>
              </div>

              <button
                onclick="state.redeemReward('${reward.id}')"
                ${!canAfford ? 'disabled' : ''}
                style="width: 100%; padding: 12px; border-radius: var(--radius-full); background: ${canAfford ? 'var(--color-green-gradient)' : '#e2e8f0'}; color: ${canAfford ? '#ffffff' : '#94a3b8'}; font-weight: bold; font-size: 0.95rem; box-shadow: ${canAfford ? 'var(--shadow-green)' : 'none'}; cursor: ${canAfford ? 'pointer' : 'not-allowed'};"
              >
                ${canAfford ? '🎁 Đổi Quà & Xuất Phiếu Voucher' : `Tích thêm ${reward.pointsCost - state.totalPoints} điểm nữa`}
              </button>
            </div>
          `;
        }).join('')}
      </div>

      ${state.vouchers.length > 0 ? `
        <div class="glass-panel" style="padding: 20px; margin-top: 10px;">
          <h4 style="font-size: 1.1rem; margin-bottom: 12px; color: var(--text-dark);">
            🎫 Đã Đổi (${state.vouchers.length} Phiếu Đổi Quà / Vouchers)
          </h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${state.vouchers.map(v => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: #f8fafc; border-radius: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 24px;">${v.rewardIcon}</span>
                  <div>
                    <strong>${v.rewardTitle}</strong>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">Mã: ${v.id} — Ngày đổi: ${v.redeemedAt}</div>
                  </div>
                </div>
                <span style="background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: bold;">
                  ✅ Trẻ đưa voucher này cho Cha Mẹ
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderGiftCodeView() {
  return `
    <div style="max-width: 560px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
      <div class="glass-panel" style="padding: 28px; text-align: center;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-pink-soft); display: inline-flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 12px;">
          🔑
        </div>
        <h3 style="font-size: 1.4rem; margin-bottom: 6px; color: var(--text-dark);">
          Nhập Gift Code Quà Tặng
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
          Nhập mã Gift Code đặc biệt để mở khóa các mẫu <strong>Phiếu Bé Ngoan Hiếm & Độc Bản</strong>!
        </p>

        <div style="display: flex; gap: 10px;">
          <input 
            type="text" 
            id="giftCodeInput" 
            placeholder="Ví dụ: BENGOAN2026" 
            style="flex: 1; padding: 12px 18px; border-radius: var(--radius-full); border: 2px solid #cbd5e1; font-size: 1rem; outline: none; text-transform: uppercase; font-weight: bold; font-family: var(--font-family-display);" 
          />
          <button 
            onclick="state.redeemGiftCode(document.getElementById('giftCodeInput').value)"
            style="padding: 12px 24px; border-radius: var(--radius-full); background: var(--color-pink-gradient); color: #ffffff; font-weight: bold; font-size: 1rem; box-shadow: var(--shadow-pink);"
          >
            🚀 Nhận Quà
          </button>
        </div>

        ${state.giftCodeFeedback ? `
          <div style="margin-top: 16px; padding: 10px 14px; border-radius: 12px; font-size: 0.9rem; font-weight: bold; background: ${state.giftCodeFeedback.success ? '#dcfce7' : '#ffe4e6'}; color: ${state.giftCodeFeedback.success ? '#166534' : '#9f1239'};">
            ${state.giftCodeFeedback.message}
          </div>
        ` : ''}
      </div>

      <div class="glass-panel" style="padding: 20px;">
        <h4 style="font-size: 1rem; color: var(--text-dark); margin-bottom: 10px;">
          💡 Mã Gift Code dùng thử demo:
        </h4>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${Object.values(state.giftCodes).map(gc => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #f8fafc; border-radius: 10px;">
              <div>
                <strong style="color: var(--color-pink-primary); letter-spacing: 0.5px;">${gc.code}</strong>
                <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 8px;">(${gc.description})</span>
              </div>
              <button 
                onclick="document.getElementById('giftCodeInput').value='${gc.code}'; state.redeemGiftCode('${gc.code}');"
                ${gc.claimed ? 'disabled' : ''}
                style="padding: 4px 12px; border-radius: 999px; background: ${gc.claimed ? '#e2e8f0' : 'var(--color-green-primary)'}; color: ${gc.claimed ? '#94a3b8' : '#ffffff'}; font-size: 0.8rem; font-weight: bold;"
              >
                ${gc.claimed ? 'Đã sử dụng' : 'Dùng mã ngay'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// MODALS (EVIDENCE, REJECT, ADD TASK, CELEBRATION, VOUCHER)
// ==========================================
function renderModals() {
  if (!state.activeModal) return '';

  if (state.activeModal.type === 'evidence') {
    const task = state.activeModal.task;
    return `
      <div style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 999; padding: 16px;">
        <div class="glass-panel animate-pop" style="width: 100%; max-width: 480px; padding: 24px;">
          <h3 style="font-size: 1.25rem; margin-bottom: 4px; color: var(--text-dark);">📸 Nộp Minh Chứng Hoàn Thành</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 14px;">Nhiệm vụ: <strong>${task.title}</strong></p>

          <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 0.85rem; font-weight: bold; margin-bottom: 6px;">
              💬 Lời nhắn cho Phụ huynh:
            </label>
            <textarea id="evidenceNoteInput" rows="2" placeholder="Ví dụ: Con đã rửa xong hết chén bát ăn tối rồi ạ!" style="width: 100%; padding: 10px; border-radius: 12px; border: 2px solid #cbd5e1; font-size: 0.9rem; outline: none; font-family: var(--font-family-body);"></textarea>
          </div>

          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 0.85rem; font-weight: bold; margin-bottom: 6px;">
              🖼️ Chọn ảnh minh chứng mẫu (Quick Demo Proof):
            </label>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
              ${DEMO_EVIDENCE_IMAGES.map((img, idx) => `
                <button 
                  onclick="window._selectedProofUrl = '${img.url}'; document.querySelectorAll('.proof-option').forEach(el => el.style.borderColor='#e2e8f0'); this.style.borderColor='var(--color-green-primary)';"
                  class="proof-option"
                  style="display: flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 8px; border: 2px solid #e2e8f0; background: #ffffff; text-align: left; font-size: 0.8rem; font-weight: bold;"
                >
                  <img src="${img.url}" style="width: 28px; height: 28px; border-radius: 6px; object-fit: cover;" />
                  <span>${img.label}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div style="display: flex; gap: 10px;">
            <button onclick="state.closeModal()" style="flex: 1; padding: 10px; border-radius: var(--radius-full); background: #e2e8f0; color: #475569; font-weight: bold;">Hủy</button>
            <button onclick="state.submitTaskEvidence('${task.id}', document.getElementById('evidenceNoteInput').value, window._selectedProofUrl || DEMO_EVIDENCE_IMAGES[0].url)" style="flex: 1; padding: 10px; border-radius: var(--radius-full); background: var(--color-green-gradient); color: #ffffff; font-weight: bold;">🚀 Gửi Minh Chứng</button>
          </div>
        </div>
      </div>
    `;
  }

  if (state.activeModal.type === 'reject') {
    const task = state.activeModal.task;
    return `
      <div style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 999; padding: 16px;">
        <div class="glass-panel animate-pop" style="width: 100%; max-width: 420px; padding: 24px;">
          <h3 style="font-size: 1.2rem; margin-bottom: 8px; color: #9f1239;">❌ Gợi Ý / Nhắc Nhở Trẻ Làm Lại</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 14px;">Nhiệm vụ: <strong>${task.title}</strong></p>

          <label style="display: block; font-size: 0.85rem; font-weight: bold; margin-bottom: 6px;">
            Lý do / Lời nhắc cho bé:
          </label>
          <textarea id="rejectReasonInput" rows="3" placeholder="Ví dụ: Con cần xếp gọn thêm sách vở trên bàn nhé!" style="width: 100%; padding: 10px; border-radius: 12px; border: 2px solid #fecdd3; font-size: 0.9rem; outline: none; margin-bottom: 16px; font-family: var(--font-family-body);"></textarea>

          <div style="display: flex; gap: 10px;">
            <button onclick="state.closeModal()" style="flex: 1; padding: 10px; border-radius: var(--radius-full); background: #e2e8f0; color: #475569; font-weight: bold;">Hủy</button>
            <button onclick="state.confirmRejectTask('${task.id}', document.getElementById('rejectReasonInput').value)" style="flex: 1; padding: 10px; border-radius: var(--radius-full); background: #ef4444; color: #ffffff; font-weight: bold;">Gửi Nhắc Nhở</button>
          </div>
        </div>
      </div>
    `;
  }

  if (state.activeModal.type === 'addTask') {
    return `
      <div style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 999; padding: 16px;">
        <div class="glass-panel animate-pop" style="width: 100%; max-width: 440px; padding: 24px;">
          <h3 style="font-size: 1.25rem; margin-bottom: 12px; color: var(--text-dark);">➕ Thêm Nhiệm Vụ Hàng Tuần Mới</h3>
          
          <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">Tên nhiệm vụ:</label>
            <input type="text" id="newTaskTitle" placeholder="Ví dụ: Tưới cây cảnh ban công" style="width: 100%; padding: 10px; border-radius: 10px; border: 2px solid #cbd5e1; font-size: 0.9rem; outline: none;" />
          </div>

          <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">Nhóm danh mục:</label>
            <select id="newTaskCategory" style="width: 100%; padding: 10px; border-radius: 10px; border: 2px solid #cbd5e1; font-size: 0.9rem;">
              <option value="Học tập">Học tập</option>
              <option value="Việc nhà">Việc nhà</option>
              <option value="Thể thao">Thể thao</option>
              <option value="Thói quen">Thói quen</option>
            </select>
          </div>

          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 0.85rem; font-weight: bold; margin-bottom: 4px;">Loại phiếu phần thưởng (+1đ):</label>
            <select id="newTaskTicketType" style="width: 100%; padding: 10px; border-radius: 10px; border: 2px solid #cbd5e1; font-size: 0.9rem;">
              <option value="cham-hoc">📚 Phiếu Chăm Học (+1đ)</option>
              <option value="sieng-nang">🧹 Phiếu Siêng Năng (+1đ)</option>
              <option value="xuat-sac">🌟 Phiếu Xuất Sắc (+1đ)</option>
            </select>
          </div>

          <div style="display: flex; gap: 10px;">
            <button onclick="state.closeModal()" style="flex: 1; padding: 10px; border-radius: var(--radius-full); background: #e2e8f0; color: #475569; font-weight: bold;">Hủy</button>
            <button onclick="state.createNewTask(document.getElementById('newTaskTitle').value, document.getElementById('newTaskCategory').value, document.getElementById('newTaskTicketType').value)" style="flex: 1; padding: 10px; border-radius: var(--radius-full); background: var(--color-purple-gradient); color: #ffffff; font-weight: bold;">➕ Tạo Nhiệm Vụ</button>
          </div>
        </div>
      </div>
    `;
  }

  // Celebration Modal
  if (state.activeModal.type === 'celebration') {
    const { ticketType, title, message } = state.activeModal;
    return `
      <div style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 16px;">
        <div class="glass-panel animate-pop" style="width: 100%; max-width: 420px; padding: 32px 24px; text-align: center; background: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%); border: 3px solid var(--color-pink-primary);">
          <div style="font-size: 64px; margin-bottom: 10px;" class="animate-float">${ticketType ? ticketType.icon : '🌟'}</div>
          <h3 style="font-size: 1.5rem; color: var(--color-pink-primary); margin-bottom: 8px;">${title}</h3>
          <p style="font-size: 0.95rem; color: var(--text-dark); font-weight: 600; margin-bottom: 20px;">${message}</p>

          ${ticketType ? `
            <div class="ticket-badge-card ${ticketType.colorClass}" style="margin-bottom: 20px; box-shadow: var(--shadow-pink);">
              <h4 class="badge-name" style="font-size: 1.2rem;">${ticketType.name}</h4>
              <span class="badge-point-tag" style="background: var(--color-pink-primary); color: #ffffff; font-size: 0.9rem;">+1 Điểm Đã Thêm Vào Ví!</span>
            </div>
          ` : ''}

          <button onclick="state.closeModal()" style="width: 100%; padding: 14px; border-radius: var(--radius-full); background: var(--color-pink-gradient); color: #ffffff; font-weight: bold; font-size: 1.05rem; box-shadow: var(--shadow-pink);">
            🎉 Nhận Phiếu & Tiếp Tục!
          </button>
        </div>
      </div>
    `;
  }

  // Voucher Modal
  if (state.activeModal.type === 'voucher') {
    const v = state.activeModal.voucher;
    return `
      <div style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 16px;">
        <div class="glass-panel animate-pop" style="width: 100%; max-width: 420px; padding: 28px; text-align: center; background: linear-gradient(135deg, #ffffff 0%, #fff0f5 100%); border: 3px dashed var(--color-pink-primary);">
          <div style="font-size: 48px; margin-bottom: 6px;">${v.rewardIcon}</div>
          <span style="background: var(--color-pink-primary); color: #ffffff; padding: 2px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: bold; text-transform: uppercase;">
            Phiếu Đổi Quà (Claim Voucher)
          </span>
          <h3 style="font-size: 1.3rem; color: var(--text-dark); margin: 10px 0 4px;">${v.rewardTitle}</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">
            Đã đổi bằng <strong>${v.pointsSpent} Phiếu Ngoan (= ${v.pointsSpent} Điểm)</strong>
          </p>

          <div style="background: #ffffff; padding: 12px; border-radius: 12px; border: 1px solid #fbcfe8; font-size: 0.9rem; font-weight: bold; color: var(--color-pink-primary); margin-bottom: 20px;">
            Mã Voucher: ${v.id} <br />
            <span style="font-size: 0.75rem; color: var(--text-muted);">Thời gian: ${v.redeemedAt}</span>
          </div>

          <p style="font-size: 0.8rem; color: #9d174d; margin-bottom: 20px; font-weight: 600;">
            💡 Bé hãy đưa màn hình này cho Cha Mẹ để nhận phần thưởng nhé!
          </p>

          <button onclick="state.closeModal()" style="width: 100%; padding: 12px; border-radius: var(--radius-full); background: var(--color-green-gradient); color: #ffffff; font-weight: bold; font-size: 1rem; box-shadow: var(--shadow-green);">
            ✅ Đã Nhớ!
          </button>
        </div>
      </div>
    `;
  }

  return '';
}

function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  let activeViewHtml = '';
  if (state.activeTab === 'tasks') activeViewHtml = renderTasksView();
  else if (state.activeTab === 'admin-review') activeViewHtml = renderAdminReviewView();
  else if (state.activeTab === 'inventory') activeViewHtml = renderInventoryView();
  else if (state.activeTab === 'store') activeViewHtml = renderStoreView();
  else if (state.activeTab === 'giftcode') activeViewHtml = renderGiftCodeView();

  root.innerHTML = `
    <div class="app-container">
      ${renderHeader()}
      ${renderNavigation()}

      ${state.isAdmin ? `
        <div style="background: linear-gradient(135deg, #9333ea 0%, #c084fc 100%); color: #ffffff; padding: 12px 20px; border-radius: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 8px 20px rgba(147, 51, 234, 0.25);">
          <div style="display: flex; align-items: center; gap: 8px; font-weight: bold;">
            <span>👑 Chế Độ Phụ Huynh (Admin) — Bạn có thể xem minh chứng, duyệt cho bé nhận thưởng và thêm nhiệm vụ mới!</span>
          </div>
          <button onclick="state.resetData()" style="background: #ffffff; color: #9333ea; padding: 6px 14px; border-radius: 999px; font-size: 0.85rem; font-weight: bold;">
            🔄 Reset Dữ Liệu Demo
          </button>
        </div>
      ` : ''}

      <main class="main-view">
        ${activeViewHtml}
      </main>

      ${renderModals()}
    </div>
  `;
}

// Global state reference
window.state = state;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
