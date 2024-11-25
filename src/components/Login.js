import React, { useState } from "react";
import '../styles/Login.css'; 
import Register from './RegisterForm';  // Import form đăng ký

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);  // State để quản lý việc chuyển đổi giữa form Login và Register
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Đăng nhập thành công');
    };

    // Hàm để chuyển sang form đăng ký
    const handleSwitchToRegister = () => {
        setIsRegistering(true);
    };

    // Nếu isRegistering là true thì hiển thị form đăng ký, nếu không thì hiển thị form đăng nhập
    return (
        <div className="auth-container">
            {isRegistering ? (
                <Register /> /* Hiển thị form đăng ký nếu isRegistering là true */
            ) : (
                <div className="login-container">
                    <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
                    <p>Nhập email và mật khẩu của bạn:</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group"> 
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>

                        <div className="form-group"> 
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>

                        <div className="recaptcha-info">
                            <p>
                                This site is protected by reCAPTCHA and the Google
                                <a href="#chinhsach"> Privacy Policy</a> and
                                <a href="#dichvu"> Terms of Service</a> apply.
                            </p>
                        </div>

                        <button type="submit" className="login-button">ĐĂNG NHẬP</button>
                    </form>

                    <div className="footer-links">
                        <p>
                            Khách hàng mới? <a onClick={handleSwitchToRegister}>Tạo tài khoản</a>
                        </p>
                        <p>
                            Quên mật khẩu? <a href="/resetemail">Khôi phục mật khẩu</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
