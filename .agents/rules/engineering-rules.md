# Engineering & Implementation Rules

## Technology Stack & Architecture
- **Core Framework**: React + Vite + Vanilla CSS / CSS Modules.
- **Styling**: CSS Custom Properties (variables), glassmorphism visuals, vibrant gradient themes, badge glowing animations.
- **Typography & Icons**: Modern Google Fonts (Outfit / Inter / Quicksand) & responsive inline SVG iconography.

## Core Data Schema & Rules
- **1 Ticket = 1 Point Rule**: Every ticket object counts as 1 point regardless of visual theme.
- **Data Models**:
  - `Task`: `{ id, title, category, ticketTypeId, status: 'todo'|'pending'|'approved'|'rejected', evidenceNote: string, evidenceImage: string, submittedAt: string }`
  - `TicketBadge`: `{ id, name, category: 'standard'|'special', icon: string, badgeColor: string, isSpecial: boolean }`
  - `Inventory`: `{ tickets: Array<{ id, badgeId, earnedAt, source: 'task'|'gift_code' }>, totalPoints: number }`
  - `GiftCode`: `{ code, badgeId, isClaimed: boolean }`
  - `Reward`: `{ id, title, pointsCost, icon, stock: number }`
  - `Voucher`: `{ id, rewardTitle, redeemedAt, status: 'claimed'|'used' }`

## State & Storage Management
- Client-side state managed via React Context + sync to `localStorage` key `phieu_be_ngoan_v1`.
- Provide default sample tasks, initial gift codes, and parent control mechanisms to clear/reset data.
