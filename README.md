# Amap Việt hóa

Userscript để việt hóa giao diện Amap.com sang tiếng Việt.

## Cài đặt

### 1. Cài đặt Tampermonkey
- Chrome: [Tampermonkey trên Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox: [Tampermonkey trên Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- Edge: [Tampermonkey trên Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. Cài đặt script
1. Click vào biểu tượng Tampermonkey trên thanh công cụ
2. Chọn "Create a new script..."
3. Xóa nội dung mặc định
4. Copy toàn bộ nội dung file `amap-vietnamese.user.js` và paste vào
5. Nhấn Ctrl+S (hoặc Cmd+S trên Mac) để lưu
6. Truy cập [Amap.com](https://www.amap.com) để thấy giao diện đã được việt hóa

### Hoặc cài đặt trực tiếp
Click vào link sau để cài đặt trực tiếp (sau khi đã cài Tampermonkey):
- [Cài đặt Amap Việt hóa](https://github.com/hieuck/amap-vh/raw/master/amap-vietnamese.user.js)

## Tính năng

- Tự động dịch các thành phần giao diện chính:
  - Menu điều hướng
  - Nút tìm kiếm và chức năng
  - Thông tin địa điểm
  - Tuyến đường và phương tiện
  - Placeholder và tooltip
- Theo dõi thay đổi DOM để dịch nội dung được tải động
- Không ảnh hưởng đến hiệu năng trang web

## Từ điển

Hiện tại script hỗ trợ dịch các thuật ngữ phổ biến nhất. Bạn có thể mở rộng từ điển bằng cách chỉnh sửa object `translations` trong file script.

## Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo pull request hoặc báo lỗi qua Issues.

## License

MIT License
