import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <Row>
      {products.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
          <Card className="product-card">
            <div className="image-container">
              <Card.Img variant="top" src={product.image} className="product-image" />
            </div>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className="product-price">${product.price}</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
