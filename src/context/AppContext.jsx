import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_TICKET_TYPES, DEFAULT_TASKS, DEFAULT_GIFT_CODES, DEFAULT_REWARDS } from '../data/defaultData';

const AppContext = createContext();

const STORAGE_KEY = 'phieu_be_ngoan_v1_state';

export const AppProvider = ({ children }) => {
  // Load initial state from localStorage or defaults
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_tasks`);
    return saved ? JSON.parse(saved) : DEFAULT_TASKS;
  });

  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_inventory`);
    // Default initial bonus: 2 cham-hoc tickets to start!
    return saved ? JSON.parse(saved) : [
      { id: 'init-1', ticketTypeId: 'cham-hoc', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-2', ticketTypeId: 'sieng-nang', earnedAt: new Date().toISOString(), source: 'Khởi tạo' }
    ];
  });

  const [giftCodes, setGiftCodes] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_giftCodes`);
    return saved ? JSON.parse(saved) : DEFAULT_GIFT_CODES;
  });

  const [rewards] = useState(DEFAULT_REWARDS);

  const [vouchers, setVouchers] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}_vouchers`);
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState('tasks'); // 'tasks' | 'inventory' | 'store' | 'giftcode'

  // Modal states
  const [celebrationModal, setCelebrationModal] = useState({
    isOpen: false,
    ticketType: null,
    title: '',
    message: ''
  });

  const [voucherModal, setVoucherModal] = useState({
    isOpen: false,
    voucher: null
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_tasks`, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_inventory`, JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_giftCodes`, JSON.stringify(giftCodes));
  }, [giftCodes]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_vouchers`, JSON.stringify(vouchers));
  }, [vouchers]);

  // 1 Ticket = 1 Point! Total points = total number of tickets in inventory
  const totalPoints = inventory.length;

  // Count pending tasks needing parent review
  const pendingCount = tasks.filter(t => t.status === 'pending').length;

  // Actions
  const toggleAdmin = () => setIsAdmin(prev => !prev);

  const submitTaskEvidence = (taskId, evidenceNote, evidenceImage) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: 'pending',
          evidenceNote: evidenceNote || 'Đã hoàn thành công việc!',
          evidenceImage: evidenceImage || null,
          submittedAt: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
        };
      }
      return task;
    }));
  };

  const approveTask = (taskId) => {
    const targetTask = tasks.find(t => t.id === taskId);
    if (!targetTask) return;

    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: 'approved' } : task
    ));

    // Award ticket badge to inventory
    const ticketType = DEFAULT_TICKET_TYPES[targetTask.ticketTypeId] || DEFAULT_TICKET_TYPES['cham-hoc'];
    const newTicket = {
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ticketTypeId: ticketType.id,
      earnedAt: new Date().toISOString(),
      source: `Nhiệm vụ: ${targetTask.title}`
    };

    setInventory(prev => [newTicket, ...prev]);

    // Show celebration modal
    setCelebrationModal({
      isOpen: true,
      ticketType,
      title: 'Duyệt Nhiệm Vụ Thành Công! 🎉',
      message: `Bé đã nhận được 1 "${ticketType.name}" (cộng 1 điểm)!`
    });
  };

  const rejectTask = (taskId) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: 'rejected' } : task
    ));
  };

  const redeemGiftCode = (codeStr) => {
    const cleanCode = codeStr.trim().toUpperCase();
    const targetCode = giftCodes[cleanCode];

    if (!targetCode) {
      return { success: false, message: 'Mã Gift Code không tồn tại!' };
    }

    if (targetCode.claimed) {
      return { success: false, message: 'Mã Gift Code này đã được sử dụng rồi!' };
    }

    // Mark claimed
    setGiftCodes(prev => ({
      ...prev,
      [cleanCode]: { ...prev[cleanCode], claimed: true }
    }));

    // Award special ticket
    const ticketType = DEFAULT_TICKET_TYPES[targetCode.ticketTypeId] || DEFAULT_TICKET_TYPES['kim-cuong'];
    const newTicket = {
      id: `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      ticketTypeId: ticketType.id,
      earnedAt: new Date().toISOString(),
      source: `Gift Code: ${cleanCode}`
    };

    setInventory(prev => [newTicket, ...prev]);

    // Show celebration popup
    setCelebrationModal({
      isOpen: true,
      ticketType,
      title: 'Đổi Gift Code Độc Bản! 🌟',
      message: `Bé vừa nhận thành công "${ticketType.name}" đặc biệt (cộng 1 điểm)!`
    });

    return { success: true, message: `Thành công nhận ${ticketType.name}!` };
  };

  const redeemReward = (rewardId) => {
    const reward = rewards.find(r => r.id === rewardId);
    if (!reward) return { success: false, message: 'Phần quà không tồn tại!' };

    if (totalPoints < reward.pointsCost) {
      return { success: false, message: `Bé chưa đủ phiếu! Cần ${reward.pointsCost} phiếu nhưng bé đang có ${totalPoints} phiếu.` };
    }

    // Deduct N tickets from inventory
    setInventory(prev => prev.slice(reward.pointsCost));

    // Create claim voucher
    const newVoucher = {
      id: `VOUCHER-${Math.floor(100000 + Math.random() * 900000)}`,
      rewardTitle: reward.title,
      rewardIcon: reward.icon,
      pointsSpent: reward.pointsCost,
      redeemedAt: new Date().toLocaleString('vi-VN'),
      status: 'claimed'
    };

    setVouchers(prev => [newVoucher, ...prev]);

    // Open voucher modal
    setVoucherModal({
      isOpen: true,
      voucher: newVoucher
    });

    return { success: true, voucher: newVoucher };
  };

  const resetData = () => {
    localStorage.removeItem(`${STORAGE_KEY}_tasks`);
    localStorage.removeItem(`${STORAGE_KEY}_inventory`);
    localStorage.removeItem(`${STORAGE_KEY}_giftCodes`);
    localStorage.removeItem(`${STORAGE_KEY}_vouchers`);

    setTasks(DEFAULT_TASKS);
    setInventory([
      { id: 'init-1', ticketTypeId: 'cham-hoc', earnedAt: new Date().toISOString(), source: 'Khởi tạo' },
      { id: 'init-2', ticketTypeId: 'sieng-nang', earnedAt: new Date().toISOString(), source: 'Khởi tạo' }
    ]);
    setGiftCodes(DEFAULT_GIFT_CODES);
    setVouchers([]);
  };

  const closeCelebrationModal = () => {
    setCelebrationModal(prev => ({ ...prev, isOpen: false }));
  };

  const closeVoucherModal = () => {
    setVoucherModal(prev => ({ ...prev, isOpen: false }));
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
      isAdmin,
      activeTab,
      celebrationModal,
      voucherModal,
      setActiveTab,
      toggleAdmin,
      submitTaskEvidence,
      approveTask,
      rejectTask,
      redeemGiftCode,
      redeemReward,
      resetData,
      closeCelebrationModal,
      closeVoucherModal,
      ticketTypes: DEFAULT_TICKET_TYPES
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
