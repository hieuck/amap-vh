# Hướng dẫn sử dụng chi tiết

## Cài đặt nhanh

### Bước 1: Cài Tampermonkey
Truy cập link phù hợp với trình duyệt của bạn:
- **Chrome/Edge**: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
- **Firefox**: https://addons.mozilla.org/firefox/addon/tampermonkey/

### Bước 2: Cài script
1. Click vào đây: [amap-vietnamese.user.js](https://github.com/hieuck/amap-vh/raw/master/amap-vietnamese.user.js)
2. Tampermonkey sẽ hiện popup → Click **"Install"**
3. Xong! Truy cập https://www.amap.com để xem kết quả

## Tính năng v0.2

### Từ điển 200+ từ bao gồm:
- **Tìm kiếm & điều hướng**: Tìm kiếm, tuyến đường, điều hướng, điểm đầu/cuối
- **Phương tiện**: Ô tô, xe buýt, đi bộ, xe đạp, taxi, tàu điện ngầm
- **Loại địa điểm**: Nhà hàng, khách sạn, siêu thị, ngân hàng, trạm xăng, bệnh viện
- **Thông tin**: Địa chỉ, điện thoại, giờ mở cửa, đánh giá, giá cả
- **Tính năng bản đồ**: Phóng to/thu nhỏ, định vị, vệ tinh, tình hình giao thông
- **Hướng di chuyển**: Đông/Tây/Nam/Bắc, rẽ trái/phải, đi thẳng

### Cải tiến thuật toán:
- Sắp xếp từ dài → ngắn để tránh dịch nhầm
- Dịch placeholder, title, aria-label
- Bỏ qua thẻ script/style
- Chạy dịch nhiều lần để bắt nội dung động
- MutationObserver theo dõi thay đổi DOM

## Cập nhật script

Tampermonkey tự động kiểm tra cập nhật mỗi ngày. Để cập nhật thủ công:
1. Click icon Tampermonkey
2. Chọn "Dashboard"
3. Tìm "Amap Việt hóa"
4. Click biểu tượng "Last updated" để kiểm tra

## Tùy chỉnh

Để thêm từ mới vào từ điển:
1. Mở Tampermonkey Dashboard
2. Click vào "Amap Việt hóa"
3. Tìm object `translations`
4. Thêm cặp `'中文': 'Tiếng Việt',`
5. Lưu lại (Ctrl+S)

Ví dụ:
```javascript
const translations = {
    '你的新词': 'Từ mới của bạn',
    // ... các từ khác
};
```

## Khắc phục sự cố

### Script không hoạt động?
- Kiểm tra Tampermonkey đã bật chưa (icon màu xanh)
- Refresh lại trang (Ctrl+R hoặc F5)
- Xem Console (F12) có lỗi gì không

### Một số chữ chưa được dịch?
- Đó là những từ chưa có trong từ điển
- Bạn có thể đóng góp từ mới qua Issues hoặc Pull Request

### Dịch sai?
- Báo lỗi tại: https://github.com/hieuck/amap-vh/issues
- Ghi rõ: từ sai, nghĩa hiện tại, nghĩa đúng

## Đóng góp

Rất hoan nghênh mọi đóng góp! Bạn có thể:
- **Thêm từ mới**: Tạo Pull Request với từ mới
- **Báo lỗi**: Tạo Issue mô tả chi tiết
- **Chia sẻ**: Star ⭐ repo nếu thấy hữu ích

## FAQ

**Q: Script có làm chậm trang web không?**  
A: Không, script chỉ xử lý text matching, không ảnh hưởng tốc độ tải.

**Q: Có hoạt động trên mobile không?**  
A: Chỉ hoạt động trên desktop browser có hỗ trợ Tampermonkey.

**Q: Tôi có thể dùng cho trang khác không?**  
A: Bạn cần chỉnh sửa `@match` trong header để áp dụng cho domain khác.

**Q: Script có thu thập dữ liệu không?**  
A: Hoàn toàn không. Script chạy local trên máy bạn, không gửi data đi đâu.
