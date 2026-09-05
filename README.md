# Amap Việt hóa

[![Version](https://img.shields.io/badge/version-0.2.1-blue.svg)](https://github.com/hieuck/amap-vh/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Userscript](https://img.shields.io/badge/userscript-tampermonkey-orange.svg)](https://www.tampermonkey.net/)
[![Stars](https://img.shields.io/github/stars/hieuck/amap-vh?style=social)](https://github.com/hieuck/amap-vh)

Userscript để việt hóa giao diện Amap.com sang tiếng Việt.

🌐 **[Website](https://hieuck.github.io/amap-vh/)** | 📥 **[Cài đặt ngay](https://github.com/hieuck/amap-vh/raw/master/amap-vietnamese.user.js)** | 📖 **[Hướng dẫn](USAGE.md)** | 📝 **[Changelog](CHANGELOG.md)**

---

## Cài đặt nhanh

### 1. Cài đặt Tampermonkey
- Chrome: [Tampermonkey trên Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- Firefox: [Tampermonkey trên Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- Edge: [Tampermonkey trên Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. Cài đặt script
**Click vào link này để cài đặt trực tiếp:**

👉 **[Cài đặt Amap Việt hóa](https://github.com/hieuck/amap-vh/raw/master/amap-vietnamese.user.js)** 👈

Tampermonkey sẽ tự động hiện popup, nhấn **Install** là xong!

### Hoặc cài đặt thủ công
1. Click vào biểu tượng Tampermonkey trên thanh công cụ
2. Chọn "Create a new script..."
3. Xóa nội dung mặc định
4. Copy toàn bộ nội dung file `amap-vietnamese.user.js` và paste vào
5. Nhấn Ctrl+S (hoặc Cmd+S trên Mac) để lưu
6. Truy cập [Amap.com](https://www.amap.com) để thấy giao diện đã được việt hóa

---

## Tính năng

### ✨ 200+ thuật ngữ được việt hóa

- 🔍 **Tìm kiếm & Điều hướng** - Tìm kiếm, tuyến đường, điểm đầu/cuối, lập tuyến
- 🚗 **Phương tiện** - Ô tô, xe buýt, đi bộ, xe đạp, taxi, tàu điện ngầm
- 📍 **Địa điểm** - Nhà hàng, khách sạn, siêu thị, ngân hàng, trạm xăng, bệnh viện
- 🗺️ **Bản đồ** - Phóng to/thu nhỏ, định vị, vệ tinh, tình hình giao thông
- 🧭 **Hướng** - Đông/Tây/Nam/Bắc, rẽ trái/phải, đi thẳng, quay đầu
- ⏰ **Thời gian** - Hôm nay, ngày mai, sáng/chiều/tối

### 🚀 Hiệu năng cao

- Tự động dịch nội dung động (AJAX/SPA)
- Theo dõi thay đổi DOM với MutationObserver
- Thuật toán dịch thông minh, tránh dịch nhầm
- Không làm chậm trang web

### 🔄 Tự động cập nhật

- Tampermonkey tự động kiểm tra cập nhật mỗi ngày
- Thông báo khi có phiên bản mới
- Cập nhật chỉ với 1 click

---

## Demo

Truy cập [https://hieuck.github.io/amap-vh/](https://hieuck.github.io/amap-vh/) để xem hướng dẫn chi tiết với giao diện đẹp mắt.

### Trước và sau khi việt hóa

| Trước | Sau |
|-------|-----|
| 搜索 | Tìm kiếm |
| 导航 | Điều hướng |
| 驾车 | Ô tô |
| 路线 | Tuyến đường |
| 距离 | Khoảng cách |

---

## Hướng dẫn chi tiết

Xem [USAGE.md](USAGE.md) để biết thêm chi tiết về:
- Cách tùy chỉnh và thêm từ mới
- Khắc phục sự cố
- FAQ

---

## Changelog

Xem [CHANGELOG.md](CHANGELOG.md) để biết lịch sử phiên bản.

**Phiên bản mới nhất: v0.2.1**
- ✅ 200+ từ việt hóa
- ✅ Tự động cập nhật
- ✅ Hỗ trợ nội dung động

---

## Đóng góp

Mọi đóng góp đều được chào đón! 

### Cách đóng góp
1. Fork repo này
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

### Báo lỗi hoặc đề xuất
- [Tạo Issue](https://github.com/hieuck/amap-vh/issues/new)
- Mô tả rõ vấn đề hoặc đề xuất của bạn
- Kèm theo screenshot nếu có thể

---

## License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

## Liên hệ

- GitHub: [@hieuck](https://github.com/hieuck)
- Issues: [GitHub Issues](https://github.com/hieuck/amap-vh/issues)

---

**⭐ Nếu thấy hữu ích, hãy cho repo một star nhé!**
