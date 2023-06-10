import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import './ProductForm.css'
const ProductForm = ({ productId }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const { updateProduct } = useContext(ProductContext);

  const handleSave = () => {
    const updatedProduct = {
      title,
      discountedPrice: price,
    };
    updateProduct(productId, updatedProduct);
    setTitle('');
    setPrice('');
  };

  return (
    <div className='Form'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductForm;
