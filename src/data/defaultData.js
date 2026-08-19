export const DEFAULT_TICKET_TYPES = {
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

export const DEFAULT_TASKS = [
  {
    id: 'task-1',
    title: 'Hoàn thành bài tập về nhà môn Toán',
    category: 'Học tập',
    ticketTypeId: 'cham-hoc',
    status: 'todo', // 'todo' | 'pending' | 'approved' | 'rejected'
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

export const DEFAULT_GIFT_CODES = {
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

export const DEFAULT_REWARDS = [
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
