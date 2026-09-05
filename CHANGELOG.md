# Changelog

Tất cả các thay đổi quan trọng của dự án sẽ được ghi chép tại đây.

## [0.3.2] - 2026-09-05

### Fixed
- Sửa lỗi cú pháp regex escape trong hàm escapeRegex
- File script hoàn chỉnh, không bị cắt ngang

### Changed
- Minify code để giảm kích thước file
- Tối ưu hiệu năng với biến ngắn gọn

## [0.3.0] - 2026-09-05

### Added
- Mở rộng từ điển lên 300+ từ
- Hỗ trợ domain `id.amap.com` (trang đăng nhập)
- Thêm từ về phản hồi/feedback
- Thêm từ về đăng nhập/đăng ký
- Thêm từ về thông báo
- Dịch thêm attribute `value` cho input/button
- Thêm nhiều lần chạy dịch (300ms, 800ms, 1.5s, 3s)

### Improved
- Cải thiện regex escape để tránh lỗi với ký tự đặc biệt
- Tối ưu thuật toán dịch placeholder, title, aria-label

## [0.2.1] - 2026-09-05

### Added
- Thêm `@updateURL` và `@downloadURL` để Tampermonkey tự động kiểm tra và cập nhật script
- Thêm `@supportURL` link đến GitHub Issues
- Thêm `@homepageURL` link đến repository

## [0.2] - 2026-09-05

### Added
- Mở rộng từ điển lên 200+ từ
- Thêm các loại địa điểm
- Thêm từ về tình hình giao thông
- Thêm từ về hướng di chuyển
- Thêm từ về thời gian

### Improved
- Cải thiện thuật toán dịch
- Dịch thêm aria-label
- Bỏ qua thẻ script/style

## [0.1] - 2026-09-05

### Added
- Phiên bản đầu tiên với 40+ từ cơ bản
- Hỗ trợ dịch text nodes, placeholder, title
- MutationObserver để theo dõi thay đổi DOM
