import React from 'react';
import '../styles/UserInfo.css'; // Đảm bảo bạn tạo file CSS để định dạng

const UserInfo = () => {
    // Thông tin người dùng giả định
    const user = {
        name: "Huynh Truong",
        email: "ngoctruong081204@gmail.com",
        country: "Vietnam",
        address: "Xem địa chỉ"
    };

    return (
        <div className="user-info-container">
            <h1 className="user-info-title">Tài khoản của bạn</h1>
            <div className="user-info-content">
                <div className="user-info-sidebar">
                    <h3>Tài khoản</h3>
                    <ul>
                        <li>Thông tin tài khoản</li>
                        <li>Danh sách địa chỉ</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
                <div className="user-info-details">
                    <h3>Thông tin tài khoản</h3>
                    <p><strong>{user.name}</strong></p>
                    <p>{user.email}</p>
                    <p>{user.country}</p>
                    <a href="#user">{user.address}</a>
                    <div className="no-orders">
                        <p>Bạn chưa đặt mua sản phẩm.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
