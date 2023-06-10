import React, { useState } from 'react';
import ProductForm from './ProductForm';

const ProductItem = ({ product, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = updatedProduct => {
    setIsEditing(false);
    onUpdate(product.id, updatedProduct);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div>
      {isEditing ? (
        <ProductForm
          product={product}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div>
          <img src={product.thumbnail} height="20px" width="80px" alt={product.title} />
          <p>Discounted Price: {product.price}</p>
          <p>Title: {product.title}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
