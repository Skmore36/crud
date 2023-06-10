import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      async function fetchProducts(){
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data.products)
      setProducts(data.products);
    }
    fetchProducts();
    },[]);

  const updateProduct = (productId, updatedProduct) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            title: updatedProduct.title,
            discountedPrice: updatedProduct.discountedPrice,
          };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== productId
      );
      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider value={{ products, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
