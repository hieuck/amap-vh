// ==UserScript==
// @name         Amap Việt hóa
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Việt hóa giao diện Amap.com
// @author       hieuck
// @match        https://www.amap.com/*
// @match        https://*.amap.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Từ điển dịch Trung - Việt
    const translations = {
        // Tìm kiếm
        '搜索': 'Tìm kiếm',
        '搜': 'Tìm',
        '请输入关键词': 'Nhập từ khóa',
        '查询': 'Tra cứu',
        
        // Điều hướng
        '路线': 'Tuyến đường',
        '导航': 'Điều hướng',
        '出发': 'Xuất phát',
        '到达': 'Đến',
        '起点': 'Điểm đầu',
        '终点': 'Điểm cuối',
        
        // Phương tiện
        '驾车': 'Ô tô',
        '公交': 'Xe buýt',
        '步行': 'Đi bộ',
        '骑行': 'Xe đạp',
        
        // Thông tin địa điểm
        '地址': 'Địa chỉ',
        '电话': 'Điện thoại',
        '营业时间': 'Giờ mở cửa',
        '评分': 'Đánh giá',
        '距离': 'Khoảng cách',
        
        // Các nút chức năng
        '收藏': 'Yêu thích',
        '分享': 'Chia sẻ',
        '详情': 'Chi tiết',
        '全景': 'Toàn cảnh',
        '街景': 'Street View',
        
        // Menu
        '首页': 'Trang chủ',
        '地图': 'Bản đồ',
        '更多': 'Thêm',
        '设置': 'Cài đặt',
        '帮助': 'Trợ giúp',
        '登录': 'Đăng nhập',
        '注册': 'Đăng ký',
        
        // Đơn vị
        '公里': 'km',
        '米': 'm',
        '分钟': 'phút',
        '小时': 'giờ',
        
        // Khác
        '附近': 'Gần đây',
        '推荐': 'Đề xuất',
        '热门': 'Phổ biến',
        '最新': 'Mới nhất',
        '全部': 'Tất cả',
        '取消': 'Hủy',
        '确定': 'OK',
    };

    // Hàm thay thế text trong node
    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.textContent;
            let translated = false;
            
            for (let [chinese, vietnamese] of Object.entries(translations)) {
                if (text.includes(chinese)) {
                    text = text.replace(new RegExp(chinese, 'g'), vietnamese);
                    translated = true;
                }
            }
            
            if (translated) {
                node.textContent = text;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Dịch placeholder và title attributes
            if (node.placeholder) {
                for (let [chinese, vietnamese] of Object.entries(translations)) {
                    node.placeholder = node.placeholder.replace(new RegExp(chinese, 'g'), vietnamese);
                }
            }
            if (node.title) {
                for (let [chinese, vietnamese] of Object.entries(translations)) {
                    node.title = node.title.replace(new RegExp(chinese, 'g'), vietnamese);
                }
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

    // Chạy dịch ban đầu
    translatePage();

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

    console.log('Amap Việt hóa đã được kích hoạt');
})();
