# Project Context & Product Domain

## Product Concept
**Sản phẩm**: Hệ Thống Phiếu Bé Ngoan & Đổi Quà (Good Behavior Rewards App).
**Mục đích**: Cung cấp giải pháp trực quan, thú vị và tích cực giúp phụ huynh / thầy cô / trưởng nhóm khuyến khích các em nhỏ hoặc thành viên hoàn thành công việc/nhiệm vụ hàng tuần, tích lũy điểm thưởng và đổi quà.

## Source of Truth
- Detailed requirements: [`docs/features/problem-statement.md`](file:///Users/pync/.gemini/antigravity/scratch/phieu-be-ngoan-app/docs/features/problem-statement.md)

## Core Business Rules (Updated)
1. **Giá trị Phiếu**: Mọi loại Phiếu Bé Ngoan (dù visual thiết kế khác nhau) đều có giá trị đồng nhất: **1 Phiếu = 1 Điểm**.
2. **Nhiệm vụ tuần & Minh chứng (Evidence)**: Khi trẻ hoàn thành nhiệm vụ, trẻ phải **tải/gửi minh chứng (bằng chứng/mô tả/hình ảnh)**. Nhiệm vụ sẽ chuyển sang trạng thái `Chờ Phụ Huynh/Admin Duyệt`. Sau khi Admin duyệt, phiếu mới được cộng vào ví.
3. **Gift Code & Phiếu Đặc Biệt**: Nhập Gift Code sẽ thưởng các loại **Phiếu Bé Ngoan Đặc Biệt (Special Badges / Rare Tickets)** (ví dụ: *Phiếu Kim Cương*, *Phiếu Siêu Sao*, *Phiếu Rồng Vàng*).
4. **Cửa Hàng Đổi Quà**: Đổi quà quy ra điểm (1 Phiếu = 1 Điểm). Sau khi đổi quà, ứng dụng xuất **Phiếu Đổi Quà (Claim Voucher)** để trẻ đưa cho phụ huynh thực hiện quà tặng.

## Core V1 Capabilities
1. **Visual Ticket Badges Gallery**: Visual badge cards cho từng loại phiếu (Thường & Đặc biệt).
2. **Weekly Tasks with Evidence Upload**: Danh sách nhiệm vụ, form nộp minh chứng, trạng thái Duyệt/Chờ duyệt.
3. **Admin / Parent Review Drawer**: Giao diện phụ huynh xem danh sách minh chứng và nhấn Duyệt/Từ chối.
4. **Gift Code Redemption**: Ô nhập mã nhận các loại Phiếu Bé Ngoan Đặc Biệt.
5. **User Inventory (Ví Phiếu & Ví Điểm)**: Tổng số phiếu (= số điểm) và bộ sưu tập các mẫu phiếu thu thập được.
6. **Reward Store & Claim Vouchers**: Đổi phiếu lấy quà và sinh phiếu quà tặng.

## Definition of Done (V1)
Trẻ gửi minh chứng nhiệm vụ tuần -> Phụ huynh duyệt -> Nhận Phiếu Bé Ngoan. Nhập Gift Code -> Nhận Phiếu Đặc Biệt. Tích lũy phiếu (1 phiếu = 1 điểm) và dùng đổi quà lấy Phiếu Đổi Quà.
