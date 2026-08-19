import React from 'react';
import confetti from 'canvas-confetti';

// ==========================================
// DATA DEFINITIONS & CONSTANTS
// ==========================================
const DEFAULT_TICKET_TYPES = {
  'cham-hoc': {
    id: 'cham-hoc',
    name: 'Phiếu Bé Ngoan Chăm Học',
    icon: '📚',
    colorClass: 'cham-hoc',
    pointsValue: 1,
    isSpecial: false,
    description: 'Dành cho các việc học tập, đọc sách & làm bài tập tốt!'
  },
  'sieng-nang': {
    id: 'sieng-nang',
    name: 'Phiếu Bé Ngoan Siêng Năng',
    icon: '🧹',
    colorClass: 'sieng-nang',
    pointsValue: 1,
    isSpecial: false,
    description: 'Dành cho các công việc nhà, phụ giúp cha mẹ & siêng năng!'
  },
  'xuat-sac': {
    id: 'xuat-sac',
    name: 'Phiếu Bé Ngoan Xuất Sắc',
    icon: '🌟',
    colorClass: 'xuat-sac',
    pointsValue: 1,
    isSpecial: false,
    description: 'Dành cho các thành tích thể thao & thói quen tuyệt vời!'
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
    description: 'Phiếu siêu đặc biệt tỏa sáng như ngôi sao!'
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
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    submittedAt: null
  },
  {
    id: 'task-2',
    title: 'Đọc xong 1 chương sách thiếu nhi',
    category: 'Học tập',
    ticketTypeId: 'cham-hoc',
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    submittedAt: null
  },
  {
    id: 'task-3',
    title: 'Tự dọn dẹp phòng ngủ & gấp chăn màn',
    category: 'Việc nhà',
    ticketTypeId: 'sieng-nang',
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    submittedAt: null
  },
  {
    id: 'task-4',
    title: 'Phụ cha mẹ rửa bát sau bữa tối',
    category: 'Việc nhà',
    ticketTypeId: 'sieng-nang',
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    submittedAt: null
  },
  {
    id: 'task-5',
    title: 'Tập thể dục / Chạy bộ 30 phút',
    category: 'Thể thao',
    ticketTypeId: 'xuat-sac',
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    submittedAt: null
  },
  {
    id: 'task-6',
    title: 'Dậy sớm trước 6h30 đúng giờ',
    category: 'Thói quen',
    ticketTypeId: 'xuat-sac',
    status: 'todo',
    evidenceNote: '',
    evidenceImage: null,
    submittedAt: null
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

// ==========================================
// APP CONTEXT & PROVIDER
// ==========================================
const AppContext = React.createContext();
const STORAGE_KEY = 'phieu_be_ngoan_v1_state';

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_tasks`);
    return saved ? JSON.parse(saved) : DEFAULT_TASKS;
  });

  const [inventory, setInventory] = React.useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_inventory`);
    return saved ? JSON.parse(saved) : [
      { id: 'init-1', ticketTypeId: 'cham-hoc', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-2', ticketTypeId: 'sieng-nang', earnedAt: new Date().toISOString(), source: 'Khởi tạo' }
    ];
  });

  const [giftCodes, setGiftCodes] = React.useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_giftCodes`);
    return saved ? JSON.parse(saved) : DEFAULT_GIFT_CODES;
  });

  const [rewards] = React.useState(DEFAULT_REWARDS);

  const [vouchers, setVouchers] = React.useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_vouchers`);
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdmin, setIsAdmin] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('tasks');
  const [toasts, setToasts] = React.useState([]);

  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3200);
  };

  // Modals
  const [celebrationModal, setCelebrationModal] = React.useState({
    isOpen: false,
    ticketType: null,
    title: '',
    message: ''
  });

  const [voucherModal, setVoucherModal] = React.useState({
    isOpen: false,
    voucher: null
  });

  const [evidenceModal, setEvidenceModal] = React.useState({
    isOpen: false,
    task: null
  });

  // Sync state to localStorage
  React.useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_tasks`, JSON.stringify(tasks));
  }, [tasks]);

  React.useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_inventory`, JSON.stringify(inventory));
  }, [inventory]);

  React.useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_giftCodes`, JSON.stringify(giftCodes));
  }, [giftCodes]);

  React.useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_vouchers`, JSON.stringify(vouchers));
  }, [vouchers]);

  // 1 Ticket = 1 Point!
  const totalPoints = inventory.length;
  const pendingCount = tasks.filter(t => t.status === 'pending').length;

  const toggleAdmin = () => {
    setIsAdmin(prev => {
      const nextState = !prev;
      showToast(nextState ? '👑 Đã bật chế độ Phụ Huynh / Admin' : '👶 Đã chuyển về giao diện của Bé', 'info');
      return nextState;
    });
  };

  const openEvidenceModal = (task) => {
    setEvidenceModal({ isOpen: true, task });
  };

  const closeEvidenceModal = () => {
    setEvidenceModal({ isOpen: false, task: null });
  };

  const submitTaskEvidence = (taskId, evidenceNote, evidenceImage) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: 'pending',
          evidenceNote: evidenceNote || 'Đã hoàn thành xuất sắc công việc!',
          evidenceImage: evidenceImage || null,
          submittedAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return task;
    }));
    closeEvidenceModal();
    showToast('📝 Đã gửi minh chứng! Đang chờ Phụ huynh duyệt.', 'success');
  };

  const approveTask = (taskId) => {
    const targetTask = tasks.find(t => t.id === taskId);
    if (!targetTask) return;

    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: 'approved' } : task
    ));

    const ticketType = DEFAULT_TICKET_TYPES[targetTask.ticketTypeId] || DEFAULT_TICKET_TYPES['cham-hoc'];
    const newTicket = {
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ticketTypeId: ticketType.id,
      earnedAt: new Date().toISOString(),
      source: `Nhiệm vụ: ${targetTask.title}`
    };

    setInventory(prev => [newTicket, ...prev]);

    setCelebrationModal({
      isOpen: true,
      ticketType,
      title: 'Phụ Huynh Đã Duyệt! 🎉',
      message: `Bé được thưởng 1 "${ticketType.name}" (Cộng 1 Điểm vào ví)!`
    });

    showToast(`🎉 Phụ huynh đã duyệt nhiệm vụ! Cộng 1 phiếu ${ticketType.name}`, 'success');
  };

  const rejectTask = (taskId) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: 'todo', evidenceNote: '', evidenceImage: null } : task
    ));
    showToast('⚠️ Đã trả lại nhiệm vụ yêu cầu bổ sung minh chứng', 'error');
  };

  const redeemGiftCode = (codeStr) => {
    const cleanCode = codeStr.trim().toUpperCase();
    const targetCode = giftCodes[cleanCode];

    if (!targetCode) {
      showToast('Mã Gift Code không tồn tại!', 'error');
      return { success: false, message: 'Mã Gift Code không tồn tại!' };
    }

    if (targetCode.claimed) {
      showToast('Mã Gift Code này đã được sử dụng!', 'error');
      return { success: false, message: 'Mã Gift Code này đã được sử dụng rồi!' };
    }

    setGiftCodes(prev => ({
      ...prev,
      [cleanCode]: { ...prev[cleanCode], claimed: true }
    }));

    const ticketType = DEFAULT_TICKET_TYPES[targetCode.ticketTypeId] || DEFAULT_TICKET_TYPES['kim-cuong'];
    const newTicket = {
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ticketTypeId: ticketType.id,
      earnedAt: new Date().toISOString(),
      source: `Gift Code: ${cleanCode}`
    };

    setInventory(prev => [newTicket, ...prev]);

    setCelebrationModal({
      isOpen: true,
      ticketType,
      title: 'Nhận Gift Code Độc Bản! 🌟',
      message: `Bé vừa mở khóa "${ticketType.name}" đặc biệt (Cộng 1 Điểm)!`
    });

    showToast(`🎁 Đổi mã thành công! Mở khóa ${ticketType.name}`, 'success');

    return { success: true, message: `Thành công nhận ${ticketType.name}!` };
  };

  const redeemReward = (rewardId) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (!reward) {
      showToast('Phần quà không tồn tại!', 'error');
      return { success: false, message: 'Phần quà không tồn tại!' };
    }

    if (totalPoints < reward.pointsCost) {
      showToast(`Chưa đủ phiếu! Cần ${reward.pointsCost} phiếu.`, 'error');
      return { success: false, message: `Bé cần ${reward.pointsCost} phiếu nhưng mới có ${totalPoints} phiếu.` };
    }

    // Deduct N tickets
    setInventory(prev => prev.slice(reward.pointsCost));

    const newVoucher = {
      id: `VOUCHER-${Math.floor(100000 + Math.random() * 900000)}`,
      rewardTitle: reward.title,
      rewardIcon: reward.icon,
      pointsSpent: reward.pointsCost,
      redeemedAt: new Date().toLocaleString('vi-VN'),
      status: 'claimed'
    };

    setVouchers(prev => [newVoucher, ...prev]);
    setVoucherModal({ isOpen: true, voucher: newVoucher });
    showToast(`🎁 Đã đổi quà "${reward.title}" thành công!`, 'success');

    return { success: true, voucher: newVoucher };
  };

  const resetData = () => {
    localStorage.clear();
    setTasks(DEFAULT_TASKS);
    setInventory([
      { id: 'init-1', ticketTypeId: 'cham-hoc', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-2', ticketTypeId: 'sieng-nang', earnedAt: new Date().toISOString(), source: 'Khởi tạo' }
    ]);
    setGiftCodes(DEFAULT_GIFT_CODES);
    setVouchers([]);
    showToast('🔄 Đã làm mới dữ liệu về mặc định!', 'info');
  };

  return (
    <AppContext.Provider value={{
      tasks,
      inventory,
      giftCodes,
      rewards,
      vouchers,
      totalPoints,
      pendingCount,
      toasts,
      showToast,
      isAdmin,
      activeTab,
      celebrationModal,
      voucherModal,
      evidenceModal,
      setActiveTab,
      toggleAdmin,
      openEvidenceModal,
      closeEvidenceModal,
      submitTaskEvidence,
      approveTask,
      rejectTask,
      redeemGiftCode,
      redeemReward,
      resetData,
      closeCelebrationModal: () => setCelebrationModal(prev => ({ ...prev, isOpen: false })),
      closeVoucherModal: () => setVoucherModal(prev => ({ ...prev, isOpen: false })),
      ticketTypes: DEFAULT_TICKET_TYPES
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => React.useContext(AppContext);

// ==========================================
// COMPONENTS
// ==========================================

const Header = () => {
  const { totalPoints, inventory, isAdmin, toggleAdmin, pendingCount, activeTab } = useApp();

  let tagText = '✨ Thế Giới Phiếu Bé Ngoan';
  let titleNode = (
    <>
      Hoàn Thành Nhiệm Vụ Tuần <br />
      <span style={{ color: 'var(--color-green-primary)' }}>Tích Phiếu Đổi Quà Mê Say!</span>
    </>
  );

  if (activeTab === 'inventory') {
    tagText = '🎟️ Bộ Sưu Tập Phiếu Ngoan';
    titleNode = (
      <>
        Ví Phiếu Bé Ngoan <br />
        <span style={{ color: 'var(--color-pink-primary)' }}>Tích Luỹ & Theo Dõi Điểm Thưởng!</span>
      </>
    );
  } else if (activeTab === 'store') {
    tagText = '🎁 Cửa Hàng Đổi Quà';
    titleNode = (
      <>
        Đổi Phần Quà Hấp Dẫn <br />
        <span style={{ color: 'var(--color-yellow-star)' }}>Quy Đổi Phiếu Ngoan Thành Quà Thực!</span>
      </>
    );
  } else if (activeTab === 'giftcode') {
    tagText = '🔑 Mã Quà Tặng Đặc Biệt';
    titleNode = (
      <>
        Nhập Mã Gift Code <br />
        <span style={{ color: 'var(--color-purple-special)' }}>Mở Khóa Phiếu Ngoan Độc Bản!</span>
      </>
    );
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      <header className="header-container">
        <div className="user-profile">
          <div className="avatar-wrapper animate-float">
            <span>🌸</span>
          </div>
          <div className="user-info">
            <h2>Bé Chăm Ngoan ⭐</h2>
            <p>Nhiệm Vụ Tuần & Đổi Quà Thần Kỳ</p>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-pill points" title="Mọi phiếu đều tính 1 điểm">
            <span>⭐ {totalPoints} Điểm</span>
          </div>

          <div className="stat-pill tickets" title="Tổng số phiếu bé ngoan đang sở hữu">
            <span>🎟️ {inventory.length} Phiếu</span>
          </div>

          <button 
            className={`admin-toggle-btn ${isAdmin ? 'active' : ''}`}
            onClick={toggleAdmin}
          >
            <span>{isAdmin ? '👑 Quyền Admin' : '🛡️ Chế độ Phụ Huynh'}</span>
            {pendingCount > 0 && (
              <span style={{
                background: '#ff477e',
                color: '#ffffff',
                borderRadius: '50%',
                width: '22px',
                height: '22px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 'bold',
                marginLeft: '4px'
              }}>
                {pendingCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Visual Card */}
      <div className="glass-panel" style={{
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.95) 100%)',
        gap: '20px'
      }}>
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--color-pink-soft)',
            color: 'var(--color-pink-primary)',
            padding: '4px 14px',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}>
            <span>{tagText}</span>
          </div>
          <h1 style={{ fontSize: '1.6rem', color: 'var(--text-dark)', marginBottom: '6px' }}>
            {titleNode}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
            🌸 Tất cả các mẫu Phiếu Ngoan thu thập được đều tích lũy <strong style={{ color: 'var(--color-pink-primary)' }}>1 Điểm</strong> để đổi quà.
          </p>
        </div>

        <div style={{
          width: '240px',
          height: '130px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '3px solid #ffffff',
          flexShrink: 0
        }}>
          <img 
            src="/public/assets/kirby_hero_banner.jpg" 
            alt="Kirby Phiếu Bé Ngoan" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const { activeTab, setActiveTab, pendingCount } = useApp();

  const tabs = [
    { id: 'tasks', label: '🎯 Nhiệm Vụ Tuần', badge: pendingCount > 0 ? `${pendingCount} Chờ` : null },
    { id: 'inventory', label: '🎟️ Ví Phiếu Ngoan', badge: null, pink: true },
    { id: 'store', label: '🎁 Đổi Quà Tặng', badge: null },
    { id: 'giftcode', label: '🔑 Gift Code', badge: 'Đặc Biệt', pink: true }
  ];

  return (
    <nav className="nav-bar">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-tab ${isActive ? 'active' : ''} ${tab.pink ? 'pink' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span>{tab.label}</span>
            {tab.badge && (
              <span className="nav-tab-badge">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

// ==========================================
// TASKS VIEW (PHASE 2 COMPLETE)
// ==========================================
const TasksView = () => {
  const { tasks, isAdmin, openEvidenceModal, approveTask, rejectTask } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)' }}>
          📋 Danh Sách Nhiệm Vụ Hàng Tuần
        </h3>
        <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          {isAdmin ? '👑 Chế độ Admin: Bạn có thể nhấn Duyệt/Từ chối minh chứng' : '💡 Bé hãy nhấn "Hoàn thành" để gửi minh chứng'}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {tasks.map(task => {
          const badge = DEFAULT_TICKET_TYPES[task.ticketTypeId];
          const isTodo = task.status === 'todo';
          const isPending = task.status === 'pending';
          const isApproved = task.status === 'approved';

          return (
            <div key={task.id} className="glass-panel" style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              borderLeft: isApproved ? '6px solid var(--color-green-primary)' : isPending ? '6px solid var(--color-yellow-star)' : '6px solid #cbd5e1'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 'bold',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    background: '#f1f5f9',
                    color: 'var(--text-muted)'
                  }}>
                    {task.category}
                  </span>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    color: 'var(--color-pink-primary)',
                    background: 'var(--color-pink-soft)',
                    padding: '3px 10px',
                    borderRadius: '999px'
                  }}>
                    {badge?.icon} +1 {badge?.name}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '8px' }}>
                  {task.title}
                </h4>

                {isPending && (
                  <div style={{
                    background: '#fef9c3',
                    border: '1px solid #fde047',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    marginBottom: '12px'
                  }}>
                    <strong>⏳ Minh chứng gửi:</strong> "{task.evidenceNote}" <br />
                    <span style={{ color: '#854d0e', fontSize: '0.75rem' }}>Gửi lúc {task.submittedAt} — Đang chờ Phụ huynh duyệt</span>
                  </div>
                )}

                {isApproved && (
                  <div style={{
                    background: '#dcfce7',
                    border: '1px solid #86efac',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    color: '#166534',
                    marginBottom: '12px',
                    fontWeight: 'bold'
                  }}>
                    ✅ Đã duyệt! Đã cộng 1 phiếu ngoan vào ví.
                  </div>
                )}
              </div>

              <div style={{ marginTop: '12px' }}>
                {isTodo && (
                  <button 
                    onClick={() => openEvidenceModal(task)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-green-gradient)',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: '0.95rem',
                      boxShadow: 'var(--shadow-green)'
                    }}
                  >
                    ✨ Nộp Minh Chứng Hoàn Thành
                  </button>
                )}

                {isPending && isAdmin && (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => approveTask(task.id)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--color-green-primary)',
                        color: '#ffffff',
                        fontWeight: 'bold'
                      }}
                    >
                      ✅ Duyệt Cộng Phiếu
                    </button>
                    <button 
                      onClick={() => rejectTask(task.id)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-full)',
                        background: '#ef4444',
                        color: '#ffffff',
                        fontWeight: 'bold'
                      }}
                    >
                      ❌ Từ Chối
                    </button>
                  </div>
                )}

                {isPending && !isAdmin && (
                  <button 
                    disabled
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: 'var(--radius-full)',
                      background: '#e2e8f0',
                      color: '#64748b',
                      fontWeight: 'bold',
                      cursor: 'not-allowed'
                    }}
                  >
                    ⏳ Chờ Phụ Huynh Duyệt
                  </button>
                )}

                {isApproved && (
                  <button 
                    disabled
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: 'var(--radius-full)',
                      background: '#f1f5f9',
                      color: '#166534',
                      fontWeight: 'bold'
                    }}
                  >
                    🎉 Đã Nhận Thưởng
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// INVENTORY VIEW (PHASE 3 COMPLETE)
// ==========================================
const InventoryView = () => {
  const { inventory, totalPoints } = useApp();

  // Group tickets by type
  const counts = {};
  inventory.forEach(item => {
    counts[item.ticketTypeId] = (counts[item.ticketTypeId] || 0) + 1;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="glass-panel" style={{
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--color-pink-gradient)',
        color: '#ffffff'
      }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>🎟️ Bộ Sưu Tập Phiếu Bé Ngoan</h3>
          <p style={{ opacity: 0.9 }}>Mọi Phiếu Ngoan bé sở hữu đều đồng giá trị <strong>1 Điểm</strong> đổi quà!</p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)',
          padding: '12px 24px',
          borderRadius: 'var(--radius-full)',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          border: '2px solid rgba(255, 255, 255, 0.5)'
        }}>
          🌟 Tổng: {totalPoints} Điểm
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {Object.keys(DEFAULT_TICKET_TYPES).map(typeId => {
          const badge = DEFAULT_TICKET_TYPES[typeId];
          const ownedCount = counts[typeId] || 0;

          return (
            <div key={typeId} className={`ticket-badge-card ${badge.colorClass}`} style={{
              opacity: ownedCount > 0 ? 1 : 0.45,
              filter: ownedCount > 0 ? 'none' : 'grayscale(60%)'
            }}>
              {badge.isSpecial && <span className="badge-special-tag">⭐ ĐẶC BIỆT</span>}
              <div className="badge-icon-frame animate-float">
                <span>{badge.icon}</span>
              </div>
              <h4 className="badge-name">{badge.name}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                {badge.description}
              </p>
              <div className="badge-point-tag">
                {ownedCount > 0 ? `Đang có: ${ownedCount} Phiếu (+${ownedCount}đ)` : 'Chưa sở hữu'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// STORE VIEW (PHASE 4 COMPLETE)
// ==========================================
const StoreView = () => {
  const { rewards, totalPoints, redeemReward, vouchers } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)' }}>
          🎁 Cửa Hàng Đổi Quà Thần Kỳ
        </h3>
        <span style={{ fontSize: '0.9rem', color: 'var(--color-pink-primary)', fontWeight: 'bold' }}>
          Ví của bé: 🌟 {totalPoints} Điểm
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {rewards.map(reward => {
          const canAfford = totalPoints >= reward.pointsCost;
          const progressPct = Math.min(100, Math.round((totalPoints / reward.pointsCost) * 100));

          return (
            <div key={reward.id} className="glass-panel" style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: 'var(--color-green-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px'
                  }}>
                    {reward.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>{reward.title}</h4>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-pink-primary)' }}>
                      Cần: {reward.pointsCost} Điểm (= {reward.pointsCost} Phiếu)
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  {reward.description}
                </p>

                {/* Progress bar */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '4px' }}>
                    <span>Tiến trình tích lũy:</span>
                    <span>{progressPct}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '10px',
                    background: '#e2e8f0',
                    borderRadius: '999px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${progressPct}%`,
                      height: '100%',
                      background: canAfford ? 'var(--color-green-gradient)' : 'var(--color-pink-gradient)',
                      transition: 'width 0.3s'
                    }} />
                  </div>
                </div>
              </div>

              <button
                onClick={() => redeemReward(reward.id)}
                disabled={!canAfford}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-full)',
                  background: canAfford ? 'var(--color-green-gradient)' : '#e2e8f0',
                  color: canAfford ? '#ffffff' : '#94a3b8',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  boxShadow: canAfford ? 'var(--shadow-green)' : 'none',
                  cursor: canAfford ? 'pointer' : 'not-allowed'
                }}
              >
                {canAfford ? '🎁 Đổi Quà & Xuất Phiếu Voucher' : `Tích thêm ${reward.pointsCost - totalPoints} điểm nữa`}
              </button>
            </div>
          );
        })}
      </div>

      {/* Redeemed Vouchers History */}
      {vouchers.length > 0 && (
        <div className="glass-panel" style={{ padding: '20px', marginTop: '10px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-dark)' }}>
            🎫 Đã Đổi ({vouchers.length} Phiếu Đổi Quà / Vouchers)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {vouchers.map(v => (
              <div key={v.id} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: '#f8fafc',
                borderRadius: '12px',
                border: '1px border #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '24px' }}>{v.rewardIcon}</span>
                  <div>
                    <strong>{v.rewardTitle}</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Mã: {v.id} — Ngày đổi: {v.redeemedAt}</div>
                  </div>
                </div>
                <span style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  ✅ Trẻ đưa voucher này cho Cha Mẹ
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// GIFT CODE VIEW
// ==========================================
const GiftCodeView = () => {
  const [code, setCode] = React.useState('');
  const [feedback, setFeedback] = React.useState(null);
  const { redeemGiftCode, giftCodes } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    const res = redeemGiftCode(code);
    setFeedback(res);
    if (res.success) setCode('');
  };

  return (
    <div style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--color-pink-soft)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px',
          marginBottom: '12px'
        }}>
          🔑
        </div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '6px', color: 'var(--text-dark)' }}>
          Nhập Gift Code Quà Tặng
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
          Nhập mã Gift Code đặc biệt để mở khóa các mẫu <strong>Phiếu Bé Ngoan Hiếm & Độc Bản</strong>!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text"
            placeholder="Ví dụ: BENGOAN2026"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              flex: 1,
              padding: '12px 18px',
              borderRadius: 'var(--radius-full)',
              border: '2px solid #cbd5e1',
              fontSize: '1rem',
              outline: 'none',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontFamily: 'var(--font-family-display)'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-pink-gradient)',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: 'var(--shadow-pink)'
            }}
          >
            🚀 Nhận Quà
          </button>
        </form>

        {feedback && (
          <div style={{
            marginTop: '16px',
            padding: '10px 14px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            background: feedback.success ? '#dcfce7' : '#ffe4e6',
            color: feedback.success ? '#166534' : '#9f1239'
          }}>
            {feedback.message}
          </div>
        )}
      </div>

      {/* Preset sample codes */}
      <div className="glass-panel" style={{ padding: '20px' }}>
        <h4 style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '10px' }}>
          💡 Mã Gift Code dùng thử demo:
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {Object.values(giftCodes).map(gc => (
            <div key={gc.code} style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              padding: '10px 14px',
              background: '#f8fafc',
              borderRadius: '10px'
            }}>
              <div>
                <strong style={{ color: 'var(--color-pink-primary)', letterSpacing: '0.5px' }}>{gc.code}</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '8px' }}>({gc.description})</span>
              </div>
              <button 
                onClick={() => setCode(gc.code)}
                disabled={gc.claimed}
                style={{
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: gc.claimed ? '#e2e8f0' : 'var(--color-green-primary)',
                  color: gc.claimed ? '#94a3b8' : '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}
              >
                {gc.claimed ? 'Đã sử dụng' : 'Dùng mã'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MODALS (EVIDENCE, CELEBRATION, VOUCHER)
// ==========================================
const EvidenceModal = () => {
  const { evidenceModal, closeEvidenceModal, submitTaskEvidence } = useApp();
  const [note, setNote] = React.useState('');

  if (!evidenceModal.isOpen || !evidenceModal.task) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTaskEvidence(evidenceModal.task.id, note, null);
    setNote('');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.45)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
      padding: '16px'
    }}>
      <div className="glass-panel animate-pop" style={{ width: '100%', maxWidth: '440px', padding: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
          📸 Nộp Minh Chứng Hoàn Thành
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Nhiệm vụ: <strong>{evidenceModal.task.title}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '6px' }}>
            Ghi chú minh chứng (hoặc lời nhắn gửi cho Phụ huynh):
          </label>
          <textarea
            rows="3"
            placeholder="Ví dụ: Con đã làm xong bài tập Toán trang 45 và dọn bàn học sạch rồi ạ!"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              border: '2px solid #cbd5e1',
              fontSize: '0.92rem',
              outline: 'none',
              marginBottom: '16px',
              fontFamily: 'var(--font-family-body)'
            }}
            required
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              type="button" 
              onClick={closeEvidenceModal}
              style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-full)', background: '#e2e8f0', color: '#475569', fontWeight: 'bold' }}
            >
              Hủy
            </button>
            <button 
              type="submit" 
              style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-full)', background: 'var(--color-green-gradient)', color: '#ffffff', fontWeight: 'bold' }}
            >
              🚀 Gửi Minh Chứng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CelebrationModal = () => {
  const { celebrationModal, closeCelebrationModal } = useApp();
  if (!celebrationModal.isOpen) return null;

  const { ticketType, title, message } = celebrationModal;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div className="glass-panel animate-pop" style={{
        width: '100%',
        maxWidth: '400px',
        padding: '32px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)'
      }}>
        <div style={{ fontSize: '56px', marginBottom: '10px' }} className="animate-float">
          {ticketType?.icon || '🌟'}
        </div>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-pink-primary)', marginBottom: '8px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: 600, marginBottom: '20px' }}>
          {message}
        </p>

        {ticketType && (
          <div className={`ticket-badge-card ${ticketType.colorClass}`} style={{ marginBottom: '20px' }}>
            <h4 className="badge-name">{ticketType.name}</h4>
            <span className="badge-point-tag">+1 Điểm Đổi Quà</span>
          </div>
        )}

        <button
          onClick={closeCelebrationModal}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-pink-gradient)',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: 'var(--shadow-pink)'
          }}
        >
          🌸 Cảm Ơn Phụ Huynh!
        </button>
      </div>
    </div>
  );
};

