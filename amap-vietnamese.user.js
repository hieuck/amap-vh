// ==UserScript==
// @name         Amap Việt hóa
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Việt hóa giao diện Amap.com sang tiếng Việt
// @author       hieuck
// @match        https://www.amap.com/*
// @match        https://*.amap.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Từ điển dịch Trung - Việt (mở rộng)
    const translations = {
        // Tìm kiếm
        '搜索': 'Tìm kiếm',
        '搜': 'Tìm',
        '请输入关键词': 'Nhập từ khóa',
        '请输入地点': 'Nhập địa điểm',
        '查询': 'Tra cứu',
        '查找': 'Tìm',
        '搜索结果': 'Kết quả tìm kiếm',
        '没有找到相关结果': 'Không tìm thấy kết quả',
        
        // Điều hướng
        '路线': 'Tuyến đường',
        '导航': 'Điều hướng',
        '出发': 'Xuất phát',
        '到达': 'Đến',
        '起点': 'Điểm đầu',
        '终点': 'Điểm cuối',
        '途经': 'Đi qua',
        '换乘': 'Chuyển tuyến',
        '规划路线': 'Lập tuyến đường',
        '开始导航': 'Bắt đầu dẫn đường',
        '实时路况': 'Tình hình giao thông',
        '避开拥堵': 'Tránh tắc đường',
        '避开高速': 'Tránh cao tốc',
        '避开收费': 'Tránh phí',
        '优先': 'Ưu tiên',
        '推荐路线': 'Đề xuất tuyến',
        '最快路线': 'Nhanh nhất',
        '最短路线': 'Ngắn nhất',
        '少收费': 'Ít phí',
        
        // Phương tiện
        '驾车': 'Ô tô',
        '公交': 'Xe buýt',
        '步行': 'Đi bộ',
        '骑行': 'Xe đạp',
        '打车': 'Taxi',
        '地铁': 'Tàu điện ngầm',
        '火车': 'Tàu hóa',
        '飞机': 'Máy bay',
        '货车': 'Xe tải',
        
        // Thông tin địa điểm
        '地址': 'Địa chỉ',
        '电话': 'Điện thoại',
        '营业时间': 'Giờ mở cửa',
        '评分': 'Đánh giá',
        '距离': 'Khoảng cách',
        '简介': 'Giới thiệu',
        '照片': 'Ảnh',
        '评价': 'Nhận xét',
        '价格': 'Giá',
        '人均': 'Bình quân/người',
        '停车场': 'Bãi đỗ xe',
        '周边': 'Xung quanh',
        '附近的': 'Gần đây',
        
        // Loại địa điểm
        '餐饮': 'Ăn uống',
        '酒店': 'Khách sạn',
        '购物': 'Mua sắm',
        '生活服务': 'Dịch vụ',
        '医疗': 'Y tế',
        '教育': 'Giáo dục',
        '景点': 'Điểm tham quan',
        '娱乐': 'Giải trí',
        '运动': 'Thể thao',
        '银行': 'Ngân hàng',
        '加油站': 'Trạm xăng',
        '停车': 'Đỗ xe',
        '厕所': 'Toilet',
        '超市': 'Siêu thị',
        '商场': 'Trung tâm thương mại',
        '地铁站': 'Ga tàu điện ngầm',
        '公交站': 'Trạm xe buýt',
        '机场': 'Sân bay',
        '火车站': 'Ga tàu',
        
        // Các nút chức năng
        '收藏': 'Yêu thích',
        '分享': 'Chia sẻ',
        '详情': 'Chi tiết',
        '全景': 'Toàn cảnh',
        '街景': 'Street View',
        '打开': 'Mở',
        '关闭': 'Đóng',
        '显示': 'Hiện',
        '隐藏': 'Ẩn',
        '展开': 'Mở rộng',
        '收起': 'Thu gọn',
        '复制': 'Sao chép',
        '保存': 'Lưu',
        '删除': 'Xóa',
        '编辑': 'Chỉnh sửa',
        '添加': 'Thêm',
        '选择': 'Chọn',
        '返回': 'Quay lại',
        '刷新': 'Làm mới',
        '下载': 'Tải về',
        
        // Menu
        '首页': 'Trang chủ',
        '地图': 'Bản đồ',
        '更多': 'Thêm',
        '设置': 'Cài đặt',
        '帮助': 'Trợ giúp',
        '反馈': 'Phản hồi',
        '关于': 'Về chúng tôi',
        '登录': 'Đăng nhập',
        '注册': 'Đăng ký',
        '退出': 'Thoát',
        '账号': 'Tài khoản',
        '个人中心': 'Cá nhân',
        '我的收藏': 'Yêu thích của tôi',
        '历史记录': 'Lịch sử',
        '清除历史': 'Xóa lịch sử',
        
        // Bản đồ
        '放大': 'Phóng to',
        '缩小': 'Thu nhỏ',
        '定位': 'Định vị',
        '当前位置': 'Vị trí hiện tại',
        '卫星图': 'Vệ tinh',
        '路况': 'Giao thông',
        '拥堵': 'Tắc đường',
        '畅通': 'Thông thoáng',
        '缓行': 'Chậm',
        '图层': 'Lớp bản đồ',
        
        // Đơn vị
        '公里': 'km',
        '千米': 'km',
        '米': 'm',
        '分钟': 'phút',
        '小时': 'giờ',
        '天': 'ngày',
        '元': '¥',
        '约': 'Khoảng',
        
        // Thời gian
        '今天': 'Hôm nay',
        '明天': 'Ngày mai',
        '昨天': 'Hôm qua',
        '上午': 'Sáng',
        '下午': 'Chiều',
        '晚上': 'Tối',
        '凌晨': 'Rạng sáng',
        '现在': 'Bây giờ',
        
        // Hướng
        '东': 'Đông',
        '南': 'Nam',
        '西': 'Tây',
        '北': 'Bắc',
        '左转': 'Rẽ trái',
        '右转': 'Rẽ phải',
        '直行': 'Đi thẳng',
        '掉头': 'Quay đầu',
        
        // Khác
        '附近': 'Gần đây',
        '推荐': 'Đề xuất',
        '热门': 'Phổ biến',
        '最新': 'Mới nhất',
        '全部': 'Tất cả',
        '取消': 'Hủy',
        '确定': 'OK',
        '确认': 'Xác nhận',
        '提交': 'Gửi',
        '已': 'Đã',
        '未': 'Chưa',
        '是': 'Có',
        '否': 'Không',
        '请': 'Vui lòng',
        '加载中': 'Đang tải...',
        '加载更多': 'Tải thêm',
        '暂无': 'Chưa có',
        '暂无数据': 'Chưa có dữ liệu',
        '网络错误': 'Lỗi mạng',
        '重试': 'Thử lại',
        '成功': 'Thành công',
        '失败': 'Thất bại',
    };

    // Hàm thay thế text trong node
    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.textContent.trim();
            if (!text) return;
            
            let translated = false;
            let newText = text;
            
            // Sắp xếp từ dài đến ngắn để tránh dịch sai
            const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
            
            for (let chinese of sortedKeys) {
                const vietnamese = translations[chinese];
                if (newText.includes(chinese)) {
                    newText = newText.replace(new RegExp(chinese, 'g'), vietnamese);
                    translated = true;
                }
            }
            
            if (translated) {
                node.textContent = newText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Bỏ qua các thẻ script và style
            if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
                return;
            }
            
            // Dịch placeholder
            if (node.placeholder) {
                let translated = node.placeholder;
                for (let [chinese, vietnamese] of Object.entries(translations)) {
                    translated = translated.replace(new RegExp(chinese, 'g'), vietnamese);
                }
                node.placeholder = translated;
            }
            
            // Dịch title
            if (node.title) {
                let translated = node.title;
                for (let [chinese, vietnamese] of Object.entries(translations)) {
                    translated = translated.replace(new RegExp(chinese, 'g'), vietnamese);
                }
                node.title = translated;
            }
            
            // Dịch aria-label
            if (node.getAttribute('aria-label')) {
                let translated = node.getAttribute('aria-label');
                for (let [chinese, vietnamese] of Object.entries(translations)) {
                    translated = translated.replace(new RegExp(chinese, 'g'), vietnamese);
                }
                node.setAttribute('aria-label', translated);
            }
            
            // Dịch các node con
            for (let child of node.childNodes) {
                translateNode(child);
            }
        }
    }

    // Dịch toàn bộ trang
    function translatePage() {
        translateNode(document.body);
    }

    // Chạy dịch ban đầu sau một khoảng thời gian ngắn
    setTimeout(translatePage, 500);
    setTimeout(translatePage, 1500);
    setTimeout(translatePage, 3000);

    // Theo dõi thay đổi DOM để dịch nội dung động
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                translateNode(node);
            });
        });
    });

    // Bắt đầu theo dõi
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Amap Việt hóa v0.2 đã được kích hoạt - 200+ từ');
})();
