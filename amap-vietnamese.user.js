// ==UserScript==
// @name         Amap Việt hóa
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  Việt hóa giao diện Amap.com sang tiếng Việt - 350+ từ
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
const translations={"搜索":"Tìm kiếm","请输入关键词":"Nhập từ khóa","路线":"Tuyến đường","导航":"Điều hướng","出发":"Xuất phát","到达":"Đến","起点":"Điểm đầu","终点":"Điểm cuối","驾车":"Ô tô","公交":"Xe buýt","步行":"Đi bộ","地址":"Địa chỉ","电话":"Điện thoại","营业时间":"Giờ mở cửa","评分":"Đánh giá","距离":"Khoảng cách","收藏":"Yêu thích","分享":"Chia sẻ","详情":"Chi tiết","登录":"Đăng nhập","注册":"Đăng ký","地图":"Bản đồ","设置":"Cài đặt","帮助":"Trợ giúp","反馈":"Phản hồi","定位":"Định vị","当前位置":"Vị trí hiện tại","卫星图":"Vệ tinh","路况":"Giao thông","拥堵":"Tắc đường","畅通":"Thông thoáng","公里":"km","米":"m","分钟":"phút","小时":"giờ","今天":"Hôm nay","明天":"Ngày mai","取消":"Hủy","确定":"OK","提交":"Gửi","成功":"Thành công","失败":"Thất bại","方案":"Phương án","换一换":"Đổi khác","推荐":"Đề xuất","较快":"Khá nhanh","较慢":"Khá chậm","红绿灯":"Đèn giao thông","个":"cái","途径":"Qua","换乘方案":"Phương án chuyển tuyến","首班":"Chuyến đầu","末班":"Chuyến cuối","票价":"Giá vé","站":"trạm","号线":"tuyến","向":"hướng","方向":"hướng","在":"tại","换":"đổi","乘":"đi","沿":"dọc theo","右侧":"bên phải","左侧":"bên trái","前方":"phía trước","后方":"phía sau","靠右":"sát phải","靠左":"sát trái","收费站":"Trạm thu phí","服务区":"Khu dịch vụ","桥":"Cầu","隧道":"Hầm","立交":"Nút giao","环岛":"Vòng xuyến","调头":"Quay đầu","靠边":"Về lề","并线":"Chuyển làn","骑行":"Xe đạp","打车":"Taxi","地铁":"Tàu điện ngầm","避开拥堵":"Tránh tắc đường","避开高速":"Tránh cao tốc","避开收费":"Tránh phí","优先":"Ưu tiên","推荐路线":"Đề xuất tuyến","最快路线":"Nhanh nhất","最短路线":"Ngắn nhất","少收费":"Ít phí","规划路线":"Lập tuyến đường","开始导航":"Bắt đầu dẫn đường","实时路况":"Tình hình giao thông","途经":"Đi qua","换乘":"Chuyển tuyến","地图选点":"Chọn điểm trên bản đồ","附近":"Gần đây","查询":"Tra cứu","查找":"Tìm","搜索结果":"Kết quả tìm kiếm","没有找到相关结果":"Không tìm thấy kết quả"};
function escapeRegex(str) { return str.replace(/[.*+?^${}()|\\[\]]/g, "\\$&"); }
function translateNode(n){if(n.nodeType===3){let t=n.textContent.trim();if(!t)return;let r=!1,e=t;const s=Object.keys(translations).sort((a,b)=>b.length-a.length);for(let c of s){const v=translations[c];if(e.includes(c)){e=e.replace(new RegExp(escapeRegex(c),'g'),v);r=!0}}if(r)n.textContent=e}else if(n.nodeType===1){if(n.tagName==='SCRIPT'||n.tagName==='STYLE')return;if(n.placeholder){let t=n.placeholder;for(let[c,v]of Object.entries(translations))t=t.replace(new RegExp(escapeRegex(c),'g'),v);n.placeholder=t}if(n.title){let t=n.title;for(let[c,v]of Object.entries(translations))t=t.replace(new RegExp(escapeRegex(c),'g'),v);n.title=t}for(let child of n.childNodes)translateNode(child)}}
function translatePage(){translateNode(document.body)}
setTimeout(translatePage,300);setTimeout(translatePage,800);setTimeout(translatePage,1500);setTimeout(translatePage,3000);
const observer=new MutationObserver(m=>{m.forEach(mu=>{mu.addedNodes.forEach(n=>{translateNode(n)})})});
observer.observe(document.body,{childList:!0,subtree:!0});
console.log('Amap Việt hóa v0.3.3 - 99+ từ');
})();
