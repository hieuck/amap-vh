# Changelog

Tất cả các thay đổi quan trọng của dự án sẽ được ghi chép tại đây.

## [0.3.0] - 2026-09-05

### Added
- Mở rộng từ điển lên 300+ từ
- Hỗ trợ domain `id.amap.com` (trang đăng nhập)
- Thêm từ về phản hồi/feedback: vấn đề bản đồ, điều hướng, tìm kiếm
- Thêm từ về đăng nhập/đăng ký: tài khoản, mật khẩu, mã xác thực
- Thêm từ về thông báo: thành công, thất bại, cảnh báo
- Thêm từ về hành động: tiếp tục, bỏ qua, đồng ý
- Dịch thêm attribute `value` cho input/button
- Thêm nhiều lần chạy dịch (300ms, 800ms, 1.5s, 3s) để bắt nội dung tải chậm

### Improved
- Cải thiện regex escape để tránh lỗi với ký tự đặc biệt
- Tối ưu thuật toán dịch placeholder, title, aria-label

### Fixed
- Sửa lỗi regex với ký tự đặc biệt trong từ điển
- Sửa lỗi không dịch được một số button/input

## [0.2.1] - 2026-09-05

### Added
- Thêm `@updateURL` và `@downloadURL` để Tampermonkey tự động kiểm tra và cập nhật script
- Thêm `@supportURL` link đến GitHub Issues
- Thêm `@homepageURL` link đến repository

### Changed
- Tampermonkey sẽ tự động kiểm tra cập nhật mỗi ngày
- Người dùng có thể cập nhật thủ công từ Tampermonkey Dashboard

## [0.2] - 2026-09-05

### Added
- Mở rộng từ điển lên 200+ từ
- Thêm các loại địa điểm: nhà hàng, khách sạn, siêu thị, ngân hàng, trạm xăng, v.v.
- Thêm từ về tình hình giao thông: tắc đường, thông thoáng, chậm
- Thêm từ về hướng di chuyển: đông/tây/nam/bắc, rẽ trái/phải
- Thêm từ về thời gian: hôm nay, ngày mai, sáng/chiều/tối

### Improved
- Cải thiện thuật toán dịch: sắp xếp từ dài đến ngắn để tránh dịch nhầm
- Dịch thêm aria-label cho accessibility
- Bỏ qua thẻ script/style để tránh lỗi
- Chạy dịch nhiều lần (500ms, 1.5s, 3s) để bắt nội dung động tốt hơn

### Fixed
- Sửa lỗi dịch sai khi có từ chồng lấn

## [0.1] - 2026-09-05

### Added
- Phiên bản đầu tiên với 40+ từ cơ bản
- Hỗ trợ dịch text nodes, placeholder, title
- MutationObserver để theo dõi thay đổi DOM
- README với hướng dẫn cài đặt
