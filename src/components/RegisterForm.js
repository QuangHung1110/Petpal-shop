import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/RegisterForm.css'; // Import custom CSS

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            ho: '',
            ten: '',
            gioiTinh: '',
            ngaySinh: '',
            email: '',
            matKhau: ''
        },
        validationSchema: Yup.object({
            ho: Yup.string().required('Vui lòng nhập họ'),
            ten: Yup.string().required('Vui lòng nhập tên'),
            email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
            matKhau: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu')
        }),
        onSubmit: values => {
            console.log(values);
            alert('Đăng ký thành công!');
        }
    });

    return (
        <div className="register-container">
            <h2 className="text-center mb-4">Đăng ký tài khoản</h2>
            <form className="register-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="ho">Họ</label>
                    <input
                        id="ho"
                        name="ho"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ho}
                    />
                    {formik.touched.ho && formik.errors.ho ? (
                        <div className="error-text">{formik.errors.ho}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="ten">Tên</label>
                    <input
                        id="ten"
                        name="ten"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ten}
                    />
                    {formik.touched.ten && formik.errors.ten ? (
                        <div className="error-text">{formik.errors.ten}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label>Giới tính</label>
                    <div className="d-flex">
                        <div className="form-check me-3">
                            <input
                                id="nu"
                                name="gioiTinh"
                                type="radio"
                                value="Nữ"
                                className="form-check-input"
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="nu" className="form-check-label">Nữ</label>
                        </div>
                        <div className="form-check">
                            <input
                                id="nam"
                                name="gioiTinh"
                                type="radio"
                                value="Nam"
                                className="form-check-input"
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="nam" className="form-check-label">Nam</label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="ngaySinh">Ngày sinh</label>
                    <input
                        id="ngaySinh"
                        name="ngaySinh"
                        type="date"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.ngaySinh}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-text">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="matKhau">Mật khẩu</label>
                    <input
                        id="matKhau"
                        name="matKhau"
                        type="password"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.matKhau}
                    />
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                        <div className="error-text">{formik.errors.matKhau}</div>
                    ) : null}
                </div>

                <button className="btn btn-primary w-100 mt-3" type="submit">
                    Đăng ký
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
