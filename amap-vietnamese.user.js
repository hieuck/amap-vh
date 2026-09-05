// ==UserScript==
// @name         Amap Việt hóa
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  Việt hóa giao diện Amap.com sang tiếng Việt
// @author       hieuck
// @match        https://www.amap.com/*
// @match        https://*.amap.com/*
// @match        https://id.amap.com/*
// @grant        none
// @run-at       document-end
// @updateURL    https://github.com/hieuck/amap-vh/raw/master/amap-vietnamese.user.js
// @downloadURL  https://github.com/hieuck/amap-vh/raw/master/amap-vietnamese.user.js
// @supportURL   https://github.com/hieuck/amap-vh/issues
// @homepageURL  https://github.com/hieuck/amap-vh
// ==/UserScript==

(function() {
    'use strict';

    // Từ điển dịch Trung - Việt (mở rộng v0.3)
    const translations = {
        // Tìm kiếm
        '搜索': 'Tìm kiếm',
        '搜': 'Tìm',
        '请输入关键词': 'Nhập từ khóa',
        '请输入地点': 'Nhập địa điểm',
        '请输入地址': 'Nhập địa chỉ',
        '请输入起点': 'Nhập điểm đầu',
        '请输入终点': 'Nhập điểm cuối',
        '查询': 'Tra cứu',
        '查找': 'Tìm',
        '搜索结果': 'Kết quả tìm kiếm',
        '没有找到相关结果': 'Không tìm thấy kết quả',
        '搜索历史': 'Lịch sử tìm kiếm',
        
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
        '方案': 'Phương án',
        '换一换': 'Đổi khác',
        '反馈问题': 'Phản hồi vấn đề',
        
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
        '地图选点': 'Chọn điểm trên bản đồ',
        
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
        '发送': 'Gửi',
        '提交反馈': 'Gửi phản hồi',
        
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
        '退出登录': 'Đăng xuất',
        '忘记密码': 'Quên mật khẩu',
        '记住我': 'Ghi nhớ',
        '密码': 'Mật khẩu',
        '用户名': 'Tên người dùng',
        '手机号': 'Số điện thoại',
        '验证码': 'Mã xác thực',
        '获取验证码': 'Lấy mã',
        
        // Bản đồ
        '放大': 'Phóng to',
        '缩小': 'Thu nhỏ',
        '定位': 'Định vị',
        '当前位置': 'Vị trí hiện tại',
        '我的位置': 'Vị trí của tôi',
        '卫星图': 'Vệ tinh',
        '路况': 'Giao thông',
        '拥堵': 'Tắc đường',
        '畅通': 'Thông thoáng',
        '缓行': 'Chậm',
        '图层': 'Lớp bản đồ',
        '测距': 'Đo khoảng cách',
        '标记': 'Đánh dấu',
        
        // Đơn vị
        '公里': 'km',
        '千米': 'km',
        '米': 'm',
        '分钟': 'phút',
        '小时': 'giờ',
        '天': 'ngày',
        '元': '¥',
        '约': 'Khoảng',
        '预计': 'Dự kiến',
        
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
        '进入': 'Vào',
        '出口': 'Lối ra',
        '入口': 'Lối vào',
        
        // Phản hồi (Feedback)
        '问题反馈': 'Phản hồi vấn đề',
        '反馈类型': 'Loại phản hồi',
        '问题描述': 'Mô tả vấn đề',
        '请详细描述您遇到的问题': 'Vui lòng mô tả chi tiết vấn đề',
        '联系方式': 'Thông tin liên hệ',
        '手机': 'Điện thoại',
        '邮箱': 'Email',
        '上传图片': 'Tải ảnh lên',
        '提交': 'Gửi',
        '感谢您的反馈': 'Cảm ơn phản hồi của bạn',
        '数据错误': 'Lỗi dữ liệu',
        '功能建议': 'Đề xuất tính năng',
        '其他问题': 'Vấn đề khác',
        '地图问题': 'Vấn đề bản đồ',
        '导航问题': 'Vấn đề điều hướng',
        '搜索问题': 'Vấn đề tìm kiếm',
        
        // Khác
        '附近': 'Gần đây',
        '推荐': 'Đề xuất',
        '热门': 'Phổ biến',
        '最新': 'Mới nhất',
        '全部': 'Tất cả',
        '取消': 'Hủy',
        '确定': 'OK',
        '确认': 'Xác nhận',
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
        '提示': 'Thông báo',
        '警告': 'Cảnh báo',
        '错误': 'Lỗi',
        '正在': 'Đang',
        '完成': 'Hoàn thành',
        '继续': 'Tiếp tục',
        '下一步': 'Tiếp theo',
        '上一步': 'Quay lại',
        '跳过': 'Bỏ qua',
        '同意': 'Đồng ý',
        '不同意': 'Không đồng ý',
        '我知道了': 'Tôi hiểu rồi',
        '查看': 'Xem',
        '查看详情': 'Xem chi tiết',
        '更新': 'Cập nhật',
        '版本': 'Phiên bản',
        '语言': 'Ngôn ngữ',
        '中文': 'Tiếng Trung',
        '英文': 'Tiếng Anh',
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
                    newText = newText.replace(new RegExp(chinese.replace(/[.*+?^${}()|[\]\]/g, '\$&'), 'g'), vietnamese);
                    translated = true;
                }
            }
            
            if (translated) {
                node.textContent = newText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Bỏ qua các thẻ script và style
            if (node.tagName === 'SCRIPT' || node.ta
