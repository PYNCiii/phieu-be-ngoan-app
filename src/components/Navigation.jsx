import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckSquare, Ticket, Gift, Key } from 'lucide-react';

export const Navigation = () => {
  const { activeTab, setActiveTab, pendingCount } = useApp();

  const tabs = [
    { id: 'tasks', label: 'Nhiệm Vụ Tuần', icon: CheckSquare, badge: pendingCount > 0 ? pendingCount : null, colorClass: '' },
    { id: 'inventory', label: 'Ví Phiếu Ngoan', icon: Ticket, badge: null, colorClass: 'pink' },
    { id: 'store', label: 'Đổi Quà Tặng', icon: Gift, badge: null, colorClass: '' },
    { id: 'giftcode', label: 'Nhập Gift Code', icon: Key, badge: 'Đặc Biệt', colorClass: 'pink' }
  ];

  return (
    <nav className="nav-bar">
      {tabs.map(tab => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`nav-tab ${isActive ? 'active' : ''} ${tab.colorClass}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <IconComponent size={18} />
            <span>{tab.label}</span>
            {tab.badge && (
              <span style={{
                background: isActive ? '#ffffff' : '#ff477e',
                color: isActive ? '#ff477e' : '#ffffff',
                borderRadius: '999px',
                padding: '2px 8px',
                fontSize: '11px',
                fontWeight: 'bold',
                marginLeft: '2px'
              }}>
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
