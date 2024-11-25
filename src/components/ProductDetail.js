import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProductDetail.css'

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="image-container">
            <img src={selectedImage} alt={product.name} className="product-detail-image" />
          </div>
          <div className="image-thumbnails">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="thumbnail"
                onMouseEnter={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>
          <Button variant="success">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
