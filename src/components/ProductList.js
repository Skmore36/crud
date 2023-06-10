import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import './ProductList.css';
const ProductList = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; 

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDelete = (productId) => {
    deleteProduct(productId);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = Math.ceil(products.length / productsPerPage);

    return (
      <div>
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className='dis'>
      {currentProducts.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} height="50px" width="80px" alt={product.title} />
          <p>{product.price}</p>
          <p>{product.title}</p>
          <button>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
      {renderPagination()}
    </div>
  );
};

export default ProductList;
