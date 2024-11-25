import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = ({ categories, setActiveCategory }) => {
  return (
    <ListGroup className="sidebar-sticky">
      {categories.map((category, index) => (
        <ListGroup.Item key={index} onClick={() => setActiveCategory(category)} action>
          {category}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
