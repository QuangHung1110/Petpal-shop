import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterEmail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email nhập vào:", email);
    // Xử lý việc gửi email tới backend để khôi phục mật khẩu (giả lập)
    // Điều hướng đến trang đặt lại mật khẩu sau khi email hợp lệ
    navigate('/reset');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>KHÔI PHỤC MẬT KHẨU</h2>
      <p style={styles.subtitle}>Nhập email của bạn:</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <p style={styles.notice}>
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Privacy Policy
          </a> and&nbsp;
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Terms of Service
          </a> apply.
        </p>
        <button type="submit" style={styles.button}>KHÔI PHỤC</button>
      </form>
      <p style={styles.footer}>
        Bạn đã nhớ mật khẩu?&nbsp;
        <a href="/login" style={styles.link}>Trở về đăng nhập</a>
      </p>
    </div>
  );
};

// CSS styles cho component
const styles = {
  container: {
    width: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: '20px 0',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    boxSizing: 'border-box',
  },
  notice: {
    fontSize: '12px',
    color: '#999',
    textAlign: 'left',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    marginTop: '10px',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
  }
};

export default EnterEmail;
