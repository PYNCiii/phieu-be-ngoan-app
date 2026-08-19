import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Star, Ticket, Crown, Sparkles } from 'lucide-react';

export const Header = () => {
  const { totalPoints, inventory, isAdmin, toggleAdmin, pendingCount } = useApp();

  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Top Profile & Stats Bar */}
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
            <Star size={20} fill="#ffffff" color="#ffffff" />
            <span>{totalPoints} Điểm</span>
          </div>

          <div className="stat-pill tickets" title="Tổng số phiếu bé ngoan đang sở hữu">
            <Ticket size={20} />
            <span>{inventory.length} Phiếu</span>
          </div>

          <button 
            className={`admin-toggle-btn ${isAdmin ? 'active' : ''}`}
            onClick={toggleAdmin}
            title="Bật/Tắt Chế độ Phụ huynh để duyệt nhiệm vụ & minh chứng"
          >
            {isAdmin ? <Crown size={16} /> : <ShieldCheck size={16} />}
            <span>{isAdmin ? 'Quyền Admin' : 'Chế độ Phụ Huynh'}</span>
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
                marginLeft: '4px',
                boxShadow: '0 2px 6px rgba(255, 71, 126, 0.4)'
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
        position: 'relative',
        overflow: 'hidden',
        gap: '20px'
      }}>
        <div style={{ flex: 1, zIndex: 2 }}>
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
            <Sparkles size={14} />
            <span>Thế Giới Phiếu Bé Ngoan</span>
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            color: 'var(--text-dark)',
            lineHeight: 1.25,
            marginBottom: '8px'
          }}>
            Hoàn Thành Nhiệm Vụ Tuần <br />
            <span style={{ color: 'var(--color-green-primary)' }}>Tích Phiếu Đổi Quà Mê Say!</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 600 }}>
            ✨ Mỗi Phiếu Ngoan nhận được đều tính <strong style={{ color: 'var(--color-pink-primary)' }}>1 Điểm</strong> quy đổi quà tặng thực tế.
          </p>
        </div>

        <div style={{
          width: '260px',
          height: '140px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '3px solid #ffffff',
          flexShrink: 0
        }}>
          <img 
            src="/public/assets/kirby_hero_banner.jpg" 
            alt="Phiếu Bé Ngoan Hero" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};