const VoucherModal = () => {
  const { voucherModal, closeVoucherModal } = useApp();
  if (!voucherModal.isOpen || !voucherModal.voucher) return null;

  const { voucher } = voucherModal;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    }}>
      <div className="glass-panel animate-pop" style={{
        width: '100%',
        maxWidth: '420px',
        padding: '28px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #fff0f5 100%)',
        border: '3px dashed var(--color-pink-primary)'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '6px' }}>
          {voucher.rewardIcon}
        </div>
        <span style={{
          background: 'var(--color-pink-primary)',
          color: '#ffffff',
          padding: '2px 12px',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>
          Phiếu Đổi Quà (Claim Voucher)
        </span>
        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-dark)', margin: '10px 0 4px' }}>
          {voucher.rewardTitle}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Đã đổi bằng <strong>{voucher.pointsSpent} Phiếu Ngoan (= {voucher.pointsSpent} Điểm)</strong>
        </p>

        <div style={{
          background: '#ffffff',
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid #fbcfe8',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          color: 'var(--color-pink-primary)',
          marginBottom: '20px'
        }}>
          Mã Voucher: {voucher.id} <br />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Thời gian: {voucher.redeemedAt}</span>
        </div>

        <p style={{ fontSize: '0.8rem', color: '#9d174d', marginBottom: '20px', fontWeight: 600 }}>
          💡 Bé hãy đưa màn hình này cho Cha Mẹ để nhận phần thưởng nhé!
        </p>

        <button
          onClick={closeVoucherModal}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-green-gradient)',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '1rem',
            boxShadow: 'var(--shadow-green)'
          }}
        >
          ✅ Đã Nhớ!
        </button>
      </div>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts } = useApp();
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast-item ${toast.type} animate-toast`}>
          <span style={{ fontSize: '1.2rem' }}>
            {toast.type === 'success' ? '🎉' : toast.type === 'error' ? '⚠️' : '🔔'}
          </span>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

// ==========================================
// MAIN CONTAINER
// ==========================================
const MainContent = () => {
  const { activeTab, isAdmin, resetData } = useApp();

  return (
    <main className="main-view">
      <ToastContainer />
      {isAdmin && (
        <div style={{
          background: 'linear-gradient(135deg, #9333ea 0%, #c084fc 100%)',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '16px',
          marginBottom: '20px',
          display: 'flex',
          align-items: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 8px 20px rgba(147, 51, 234, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
            <span>👑 Đang ở Chế độ Phụ Huynh / Admin — Bạn có thể xem minh chứng và duyệt nhiệm vụ của bé!</span>
          </div>
          <button 
            onClick={resetData}
            style={{
              background: '#ffffff',
              color: '#9333ea',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 'bold'
            }}
          >
            🔄 Reset Dữ Liệu Demo
          </button>
        </div>
      )}

      {activeTab === 'tasks' && <TasksView />}
      {activeTab === 'inventory' && <InventoryView />}
      {activeTab === 'store' && <StoreView />}
      {activeTab === 'giftcode' && <GiftCodeView />}

      <EvidenceModal />
      <CelebrationModal />
      <VoucherModal />
    </main>
  );
};

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        <Navigation />
        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;
