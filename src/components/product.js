import React, { useState } from 'react';
import ProductData from './productData';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useCart } from '../Contexts/CartContext'; // Import useCart
import '../styles/Product.css';

const Product = () => {
    const [detail, setDetail] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const { addToCart } = useCart(); // Destructure addToCart from context

    const openDetail = (product) => {
        setDetail(product);
        setIsOpen(true);
    };

    const closeDetail = () => {
        setDetail(null);
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && detail && (
                <div className="detail-container">
                    <div className="detail-content">
                        <button className="close-button" onClick={closeDetail}>
                            <AiFillCloseCircle />
                        </button>
                        <div className="detail-info">
                            <div className="detail-image">
                                <img src={detail.img} alt={detail.Title} />
                            </div>
                            <div className="detail-text">
                                <h2>{detail.Title}</h2>
                                <h3>{detail.Price} VNĐ</h3>
                                <p>{detail.Des}</p>
                                <button 
                                    className="add-cart-button"
                                    onClick={() => addToCart(detail)} // Add to cart
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="product-container">
                {ProductData.map((product) => (
                    <div className="product-box" key={product.id}>
                        <div className="product-content">
                            <div className="product-image">
                                <img src={product.img} alt={product.Title} />
                            </div>
                            <div className="product-info">
                                <h3>{product.Title}</h3>
                                <p>{product.Price} VNĐ</p>
                                <button 
                                    className="view-button" 
                                    onClick={() => openDetail(product)}
                                >
                                    Xem Chi Tiết
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;
